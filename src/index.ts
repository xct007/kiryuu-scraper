import axios from "axios";
import {
	Result,
	Config,
	BASE_URL,
	LATEST_URL,
	SEARCH_URL,
	MANGA_URL,
	MANGA_CHAPTER_URL,
} from "./utils";

/**
 * Get comic detail
 * @param {String} linkId
 **/
export const latest = async (): Promise<object> => {
	let result: Result;
	const data = await axios.get(LATEST_URL, Config);
	if (data.data && data.data.mangas.length) {
		let _tmp: Result["mangas"] = [];
		for (const i of data.data.mangas) {
			_tmp.push({
				cover: i.cover,
				title: i.title,
				url: BASE_URL + i.slug,
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
	} else {
		result = {
			succeed: false,
		};
	}
	return result;
};

/**
 * Get comic detail
 * @param {String} linkId
 **/
export const search = async (query: string): Promise<object> => {
	let result: Result;
	const data = await axios.get(SEARCH_URL(query), Config);
	if (data.data && data.data.mangas.length) {
		let _tmp: Result["mangas"] = [];
		for (const i of data.data.mangas) {
			_tmp.push({
				cover: i.cover,
				title: i.title,
				url: BASE_URL + "manga/" + i.slug,
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
	} else {
		result = {
			succeed: false,
		};
	}
	return result;
};

/**
 * Get comic detail
 * @param {String} linkId
 **/
export const detail = async (linkId: string): Promise<object> => {
	let result: {
		succeed: boolean;
		message?: string;
		title?: string;
		subtitle?: string;
		cover?: string;
		genres?: string[];
		synopsis?: string;
		score?: string;
		author?: string;
		status?: string;
		serialization?: string;
		chapters?: {
			chapter: string;
			url: string;
		}[];
		content?: string[];
	};
	// Valid regular expression for kiryuu maybe :)
	const REGEX_URL = /http?s:\/\/kiryuu.id?(\/manga\/)?(\/)?/
	const isKiryuu = linkId.match(REGEX_URL) ? true : false;
	if (isKiryuu) {
		linkId = linkId.replace(REGEX_URL, "").split("/").join("");
	} else {
		result = {
			succeed: false,
			message: "Invalid Kiryuu URL",
		};
		return result;
	}
	let data: any = await axios.get(MANGA_URL(linkId), Config);
	if (data.data && (Array.isArray(data.data.chapters) && data.data.chapters.length)) {
		const _data = data.data;
		let Ch: {
			chapter: string;
			url: string;
		}[] = [];
		for (const i of _data.chapters) {
			const chNum = i.chapter.split(" ");
			Ch.push({
				chapter: `${chNum[1]}${chNum[2] ? " " + chNum[2] : ""}`, // hmm..
				url: BASE_URL + i.slug,
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
	} else {
		data = await axios.get(MANGA_CHAPTER_URL(linkId), Config);
		if (data.data && data.data.content.length) {
			delete data.data["pages"];
			result = { succeed: true, ...data.data };
		} else {
			result = {
				succeed: false,
			};
		}
	}
	return result;
};
const kiryuu = {
	latest,
	search,
	detail,
};
export default kiryuu;
