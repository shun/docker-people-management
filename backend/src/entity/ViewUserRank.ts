import {
  ViewEntity,
  ViewColumn,
  Connection,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { ObjectType, Field, InputType } from "type-graphql";

import { User } from "./User";
import { UserRank } from "./UserRank";
import { Rank } from "./Rank";
import { UserProperty } from "./UserProperty";

@ViewEntity({
  name: "ViewUserRanks",
  expression: (connection: Connection) =>
    connection
      .createQueryBuilder()
      .select("u.id", "user_id")
      .addSelect("up.value", "user_cd")
      .addSelect("u.sei", "sei")
      .addSelect("u.mei", "mei")
      .addSelect("ur.rank_name", "rank_name")
      .addSelect("r.value", "rank_value")
      .addSelect("ur.start_date", "start_date")
      .addSelect("ur.end_date", "end_date")
      .from(User, "u")
      .innerJoin(UserProperty, "up", "up.user_id = u.id")
      .innerJoin(UserRank, "ur", "ur.user_id = u.id")
      .innerJoin(Rank, "r", "ur.rank_name = r.name")
      .where("u.end_date is NULL")
      .andWhere("up.key = 'user_cd'")
      .andWhere("up.end_date is NULL")
      .andWhere("ur.end_date is NULL")
      .andWhere("r.end_date is NULL"),
})
@ObjectType()
export class ViewUserRank {
  @ViewColumn()
  @Field()
  user_id: number;

  @ViewColumn()
  @Field()
  user_cd: string;

  @ViewColumn()
  @Field()
  sei: string;

  @ViewColumn()
  @Field()
  mei: string;

  @ViewColumn()
  @Field()
  rank_name: string;

  @ViewColumn()
  @Field()
  rank_value: number;

  @ViewColumn()
  @Field()
  @Field((type) => String)
  start_date: Date;

  @ViewColumn()
  @Field((type) => String, { nullable: true })
  end_date: Date;

  // Relation
  @ManyToOne(() => User, (user) => user.ranks)
  @JoinColumn({
    name: "user_id",
    referencedColumnName: "id",
  })
  @Field((type) => User)
  user: User;
}
