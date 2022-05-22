export interface DirectoryListBreadcrumb {
	name: string;
	url?: string;
}
export interface DirectoryListItem {
	folder: boolean;
	name: string;
	url: string;
}

export function generateDirectoryList(
	breadcrumbs: DirectoryListBreadcrumb[],
	items: DirectoryListItem[]
): string;
