# kiryuu-scraper
!**Get comic data from kiryuu api**
![](https://s1.zerochan.net/Sousou.no.Frieren.600.3396173.jpg)
## How to use
### Install module
```sh
npm install github:xct007/kiryuu-scraper
```
yarn
```sh
yarn add github:xct007/kiryuu-scraper
```
### Basic
Import module
- ```CommonJS```
```js
const kiryuu = require("kiryuu-scraper");
```
- ```ESM```
```js
import kiryuu from "kiryuu-scraper";
```
### Example
- Get ```latest``` comics
```js
import kiryuu from "kiryuu-scraper";

kiryuu.latest().then((json) => {
  console.log(json)
})
```
  - output
```js
{
  succeed: Boolean,
  mangas: [
    {
      cover: String,
      title: String,
      url: String,
      genres: [],
      rating: String,
      type: String,
      last_chapter: { 
         chapter: String
      },
      nsfw: Boolean
    }
   ...
  ]
}
```
- Get comics by query
```js
import kiryuu from "kiryuu-scraper";

const query = "chainsaw"
kiryuu.search(query).then((json) => {
  console.log(json)
})
```
- output
```js
{
  succeed: Boolean,
  mangas: [
    {
      cover: String,
      title: 'Chainsaw Man',
      url: String,
      genres: [],
      rating: String,
      last_chapter: {
         chapter: String
      },
      nsfw: Boolean
    },
   ...
  ]
}
```
