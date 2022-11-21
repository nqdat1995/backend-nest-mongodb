import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateTwitterDto, TwitterDto } from './dto/create-twitter.dto';
import { Twitter, TwitterDocument } from './schemas/twitter.schema';
import { TwitterService } from './twitter.service';

@Controller('tweets')
export class TwitterController {
    constructor(private twitterService: TwitterService) { }

    @Post()
    async create(@Body() CreateTwitterDto: CreateTwitterDto): Promise<Twitter> {
        console.log(JSON.stringify(CreateTwitterDto));
        return this.twitterService.create(CreateTwitterDto);
    }

    @Get()
    async getAll() : Promise<TwitterDto[]> {
        return this.twitterService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id) : Promise<TwitterDto> {
        return this.twitterService.getById(id);
    }
}
