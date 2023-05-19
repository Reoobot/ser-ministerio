/// <reference types="multer" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ImagesService } from './images.service';
import { Images } from './interfaces/images.interface';
import { Response } from 'express';
export declare class ImagesController {
    private readonly imagesService;
    constructor(imagesService: ImagesService);
    getImages(res: any): Promise<Images[]>;
    deleteImage(res: any, imageID: string): Promise<any>;
    uploadFile(file: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, Images> & Omit<Images & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    getPicture(filename: any, res: Response): Promise<void>;
}
