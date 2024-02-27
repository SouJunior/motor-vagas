import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity("jobs")
export class Job {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    title: string

    @Column()
    company: string

    @Column()
    location: string

    @Column()
    time: string

    @Column()
    link: string

    @Column()
    jobName: string

    @CreateDateColumn()
    created_date: Date

    @Column()
    visa: boolean

    @Column()
    description: string

    @Column()
    source: string
}
