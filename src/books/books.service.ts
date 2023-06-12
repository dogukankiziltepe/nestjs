import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';


@Injectable()
export class BooksService {
  private books : Book[] = [{id:1,name:"Tempsoft",author:"Randal Nicol",isbn:"639518894-1",pageNumber:426,releaseDate: new Date("10/1/2020"),price:202},
  {id:2,name:"Toughjoyfax",author:"Hendrick Gellibrand",isbn:"109380144-1",pageNumber:353,releaseDate: new Date("10/19/2020"),price:432},
  {id:3,name:"Flexidy",author:"Aguie Tabbernor",isbn:"392406921-2",pageNumber:268,releaseDate: new Date("12/30/2018"),price:489},
  {id:4,name:"Aerified",author:"Gideon Louder",isbn:"200028353-5",pageNumber:421,releaseDate: new Date("11/28/2021"),price:203},
  {id:5,name:"Alphazap",author:"Lorinda Roulston",isbn:"573018318-6",pageNumber:380,releaseDate: new Date("12/19/2019"),price:208},
  {id:6,name:"Veribet",author:"Hanna Balm",isbn:"781020101-8",pageNumber:288,releaseDate: new Date("5/25/2021"),price:199},
  {id:7,name:"Zontrax",author:"Janette Basnett",isbn:"953773713-6",pageNumber:132,releaseDate: new Date("1/18/2022"),price:39},
  {id:8,name:"Transcof",author:"Marena Kubera",isbn:"226271653-6",pageNumber:240,releaseDate: new Date("5/17/2019"),price:129},
  {id:9,name:"Solarbreeze",author:"Claire Tschersich",isbn:"166094701-4",pageNumber:289,releaseDate: new Date("7/18/2022"),price:123},
  {id:10,name:"Ronstring",author:"Rupert Miettinen",isbn:"646640793-4",pageNumber:420,releaseDate: new Date("1/18/2019"),price:253},
  {id:11,name:"Prodder",author:"Kristina Quant",isbn:"095054981-9",pageNumber:175,releaseDate: new Date("5/22/2020"),price:341},
  {id:12,name:"Subin",author:"Heywood Semonin",isbn:"853664592-X",pageNumber:455,releaseDate: new Date("11/27/2019"),price:383},
  {id:13,name:"Zontrax",author:"Emmie Carslake",isbn:"455833691-8",pageNumber:230,releaseDate: new Date("12/29/2019"),price:296},
  {id:14,name:"Regrant",author:"Vaclav Ackerley",isbn:"966446774-X",pageNumber:409,releaseDate: new Date("2/16/2023"),price:120},
  {id:15,name:"Lotstring",author:"Elene Epps",isbn:"482730716-4",pageNumber:103,releaseDate: new Date("3/11/2021"),price:50},
  {id:16,name:"Alpha",author:"Forrest Fusco",isbn:"158888443-0",pageNumber:167,releaseDate: new Date("2/12/2021"),price:484},
  {id:17,name:"Prodder",author:"Ware Lindhe",isbn:"474359140-6",pageNumber:348,releaseDate: new Date("12/23/2020"),price:91},
  {id:18,name:"Overhold",author:"Herrick Nuemann",isbn:"814921281-7",pageNumber:296,releaseDate: new Date("7/23/2020"),price:322},
  {id:19,name:"Bamity",author:"Lucien Walls",isbn:"073849557-3",pageNumber:243,releaseDate: new Date("12/17/2021"),price:466},
  {id:20,name:"Ventosanzap",author:"Caddric Force",isbn:"138590226-4",pageNumber:258,releaseDate: new Date("6/8/2022"),price:431},
  {id:21,name:"Overhold",author:"Hetty Laybourne",isbn:"317380726-X",pageNumber:381,releaseDate: new Date("12/25/2018"),price:326},
  {id:22,name:"Alphazap",author:"Jaime Hof",isbn:"874491298-6",pageNumber:280,releaseDate: new Date("4/29/2022"),price:126},
  {id:23,name:"Pannier",author:"Ashlan Fidell",isbn:"665207033-2",pageNumber:94,releaseDate: new Date("6/29/2022"),price:138},
  {id:24,name:"Flexidy",author:"Seline Howells",isbn:"219818271-8",pageNumber:283,releaseDate: new Date("7/27/2019"),price:499},
  {id:25,name:"Zamit",author:"Abdel Morffew",isbn:"467317067-9",pageNumber:435,releaseDate: new Date("1/13/2019"),price:338},
  {id:26,name:"Home Ing",author:"Gail Kyllford",isbn:"757370441-0",pageNumber:487,releaseDate: new Date("3/14/2023"),price:279},
  {id:27,name:"Zoolab",author:"Melania Eastup",isbn:"565773640-0",pageNumber:192,releaseDate: new Date("3/1/2020"),price:494},
  {id:28,name:"Quo Lux",author:"Robbin Shevels",isbn:"028550531-9",pageNumber:96,releaseDate: new Date("5/27/2021"),price:97},
  {id:29,name:"Alphazap",author:"Oswell Treadaway",isbn:"135143835-2",pageNumber:81,releaseDate: new Date("5/6/2022"),price:417},
  {id:30,name:"Fintone",author:"Buckie Pettyfar",isbn:"611774163-4",pageNumber:411,releaseDate: new Date("2/6/2021"),price:204},
  {id:31,name:"Viva",author:"Helen-elizabeth Reddyhoff",isbn:"921807451-2",pageNumber:265,releaseDate: new Date("1/19/2022"),price:311},
  {id:32,name:"Fix San",author:"Tobiah Clamo",isbn:"012084527-X",pageNumber:179,releaseDate: new Date("12/24/2020"),price:41},
  {id:33,name:"Toughjoyfax",author:"Demetra Sleany",isbn:"286716575-X",pageNumber:115,releaseDate: new Date("12/18/2021"),price:360},
  {id:34,name:"Sonair",author:"Tad Gasson",isbn:"031102083-6",pageNumber:416,releaseDate: new Date("5/30/2022"),price:157},
  {id:35,name:"Voyatouch",author:"Shelagh Karlik",isbn:"294284354-3",pageNumber:90,releaseDate: new Date("10/16/2019"),price:329},
  {id:36,name:"Quo Lux",author:"Yetta Carncross",isbn:"938467702-7",pageNumber:467,releaseDate: new Date("8/7/2019"),price:262},
  {id:37,name:"Voyatouch",author:"Thornie Holstein",isbn:"403223158-3",pageNumber:85,releaseDate: new Date("3/25/2019"),price:111},
  {id:38,name:"Biodex",author:"Nadean Ambrogetti",isbn:"616428550-X",pageNumber:431,releaseDate: new Date("8/24/2021"),price:316},
  {id:39,name:"Asoka",author:"Kahlil Chasle",isbn:"012602470-7",pageNumber:141,releaseDate: new Date("3/5/2021"),price:313},
  {id:40,name:"Transcof",author:"Steffane Athowe",isbn:"156272281-6",pageNumber:81,releaseDate: new Date("9/17/2019"),price:494},
  {id:41,name:"Keylex",author:"Abramo Kynan",isbn:"990692855-7",pageNumber:322,releaseDate: new Date("2/22/2023"),price:441},
  {id:42,name:"Voyatouch",author:"Boothe Jump",isbn:"385211136-6",pageNumber:402,releaseDate: new Date("5/22/2021"),price:383},
  {id:43,name:"Voltsillam",author:"Elton Fadell",isbn:"567033115-X",pageNumber:245,releaseDate: new Date("5/31/2022"),price:308},
  {id:44,name:"Domainer",author:"Jilly Avery",isbn:"035412301-7",pageNumber:273,releaseDate: new Date("4/14/2022"),price:191},
  {id:45,name:"Daltfresh",author:"Hillard Binge",isbn:"464310868-1",pageNumber:475,releaseDate: new Date("7/20/2019"),price:498},
  {id:46,name:"Temp",author:"Patti Grichukhanov",isbn:"247612589-X",pageNumber:349,releaseDate: new Date("6/11/2021"),price:464},
  {id:47,name:"Temp",author:"Lotti Krahl",isbn:"258625269-1",pageNumber:345,releaseDate: new Date("6/22/2019"),price:330},
  {id:48,name:"Prodder",author:"Davie Melsom",isbn:"304525612-0",pageNumber:287,releaseDate: new Date("6/3/2022"),price:136},
  {id:49,name:"Overhold",author:"Anneliese Haizelden",isbn:"523157551-8",pageNumber:430,releaseDate: new Date("12/31/2020"),price:244},
  {id:50,name:"Tempsoft",author:"Wells Divver",isbn:"007981379-8",pageNumber:220,releaseDate: new Date("4/7/2022"),price:70}];

  // Create a new book
  create(createBookDto: CreateBookDto) {
    try {
      this.books.push(Object.assign(createBookDto, {id: this.books.length + 1}));
      return 1;
    } catch (error) {
      return 0;
    }
  }

  // Get all books
  findAll() {
    return this.books;
  }

  // Get a single book by id
  findOne(id: number) {
    try {
      var book = this.books.filter(x => x.id == id)[0];
      return book;
    }
    catch (error) {
      return null;
    }
  }

  // Update a book
  update(id: number, updateBookDto: UpdateBookDto) {
    try {
      const index=this.books.findIndex(b=>b.id===id);
      this.books[index]=Object.assign(this.books[index],updateBookDto);
      return 1;
    } catch (error) {
      return 0;
    }
  }

  // Delete a book
  remove(id: number) {
    try {
      const index=this.books.findIndex(b=>b.id===id);
      const result=this.books.splice(index,1);
      return result;
    } catch (error) {
      return 0;
    }
  }
}
