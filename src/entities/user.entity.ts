import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IUser } from "./user.interface";
import { instanceToPlain } from "class-transformer";

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

const _instance: Record<keyof UserEntity, null> = {
    age: null,
    email: null,
    id: null,
    name: null,
};

export const UserEntityKeys = Object.keys(_instance) as (keyof UserEntity)[];
