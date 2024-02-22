import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity("companies")
export class Company {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string
    
    @Column()
    source: string
}
