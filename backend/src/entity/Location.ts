import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { ObjectType, Field, InputType } from "type-graphql";

@Entity("Locations")
@ObjectType()
export class Location {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column({ type: "varchar", length: 64, comment: "会社名" })
  @Field()
  company_name: string;

  @Column({ type: "varchar", length: 64, comment: "支社名" })
  @Field()
  branch_name: string;

  @Column({ type: "char", length: 8, comment: "郵便番号。例：xxx-xxxx" })
  @Field()
  postalcode: string;

  @Column({ type: "varchar", length: 255, comment: "住所" })
  @Field()
  address: string;

  @Column({ type: "varchar", length: 255, comment: "じゅうしょ（かな）" })
  @Field()
  address_kana: string;

  @Column({
    type: "char",
    length: 20,
    comment: "代表電話番号。例：xx-xxxx-xxxx",
  })
  @Field()
  tel: string;

  @Column({
    type: "char",
    length: 20,
    comment: "代表FAX番号。例：xx-xxxx-xxxx",
  })
  @Field()
  fax: string;

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
//export class AddLocationData implements Partial<Location> {}
