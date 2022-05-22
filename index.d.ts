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
	items: DirectoryListItem[],
	pagination?: {
		loadMoreURL: string;
		loadAllURL: string;
	}
): string;
