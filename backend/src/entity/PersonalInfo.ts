import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { ViewOrganizedUser } from "./ViewOrganizedUser";

@Entity()
@ObjectType()
export class PersonalInfo {

    @PrimaryGeneratedColumn()
    @Field()
    id: number;

    @Column({type: "char", length: 8})
    @Field()
    user_cd: string;

    @Column({type: "varchar", length: 32})
    @Field()
    key: string;

    @Column({type: "varchar", length: 255})
    @Field()
    value: string;

    @Column({type: "boolean", default: false})
    @Field()
    delflg: boolean;

    @ManyToOne(type => ViewOrganizedUser, user => user.infolist)
    @Field(type => ViewOrganizedUser)
    user: ViewOrganizedUser;
}
