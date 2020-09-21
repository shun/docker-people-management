import {Entity, PrimaryColumn, Column} from "typeorm";
import { ObjectType, Field } from "type-graphql";

@Entity()
@ObjectType()
export class Organization {

    @PrimaryColumn({type: "char", length: 8})
    @Field()
    user_cd: string;

    @PrimaryColumn({type: "varchar", length: 32, default: ""})
    @Field()
    title: string;

    @PrimaryColumn({type: "char", length: 8})
    @Field()
    company_cd: string;

    @PrimaryColumn({type: "char", length: 8})
    @Field()
    department_cd: string;

    @PrimaryColumn({type: "char", length: 8})
    @Field()
    group_cd: string;

    @PrimaryColumn({type: "char", length: 8})
    @Field()
    team_cd: string;

    @PrimaryColumn({type: "varchar", length: 32})
    @Field()
    company_name: string;

    @PrimaryColumn({type: "varchar", length: 32})
    @Field()
    department_name: string;

    @PrimaryColumn({type: "varchar", length: 32})
    @Field()
    group_name: string;

    @PrimaryColumn({type: "varchar", length: 32})
    @Field()
    team_name: string;

    @Column({type: "boolean", default: false})
    @Field()
    primary: boolean;

    @Column({type: "date", nullable: true})
    @Field(type => Date)
    start_date: Date | null;

    @Column({type: "date", nullable: true})
    @Field(type => Date)
    end_date: Date | null;
}
