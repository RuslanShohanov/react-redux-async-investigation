export interface Post {
    title: string;
}

export interface Posts {
    isFetching: boolean;
    didInvalidate: boolean;
    items: Post[];
    lastUpdated?: number;
}

export interface PostsBySubreddit {
    [subreddit: string]: Posts;
}

export interface AppState {
    selectedSubreddit: string;
    postsBySubreddit: PostsBySubreddit;
}
