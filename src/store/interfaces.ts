export interface Post {}

export interface Posts {
	isFetching: boolean;
	didInvalidate: boolean;
	items: Post[];
	lastUpdated?: number;
}

export interface PostsBySubreddit {
	[subreddit: string]: Posts;
}
