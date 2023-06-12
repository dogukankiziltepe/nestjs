import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  // Create a book
  @Post()
  create(@Res() res: Response,@Body() createBookDto: CreateBookDto) {
    var result = this.booksService.create(createBookDto);
    return result === 1 ? res.status(HttpStatus.CREATED).send() : res.status(HttpStatus.BAD_REQUEST).send();
  }

  // Get all books
  @Get()
  findAll(@Res() res: Response) {
    var result = this.booksService.findAll();
    return result.length > 0 ? res.json(result) : res.status(HttpStatus.NOT_FOUND);
  }

  // Get a book by id
  @Get(':id')
  findOne(@Param('id') id: string,@Res() res: Response) {
    var result = this.booksService.findOne(+id);
    return result ? res.status(HttpStatus.OK) && res.json(result) : res.status(HttpStatus.NOT_FOUND).send();
  }

  // Update a book by id
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto,@Res() res: Response) {
    var result = this.booksService.update(+id, updateBookDto);
    return result === 1 ? res.status(HttpStatus.OK).send() : res.status(HttpStatus.NOT_FOUND).send();
  }

  // Delete a book by id
  @Delete(':id')
  remove(@Param('id') id: string,@Res() res: Response) {
    var result = this.booksService.remove(+id);
    return result === 1 ? res.status(HttpStatus.OK).send() : res.status(HttpStatus.BAD_REQUEST).send();
  }
}
