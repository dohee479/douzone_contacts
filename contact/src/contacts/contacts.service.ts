import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dept } from '../entities/Dept';
import { Member } from '../entities/Member';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Member) private MemberRepository: Repository<Member>,
    @InjectRepository(Dept) private DeptRepository: Repository<Dept>,
  ) {}

  // 전체 리스트 조회
  async getContactList(): Promise<any[]> {
    const getContactList = await this.MemberRepository.createQueryBuilder(
      'MEMBER',
    )
      .select(
        `MEMBER.id,
        MEMBER.name,
        DEPT.deptName,
        MEMBER.phone,
        MEMBER.mail`,
      )
      .from(Dept, 'DEPT')
      .where(`MEMBER.deptNo = DEPT.deptNo`)
      .andWhere(`MEMBER.delYn = 'N'`)
      .orderBy(`MEMBER.id`, 'ASC')
      .getRawMany();

    console.log('getContactList = ', getContactList);
    return getContactList;
  }

  // member detail 조회
  // async getDetail(): Promise<Member> {
  //   const memberDetail = await this.MemberRepository.createQueryBuilder(
  //     'MEMBER',
  //   )
  //     .select(
  //       `MEMBER.id,
  //     MEMBER.name,
  //     DEPT.deptName,
  //     MEMBER.phone,
  //     MEMBER.mail`,
  //     )
  //     .from(Dept, 'DEPT')
  //     .where(`MEMBER.deptNo = DEPT.deptNo`)
  //     .andWhere(`MEMBER.delYn = 'N'`)
  //     .andWhere(`Member`)
  //     .orderBy(`MEMBER.id`, 'ASC')
  //     .getRawMany();
  // }
}
