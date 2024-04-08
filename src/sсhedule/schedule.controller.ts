import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ScheduleModel } from './schedule.model';

@Controller('schedule')
export class ScheduleController {

    @Post('create')
    async create(@Body() dto: Omit<ScheduleModel, '_id'>) {

    }     

    @Delete(':id')
    async delete(@Param('id') id: string){

    }

    @Get('byRoom/:roomId')
    async getByRoom(@Param('roomId') roomId: string){

    }
}
