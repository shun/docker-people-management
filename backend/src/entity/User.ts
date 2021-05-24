import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { ObjectType, Field, InputType } from "type-graphql";
import { ViewUserProperty } from "./ViewUserProperty";
import { ViewUserOrganization } from "./ViewUserOrganization";
import { ViewUserLocation } from "./ViewUserLocation";
import { ViewUserRank } from "./ViewUserRank";

@Entity("Users")
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column({ type: "char", length: 12, comment: "氏名コード" })
  @Field()
  code: string;

  @Column({ type: "varchar", length: 16, comment: "姓" })
  @Field()
  sei: string;

  @Column({ type: "varchar", length: 16, comment: "名" })
  @Field()
  mei: string;

  @Column({ type: "varchar", length: 16, comment: "せい（かな）" })
  @Field()
  sei_kana: string;

  @Column({ type: "varchar", length: 16, comment: "めい（かな）" })
  @Field()
  mei_kana: string;

  @Column({ type: "char", length: 32, comment: "姓（アルファベット）" })
  @Field()
  sei_en: string;

  @Column({ type: "char", length: 32, comment: "名（アルファベット）" })
  @Field()
  mei_en: string;

  @Column({ type: "char", length: 32, comment: "ホーム認証パスワード" })
  @Field()
  password: string;

  @Column({ type: "date", comment: "運用開始日" })
  @Field((type) => String)
  start_date: Date;

  @Column({
    type: "date",
    nullable: true,
    default: null,
    comment: "運用終了日",
  })
  @Field((type) => String, { nullable: true })
  end_date: Date;

  @CreateDateColumn({ comment: "作成日時" })
  @Field()
  created_at: Date;

  @UpdateDateColumn({
    onUpdate: "current_timestamp()",
    comment: "更新日時",
  })
  @Field()
  updated_at: Date;

  // Relation
  @OneToMany(() => ViewUserProperty, (property) => property.user)
  @Field((type) => [ViewUserProperty])
  properties: ViewUserProperty[];

  @OneToMany(() => ViewUserOrganization, (org) => org.user)
  @Field((type) => [ViewUserOrganization])
  orgs: ViewUserOrganization[];

  @OneToMany(() => ViewUserLocation, (location) => location.user)
  @Field((type) => [ViewUserLocation])
  locations: ViewUserLocation[];

  @OneToMany(() => ViewUserRank, (rank) => rank.user)
  @Field((type) => [ViewUserRank])
  ranks: ViewUserRank[];
}

//@InputType()
//export class AddUserData implements Partial<User> {}
