"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = exports.MANGA_CHAPTER_URL = exports.MANGA_URL = exports.SEARCH_URL = exports.LATEST_URL = exports.BASE_URL = void 0;
exports.BASE_URL = "https://kiryuu.id/";
exports.LATEST_URL = "http://45.76.148.33:8080/api/kiryuu/v6/search?page=1&status&order=update&title&type&genres";
const SEARCH_URL = (q) => `http://45.76.148.33:8080/api/kiryuu/v6/search/simple?page=1&s=${q}`;
exports.SEARCH_URL = SEARCH_URL;
const MANGA_URL = (l) => `http://45.76.148.33:8080/api/kiryuu/v6/manga?id=${l}`;
exports.MANGA_URL = MANGA_URL;
const MANGA_CHAPTER_URL = (l) => `http://45.76.148.33:8080/api/kiryuu/v6/chapter?id=${l}`;
exports.MANGA_CHAPTER_URL = MANGA_CHAPTER_URL;
exports.Config = {
    headers: {
        "User-Agent": "Dart/2.8 (dart:io)",
        "Content-Type": "application/json",
        "Accept-Encoding": "deflate",
        "Content-Length": 0,
    },
};
//# sourceMappingURL=utils.js.map