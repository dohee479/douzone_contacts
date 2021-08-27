import { Controller, Get, Param, Query } from '@nestjs/common';
import { Member } from '../entities/Member';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private contactService: ContactsService) {}

  @Get()
  async Get(): Promise<any[]> {
    return this.contactService.getContactList();
  }

  @Get(':id')
  async getDetail(@Param('id') id: string): Promise<Member> {
    console.log(id);
    // return this.contactService.getDetail();
    return;
  }
}
