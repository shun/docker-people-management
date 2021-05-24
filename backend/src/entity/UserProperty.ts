import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { ObjectType, Field, InputType } from "type-graphql";
import { User } from "./User";

@Entity("UserProperties")
@ObjectType()
export class UserProperty {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column({ type: "int", width: 11, comment: "ユーザのid" })
  @Field()
  user_id: number;

  @Column({ type: "varchar", length: 16, comment: "属性のキー" })
  @Field()
  key: string;

  @Column({ type: "varchar", width: 255, comment: "属性の値" })
  @Field()
  value: string;

  @Column({ type: "char", length: 16, comment: "valueの型" })
  @Field()
  type: string;

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
}

//@InputType()
//export class AddUserPropertyData implements Partial<UserProperty> {}
