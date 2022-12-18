export declare const BASE_URL = "https://kiryuu.id/";
export declare const LATEST_URL = "http://45.76.148.33:8080/api/kiryuu/v6/search?page=1&status&order=update&title&type&genres";
export declare const SEARCH_URL: (q: string) => string;
export declare const MANGA_URL: (l: string) => string;
export declare const MANGA_CHAPTER_URL: (l: string) => string;
export interface Result {
    succeed?: boolean;
    mangas?: {
        cover?: string;
        title?: string;
        url?: string;
        genres?: any;
        rating?: string;
        type?: string;
        last_chapter?: {
            chapter?: string;
        };
        nsfw?: boolean;
    }[];
}
export declare const Config: {
    headers: {
        "User-Agent": string;
        "Content-Type": string;
        "Accept-Encoding": string;
        "Content-Length": number;
    };
};
//# sourceMappingURL=utils.d.ts.map