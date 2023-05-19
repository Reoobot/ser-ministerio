"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Images2Schemas = void 0;
const mongoose_1 = require("mongoose");
exports.Images2Schemas = new mongoose_1.Schema({
    name: String,
    img: {
        data: Buffer,
        contentType: 'image/png'
    }
});
//# sourceMappingURL=images2.schema.js.map