import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import Ruta from 'src/Common/Entities/Ruta.entity';
import { RutasService } from './rutas.service';
import MainError from 'src/Common/Interfaces/Error.interface';
import CreateRutaDTO from './DTOa/CreateRuta.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('rutas')
export class RutasController {
    private alias:string
    constructor(
        protected mainService:RutasService,
    ) {
        this.alias = 'Rutas'
    }

    @Post('')
    async create(@Body() data: CreateRutaDTO, foto:Express.Multer.File): Promise<string | MainError> {
        //console.log(data)
        return await this.mainService.create(data as any)
    }

    read: (filters: Partial<Ruta>)=>Promise<MainError | Ruta[]>;

    update: (id: number, data: Partial<Ruta>)=> Promise<string | MainError>;

}
