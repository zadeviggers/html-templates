# Zade's HTML templates

These are some useful HTML templates, that come with CSS included. None of them
use any JavaScript.

Some templates come with a JavaScript function to generate the HTML server-side
based on some inputs. You can use them by installing the package with npm.

```shell
pnpm install zades-html-templates
```

```js
import { generateDirectoryList } from "zades-html-templates";
const myPage = generateDirectoryList(
	[
		{ name: "root", url: "/" },
		{ name: "dir1", url: "/dir1/" },
		{ name: "dir2", url: "/dir1/dir2/" },
		{ name: "currentdir" },
	],
	[
		{
			name: "my folder",
			folder: true,
			url: "/dir1/dir2/currentdir/myfolder/",
		},
		{
			name: "file.txt",
			folder: false,
			url: "/dir1/dir2/currentdir/file.txt",
		},
		{
			name: "image.png",
			folder: false,
			url: "/dir1/dir2/currentdir/image.png",
		},
		{
			name: "video.mp4",
			folder: false,
			url: "/dir1/dir2/currentdir/video.mp4",
		},
		{
			name: "audio.mp3",
			folder: false,
			url: "/dir1/dir2/currentdir/audio.mp3",
		},
	]
);
console.log(myPage);
```

## License

You can use these anywhere for anything, as long as you keep the HTML comment
that credits the template to me.
