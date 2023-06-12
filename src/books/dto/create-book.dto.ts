import { IsNotEmpty, IsNumber, isDateString, IsDateString } from "class-validator";

export class CreateBookDto {
   
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    author: string;
    @IsNotEmpty()
    isbn: string;
    @IsNumber()
    price: number;
    @IsNumber()
    pageNumber: number;
    @IsDateString()
    releaseDate: Date;
}
