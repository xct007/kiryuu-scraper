"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.detail = exports.search = exports.latest = void 0;
const axios_1 = __importDefault(require("axios"));
const utils_js_1 = require("./utils.js");
/**
 * Get comic detail
 * @param {String} linkId
 **/
const latest = async () => {
    let result;
    const data = await axios_1.default.get(utils_js_1.LATEST_URL, utils_js_1.Config);
    if (data.data && data.data.mangas.length) {
        let _tmp = [];
        for (const i of data.data.mangas) {
            _tmp.push({
                cover: i.cover,
                title: i.title,
                url: utils_js_1.BASE_URL + i.slug,
                genres: i.genres,
                rating: i.rating,
                type: i.type,
                last_chapter: i.last_chapter,
                nsfw: i.nsfw,
            });
        }
        result = {
            succeed: true,
            mangas: _tmp,
        };
    }
    else {
        result = {
            succeed: false,
        };
    }
    return result;
};
exports.latest = latest;
/**
 * Get comic detail
 * @param {String} linkId
 **/
const search = async (query) => {
    let result;
    const data = await axios_1.default.get((0, utils_js_1.SEARCH_URL)(query), utils_js_1.Config);
    if (data.data && data.data.mangas.length) {
        let _tmp = [];
        for (const i of data.data.mangas) {
            _tmp.push({
                cover: i.cover,
                title: i.title,
                url: utils_js_1.BASE_URL + "manga/" + i.slug,
                genres: i.genres,
                rating: i.rating,
                last_chapter: i.last_chapter,
                nsfw: i.nsfw,
            });
        }
        result = {
            succeed: true,
            mangas: _tmp,
        };
    }
    else {
        result = {
            succeed: false,
        };
    }
    return result;
};
exports.search = search;
/**
 * Get comic detail
 * @param {String} linkId
 **/
const detail = async (linkId) => {
    let result;
    // Valid regular expression for kiryuu maybe :)
    const REGEX_URL = /http?s:\/\/kiryuu.id?(\/manga\/)?(\/)?/;
    const isKiryuu = linkId.match(REGEX_URL) ? true : false;
    if (isKiryuu) {
        linkId = linkId.replace(REGEX_URL, "").split("/").join("");
    }
    else {
        result = {
            succeed: false,
            message: "Invalid Kiryuu URL",
        };
        return result;
    }
    let data = await axios_1.default.get((0, utils_js_1.MANGA_URL)(linkId), utils_js_1.Config);
    if (data.data && (Array.isArray(data.data.chapters) && data.data.chapters.length)) {
        const _data = data.data;
        let Ch = [];
        for (const i of _data.chapters) {
            const chNum = i.chapter.split(" ");
            Ch.push({
                chapter: `${chNum[1]}${chNum[2] ? " " + chNum[2] : ""}`,
                url: utils_js_1.BASE_URL + i.slug,
            });
        }
        // kiryuu.id admin remove subtitle ?
        // _data["subtitle"] = _data["subtitle"].replace(/[\n\t]/g, "");
        delete _data["chapters"];
        result = {
            succeed: true,
            ..._data,
            chapters: Ch,
        };
    }
    else {
        data = await axios_1.default.get((0, utils_js_1.MANGA_CHAPTER_URL)(linkId), utils_js_1.Config);
        if (data.data && data.data.content.length) {
            delete data.data["pages"];
            result = { succeed: true, ...data.data };
        }
        else {
            result = {
                succeed: false,
            };
        }
    }
    return result;
};
exports.detail = detail;
const kiryuu = {
    latest: exports.latest,
    search: exports.search,
    detail: exports.detail,
};
exports.default = kiryuu;
//# sourceMappingURL=index.js.map