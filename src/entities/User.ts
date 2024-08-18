import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export default class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar' })
    firstName: string

    @Column({ type: 'varchar' })
    lastName: string

    @Column({ type: 'int' })
    age: number

}
