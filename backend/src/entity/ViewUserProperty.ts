import {
  ViewEntity,
  ViewColumn,
  Connection,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { ObjectType, Field, InputType } from "type-graphql";

import { User } from "./User";
import { UserProperty } from "./UserProperty";

@ViewEntity({
  name: "ViewUserProperties",
  expression: (connection: Connection) =>
    connection
      .createQueryBuilder()
      .select("up.user_id", "user_id")
      .addSelect("up.key", "key")
      .addSelect("up.value", "value")
      .addSelect("up.type", "type")
      .from(UserProperty, "up")
      .where("up.end_date is NULL"),
})
@ObjectType()
export class ViewUserProperty {
  @ViewColumn()
  @Field()
  user_id: number;

  @ViewColumn()
  @Field()
  key: string;

  @ViewColumn()
  @Field()
  value: string;

  @ViewColumn()
  @Field()
  type: string;

  // Relation
  @ManyToOne(() => User, (user) => user.locations)
  @JoinColumn({
    name: "user_id",
    referencedColumnName: "id",
  })
  @Field((type) => User)
  user: User;
}
