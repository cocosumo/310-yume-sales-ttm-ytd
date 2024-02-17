"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const onIndexShow_1 = __importDefault(require("onIndexShow"));
(() => {
    kintone.events.on([
        'app.record.index.show',
    ], onIndexShow_1.default);
})();
