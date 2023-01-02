import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IUser } from "./user.interface";

@Entity('users')
export class UserEntity implements IUser{
@PrimaryGeneratedColumn()
    id!: number;

@Column()
    name!: string;

@Column({unique: true})
    email!: string;

@Column()
    age!: number;
}
