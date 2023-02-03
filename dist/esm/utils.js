export const BASE_URL = "https://kiryuu.id/";
export const LATEST_URL = "http://45.76.148.33:8080/api/kiryuu/v6/search?page=1&status&order=update&title&type&genres";
export const SEARCH_URL = (q) => `http://45.76.148.33:8080/api/kiryuu/v6/search/simple?page=1&s=${q}`;
export const MANGA_URL = (l) => `http://45.76.148.33:8080/api/kiryuu/v6/manga?id=${l}`;
export const MANGA_CHAPTER_URL = (l) => `http://45.76.148.33:8080/api/kiryuu/v6/chapter?id=${l}`;
export const Config = {
    headers: {
        "User-Agent": "Dart/2.8 (dart:io)",
        "Content-Type": "application/json",
        "Accept-Encoding": "deflate",
        "Content-Length": 0,
    },
};
//# sourceMappingURL=utils.js.map