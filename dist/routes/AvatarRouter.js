"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const multer_1 = tslib_1.__importDefault(require("multer"));
const express_1 = require("express");
const _controllers_1 = require("@controllers/");
const upload = multer_1.default();
const router = express_1.Router();
router.get('/', _controllers_1.AvatarController.get);
router.post('/', upload.single('avatar'), _controllers_1.AvatarController.post);
module.exports = router;