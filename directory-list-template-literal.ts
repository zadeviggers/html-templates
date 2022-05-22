interface Breadcrumb {
	name: string;
	url?: string;
}

interface Item {
	folder: boolean;
	name: string;
	url: string;
}

export const generateTemplate = (
	breadcrumbs: Breadcrumb[],
	items: Item[]
) => `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Directory listing</title>
		<!-- Template made by Zade Viggers. https://github.com/zadeviggers/html-templates -->
		<style>
			:root {
				--background: white;
				--text-light: grey;
				--text: black;
			}
			@media screen and (prefers-color-scheme: dark) {
				:root {
					--background: black;
					--text: white;
				}
			}
			* {
				box-sizing: border-box;
				margin: 0;
				padding: 0;
				border: 0;
				font-family: sans-serif;
				color: var(--text);
			}
			a {
				text-decoration: none;
				cursor: pointer;
				color: var(--text);
			}
			a:hover,
			a:focus-visible {
				text-decoration: underline;
				color: var(--text-light);
			}
			a > * {
				color: currentColor;
			}
			html,
			body {
				background-color: var(--background);
			}
			body {
				display: flex;
				flex-direction: column;
				max-height: 100vh;
			}
			#breadcrumbs {
				display: flex;
				gap: 4px;
				padding: 8px;
			}
			#list {
				flex: 1;
				display: flex;
				flex-direction: column;
				flex-wrap: wrap;
				overflow-x: scroll;
				list-style-type: none;
				gap: 6px;
				padding-left: 8px;
			}
			#list > li {
				width: 170px;
			}
			#list > li > a {
				display: flex;
				align-items: center;
				gap: 4px;
			}
			#list > li > a > .text {
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			.icon {
				flex-shrink: 0;
				display: inline-block;
				width: 24px;
				height: 24px;
				fill: var(--background);
				stroke: var(--text);
				stroke-width: 2;
				stroke-linecap: round;
				stroke-linejoin: round;
			}
			.hidden {
				display: none;
			}
		</style>
	</head>
	<body>
		<div class="hidden">
			<svg>
				<defs>
					<g id="file-icon">
						<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
						<polyline points="13 2 13 9 20 9"></polyline>
					</g>
					<g id="folder-icon">
						<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
					</g>
				</defs>
			</svg>
		</div>
		<nav id="breadcrumbs">
			${breadcrumbs.map((breadcrumb) =>
				breadcrumb.url
					? `<span>${breadcrumb.name} /</span>`
					: `<a href="${breadcrumb.url}">${breadcrumb.name} /</a>`
			)}
		</nav>
		<ul id="list">
			${items.map(
				(item) => `<li>
			<a href="${item.url}" title="${item.name}">
				<svg class="icon" viewBox="0 0 24 24">
					<use xlink:href="#${item.folder ? "folder" : "file"}-icon"></use>
				</svg>
				<span class="text">
					${item.name}
				</span>
			</a>
		</li>`
			)}
		</ul>
	</body>
</html>`;
