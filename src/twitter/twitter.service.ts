import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Twitter, TwitterDocument } from './schemas/twitter.schema';
import { CreateTwitterDto } from './dto/create-twitter.dto';

@Injectable()
export class TwitterService {
    constructor(@InjectModel(Twitter.name) private twitterModel: Model<TwitterDocument>) { }

    async create(CreateTwitterDto: CreateTwitterDto): Promise<Twitter> {
        const createdTwtter = new this.twitterModel(CreateTwitterDto);

        return createdTwtter.save();
    }

    async getAll() : Promise<Twitter[]> {
        return this.twitterModel.find().exec();
    }

    async getById(id: string) : Promise<Twitter> {
        return this.twitterModel.findById(id).exec();
    }
}
