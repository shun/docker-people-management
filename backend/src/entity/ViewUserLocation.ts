import {
  ViewEntity,
  ViewColumn,
  Connection,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { ObjectType, Field, InputType } from "type-graphql";

import { User } from "./User";
//import { ViewUser } from "./ViewUser";
import { UserLocation } from "./UserLocation";
import { Location } from "./Location";
import { UserProperty } from "./UserProperty";

@ViewEntity({
  name: "ViewUserLocations",
  expression: (connection: Connection) =>
    connection
      .createQueryBuilder()
      .select("u.id", "user_id")
      .addSelect("up.value", "user_cd")
      .addSelect("u.sei", "sei")
      .addSelect("u.mei", "mei")
      .addSelect("l.company_name", "company_name")
      .addSelect("l.branch_name", "branch_name")
      .addSelect("l.postalcode", "postalcode")
      .addSelect("l.address", "address")
      .addSelect("l.address_kana", "address_kana")
      .addSelect("l.tel", "tel")
      .addSelect("l.fax", "fax")
      .addSelect("ul.start_date", "start_date")
      .addSelect("ul.end_date", "end_date")
      .from(User, "u")
      .innerJoin(UserProperty, "up", "up.user_id = u.id")
      .innerJoin(UserLocation, "ul", "ul.user_id = u.id")
      .innerJoin(Location, "l", "ul.location_id = l.id")
      .where("u.end_date is NULL")
      .andWhere("up.key = 'user_cd'")
      .andWhere("up.end_date is NULL")
      .andWhere("ul.end_date is NULL")
      .andWhere("l.end_date is NULL"),
})
@ObjectType()
export class ViewUserLocation {
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
  company_name: string;

  @ViewColumn()
  @Field()
  branch_name: string;

  @ViewColumn()
  @Field()
  postalcode: string;

  @ViewColumn()
  @Field()
  address: string;

  @ViewColumn()
  @Field()
  address_kana: string;

  @ViewColumn()
  @Field()
  tel: string;

  @ViewColumn()
  @Field()
  fax: string;

  @ViewColumn()
  @Field((type) => String)
  start_date: Date;

  @ViewColumn()
  @Field((type) => String, { nullable: true })
  end_date: Date;

  // Relation
  @ManyToOne(() => User, (user) => user.locations)
  @JoinColumn({
    name: "user_id",
    referencedColumnName: "id",
  })
  @Field((type) => User)
  user: User;
}
