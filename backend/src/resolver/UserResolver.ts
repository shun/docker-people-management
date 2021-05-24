import { Resolver, Mutation, Int, Arg, Query } from "type-graphql";
import { getRepository, getConnection, createConnection } from "typeorm";
import { User } from "../entity/User";
import { UserProperty } from "../entity/UserProperty";
//import { ViewUser } from "../entity/ViewUser";
//import { OrgSection } from "../entity/OrgSection";
//import { Organization } from "../entity/Organization";
//import { PersonalInfo } from "../entity/PersonalInfo";
//import { ViewUserOrganization } from "../entity/ViewUserOrganization";

@Resolver()
export class UserResolver {
  //---------------------------------------------
  // Query
  //
  //@Query(() => [ViewOrganizedUser])
  //async users(
  //): Promise<ViewOrganizedUser[]> {
  //  const users = await getRepository(ViewOrganizedUser).find({
  //    where: {
  //      end_date: null
  //    }
  //  })

  //  return users;
  //}

  //@Query(() => ViewOrganizedUser, {nullable: true})
  //async user(
  //  @Arg("user_cd") user_cd: String
  //): Promise<ViewOrganizedUser|undefined> {
  //  const user = await getRepository(ViewOrganizedUser).findOne({
  //    where: {
  //      user_cd: user_cd,
  //      end_date: null
  //    }
  //  })

  //  return user;
  //}

  //@Query(() => [OrgSection])
  //async sections(): Promise<OrgSection[]> {
  //  const sections = await getRepository(OrgSection).find();

  //  return sections || [];
  //}

  //@Query(() => [ViewUserOrganization], { nullable: true })
  //async hoge(): Promise<ViewUserOrganization[] | undefined> {
  //  const root = await getRepository(ViewUserOrganization).find({
  //    relations: ["infolist"],
  //  });

  //  console.log(root);

  //  return root;
  //}
  //---------------------------------------------
  // Mutation
  //
  @Query(() => User, { nullable: true })
  async user(@Arg("user_cd") user_cd: string): Promise<User | null> {
    const user = await getRepository(User).findOne({
      where: {
        code: user_cd,
        end_date: null,
      },
    });

    if (!user) {
      return null;
    }

    const properties = await getRepository(UserProperty).find({
      where: {
        user_id: user.id,
        end_date: null,
      },
    });
    return user;
  }

  //---------------------------------------------
  // Function
  //
}
