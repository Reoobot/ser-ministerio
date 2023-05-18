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
exports.ImagesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ImagesService = class ImagesService {
    constructor(imagesModel) {
        this.imagesModel = imagesModel;
    }
    async uploadFile(filename) {
        return this.imagesModel.create(filename);
    }
    async getImages() {
        const images = await this.imagesModel.find();
        return images;
    }
    async getImage(imageID) {
        const image = await this.imagesModel.findById(imageID);
        return image;
    }
    async getPicture(filename) {
        const image = await this.imagesModel.findById(filename);
        return image;
    }
    async deleteImage(imageID) {
        const image = await this.imagesModel.findByIdAndDelete(imageID);
        return image;
    }
    async updateImage(imageID, imagesdto) {
        const updatedImage = await this.imagesModel.findByIdAndUpdate(imageID, imagesdto, { new: true });
        return updatedImage;
    }
};
ImagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Images')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ImagesService);
exports.ImagesService = ImagesService;
//# sourceMappingURL=images.service.js.map