import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

@Entity()
class Ride extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "text",
    enum: ["ACCEPTED", "FINISHED", "CANCELED", "REQUESTING", "ONRIDE"]
  })
  status;

  @Column({ type: "text" })
  pickUpAddress;

  @Column({ type: "double precision", default: 0 })
  pickUpLat;

  @Column({ type: "double precision", default: 0 })
  pickUpLng;

  @Column({ type: "text" })
  dropOffAddress;

  @Column({ type: "double precision", default: 0 })
  dropOffLat;

  @Column({ type: "double precision", default: 0 })
  dropOffLng;

  @Column({ type: "double precision" })
  price;

  @Column({ type: "text" })
  duration;

  @Column({ type: "text" })
  distance;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}

export default Ride;
