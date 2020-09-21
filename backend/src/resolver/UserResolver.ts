import { Resolver, Mutation, Int, Arg, Query } from "type-graphql";
import { getRepository, getConnection, createConnection } from "typeorm";
import { User } from "../entity/User";
import { Organization } from "../entity/Organization";
import { ViewOrganizedUser } from "../entity/ViewOrganizedUser";

@Resolver()
export class UserResolver {
  //---------------------------------------------
  // Query
  //
  @Query(() => [ViewOrganizedUser])
  async users(
  ): Promise<ViewOrganizedUser[]> {
    const users = await getRepository(ViewOrganizedUser).find({
      where: {
        end_date: null
      }
    })

    return users;
  }

  @Query(() => ViewOrganizedUser, {nullable: true})
  async user(
    @Arg("user_cd") user_cd: String
  ): Promise<ViewOrganizedUser|undefined> {
    const user = await getRepository(ViewOrganizedUser).findOne({
      where: {
        user_cd: user_cd,
        end_date: null
      }
    })

    return user;
  }

  //---------------------------------------------
  // Mutation
  //

  //---------------------------------------------
  // Function
  //
}
