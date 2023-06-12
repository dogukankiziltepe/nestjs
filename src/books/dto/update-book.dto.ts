import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { IsNumberString } from 'class-validator';

export class UpdateBookDto extends PartialType(CreateBookDto) {
}
