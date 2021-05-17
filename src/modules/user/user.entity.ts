import { Profile } from './../profile/profile.entity';
import { type } from "os";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;
  
    @Column({ type: 'varchar', unique: true, length: 25, nullable: false })
    username: string;
    
    @Column({ type: 'varchar', nullable: false })
    password: string;

    @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
    status: string;
  
    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
    updatedAt: Date;

    @OneToOne(type => Profile, {
        cascade:true,
        nullable:false,
        eager:true
    })
    @JoinColumn({name: 'profile_id'})
    profile: Profile;
}