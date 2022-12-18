/**
 * Get comic detail
 * @param {String} linkId
 **/
export declare const latest: () => Promise<object>;
/**
 * Get comic detail
 * @param {String} linkId
 **/
export declare const search: (query: string) => Promise<object>;
/**
 * Get comic detail
 * @param {String} linkId
 **/
export declare const detail: (linkId: string) => Promise<object>;
declare const kiryuu: {
    latest: () => Promise<object>;
    search: (query: string) => Promise<object>;
    detail: (linkId: string) => Promise<object>;
};
export default kiryuu;
//# sourceMappingURL=index.d.ts.map