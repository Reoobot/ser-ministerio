"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const images_service_1 = require("./images.service");
let ImagesController = class ImagesController {
    constructor(imagesService) {
        this.imagesService = imagesService;
    }
    async getImages(res) {
        const images = await this.imagesService.getImages();
        return res.status(common_1.HttpStatus.OK).json(images);
    }
    async deleteImage(res, imageID) {
        const deleteImage = await this.imagesService.deleteImage(imageID);
        if (!deleteImage)
            throw new common_1.NotFoundException('Image Does not exists');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Image Delete Succesfully', deleteImage
        });
    }
    async uploadFile(file) {
        console.log(file);
        if (!file) {
            throw new common_1.BadRequestException('file is not an image', { cause: new Error(), description: 'Some error description' });
        }
        else {
            const response = {
                file: `http://localhost:3000/api/v1/images/${file.filename}`
            };
            return await this.imagesService.uploadFile({ filename: response.file });
        }
    }
    async getPicture(filename, res) {
        res.sendFile(filename, { root: './upload' });
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "getImages", null);
__decorate([
    (0, common_1.Delete)('/picture/:imageID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('imageID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "deleteImage", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './upload',
            filename: (req, file, cb) => {
                const name = file.originalname.split('.')[0];
                const fileExtension = file.originalname.split('.')[1];
                const newFileName = name.split('').join('_') + '_' + Date.now() + '.' + fileExtension;
                cb(null, newFileName);
            }
        }),
        fileFilter: (req, file, cb) => {
            if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
                return cb(null, false);
            }
            cb(null, true);
        }
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)('/:filename'),
    __param(0, (0, common_1.Param)('filename')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "getPicture", null);
ImagesController = __decorate([
    (0, common_1.Controller)('images'),
    __metadata("design:paramtypes", [images_service_1.ImagesService])
], ImagesController);
exports.ImagesController = ImagesController;
//# sourceMappingURL=images.controller.js.map