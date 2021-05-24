import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { ObjectType, Field, InputType } from "type-graphql";

@Entity("UserOrganizations")
@ObjectType()
export class UserOrganization {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column({ type: "int", width: 11, comment: "ユーザのid" })
  @Field()
  user_id: number;

  @Column({ type: "int", width: 11, comment: "所属のid" })
  @Field()
  section_id: number;

  @Column({
    type: "int",
    width: 11,
    comment: "所属の優先順位。小さい方が優先順位が高い",
  })
  @Field()
  priority: number;

  @Column({ type: "varchar", length: 16, comment: "役職名" })
  @Field()
  position_name: string;

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
//export class AddUserOrganizationData implements Partial<UserOrganization> {}
