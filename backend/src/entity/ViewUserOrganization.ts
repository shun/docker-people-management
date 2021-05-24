import {
  ViewEntity,
  ViewColumn,
  Connection,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { ObjectType, Field, InputType } from "type-graphql";

import { User } from "./User";
import { UserOrganization } from "./UserOrganization";
import { Section } from "./Section";
import { Position } from "./Position";
import { UserProperty } from "./UserProperty";

@ViewEntity({
  name: "ViewUserOrganizations",
  expression: (connection: Connection) =>
    connection
      .createQueryBuilder()
      .select("u.id", "user_id")
      .addSelect("up.value", "user_cd")
      .addSelect("u.sei", "sei")
      .addSelect("u.mei", "mei")
      .addSelect("s.path", "path")
      .addSelect("uo.position_name", "position_name")
      .addSelect("p.value", "position_value")
      .addSelect("uo.priority", "priority")
      .addSelect("uo.start_date", "start_date")
      .addSelect("uo.end_date", "end_date")
      .from(User, "u")
      .innerJoin(UserProperty, "up", "up.user_id = u.id")
      .innerJoin(UserOrganization, "uo", "uo.user_id = u.id")
      .innerJoin(Section, "s", "uo.section_id = s.id")
      .innerJoin(Position, "p", "uo.position_name = p.name")
      .where("u.end_date is NULL")
      .andWhere("up.key = 'user_cd'")
      .andWhere("up.end_date is NULL")
      .andWhere("uo.end_date is NULL")
      .andWhere("s.end_date is NULL")
      .andWhere("p.end_date is NULL"),
})
@ObjectType()
export class ViewUserOrganization {
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
  path: string;

  @ViewColumn()
  @Field()
  position_name: string;

  @ViewColumn()
  @Field()
  position_value: string;

  @ViewColumn()
  @Field()
  priority: number;

  @ViewColumn()
  @Field((type) => String)
  start_date: Date;

  @ViewColumn()
  @Field((type) => String, { nullable: true })
  end_date: Date;

  // Relation
  @ManyToOne(() => User, (user) => user.orgs)
  @JoinColumn({
    name: "user_id",
    referencedColumnName: "id",
  })
  @Field((type) => User)
  user: User;
}
