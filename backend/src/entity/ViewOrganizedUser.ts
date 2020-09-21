import { Connection, ViewEntity, ViewColumn, OneToMany } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { User } from "./User";
import { Organization } from "./Organization";
import { PersonalInfo } from "./PersonalInfo";

@ViewEntity({
  expression: (connection: Connection) => connection.createQueryBuilder()
    .select("u.code",               "user_cd")
    .addSelect("u.lastname",        "lastname")
    .addSelect("u.firstname",       "firstname")
    .addSelect("o.title",           "title")
    .addSelect("o.company_cd",      "company_cd")
    .addSelect("o.department_cd",   "department_cd")
    .addSelect("o.group_cd",        "group_cd")
    .addSelect("o.team_cd",         "team_cd")
    .addSelect("o.company_name",    "company_name")
    .addSelect("o.department_name", "department_name")
    .addSelect("o.group_name",      "group_name")
    .addSelect("o.team_name",       "team_name")
    .addSelect("o.primary",         "primary")
    .addSelect("o.start_date",      "start_date")
    .addSelect("o.end_date",        "end_date")
    .from(User, "u")
    .leftJoin(Organization, "o", "u.code = o.user_cd")
    .where("u.delflg = 0")
})
@ObjectType()
export class ViewOrganizedUser {

    @ViewColumn()
    @Field()
    user_cd: string;

    @ViewColumn()
    @Field()
    title: string;

    @ViewColumn()
    @Field()
    lastname: string;

    @ViewColumn()
    @Field()
    firstname: string;

    @ViewColumn()
    @Field()
    company_cd: string;

    @ViewColumn()
    @Field()
    department_cd: string;

    @ViewColumn()
    @Field()
    group_cd: string;

    @ViewColumn()
    @Field()
    team_cd: string;

    @ViewColumn()
    @Field()
    company_name: string;

    @ViewColumn()
    @Field()
    department_name: string;

    @ViewColumn()
    @Field()
    group_name: string;

    @ViewColumn()
    @Field()
    team_name: string;

    @ViewColumn()
    @Field()
    primary: boolean;

    @ViewColumn()
    @Field(type => Date)
    start_date: Date | null;

    @ViewColumn()
    @Field(type => Date, {nullable: true})
    end_date: Date | null;

    @OneToMany(type => PersonalInfo, info => info.user)
    @Field(type => [PersonalInfo])
    infolist: PersonalInfo[];
}
