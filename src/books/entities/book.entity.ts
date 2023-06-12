import { IsDate, IsNotEmpty, IsNumber, IsNumberString } from "class-validator";

export class Book {
    @IsNumberString()
    id: number;
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
    @IsDate()
    releaseDate: Date;
}
