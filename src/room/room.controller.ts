import { Controller, Post, Body, Get, Param, Delete, Patch, HttpCode } from '@nestjs/common';
import { RoomModel } from './room.model';
import { FindRoomDto } from './dto/find-room.dto';

@Controller('room')
export class RoomController {
    
    @Post('create')
    async create(@Body() dto: Omit<RoomModel, '_id'>) {

    } 

    @Get(':id')
    async get(@Param('id') id: string) {

    }

    @Delete(':id')
    async delete(@Param('id') id: string){

    }

    @Patch(':id')
    async patch(@Param('id') id: string, @Body() dto: RoomModel){

    }

    @HttpCode(200)
    @Post()
    async find(@Body() dto: FindRoomDto){

    }
}
