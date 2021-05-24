import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { ObjectType, Field, InputType } from "type-graphql";

@Entity("Positions")
@ObjectType()
export class Position {
  @PrimaryColumn({ type: "varchar", length: 16, comment: "役職名" })
  @Field()
  name: string;

  @Column({ type: "int", width: 11, comment: "役職値" })
  @Field()
  value: number;

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
//export class AddPositionData implements Partial<Position> {}
