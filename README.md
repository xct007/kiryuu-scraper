# kiryuu-scraper

**Get comic data from kiryuu api**
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

- `CommonJS`

```js
const kiryuu = require("kiryuu-scraper");
// or
const { latest, search, detail } = require("kiryuu-scraper");
```

- `ESM`

```js
import kiryuu from "kiryuu-scraper";
// or
import { latest, search, detail } from "kiryuu-scraper";
```

### Example

- Get `latest` comics

```js
import kiryuu from "kiryuu-scraper";

kiryuu.latest().then((json) => {
  console.log(json);
});
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
      genres: [], // empty
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

const query = "chainsaw";
kiryuu.search(query).then((json) => {
  console.log(json);
});
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
      genres: [], // empty
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

- Get comics `detail` by **url**

```js
import kiryuu from "kiryuu-scraper";

const url_1 = "https://kiryuu.id/manga/dandadan";
const url_2 = "https://kiryuu.id/dandadan-chapter-11";

const A = await kiryuu.detail(url_1);
const B = await kiryuu.detail(url_2);

console.log(A, B);
```

- output A

```js
{
  succeed: Boolean,
  title: String,
  subtitle: String,
  cover: String,
  genres: String[Array],
  synopsis: String,
  score: String,
  author: String,
  status: String,
  serialization: String,
  chapters: [
    {
        chapter: String,
        url: String
    },
    ...
  ]
}
```

- output B

```js
{
  succeed: Boolean,
  title: String,
  content: String[Array], // eg ["https://xxx/xxx.jpg"]
}
```
## TODO
- [ ] Add convert image to PDF file/buffer 
- [ ] Make code more readable
