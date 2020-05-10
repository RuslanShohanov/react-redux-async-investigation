import {
	SELECT_SUBREDDIT,
	INVALIDATE_SUBBREDIT,
	REQUEST_POSTS,
	RECEIVE_POSTS,
} from './constants';

export const selectSubreddit = (subreddit: string) => {
	return {
		type: SELECT_SUBREDDIT,
		subreddit,
	};
};

export const invalidateSubreddit = (subreddit: string) => {
	return {
		type: INVALIDATE_SUBBREDIT,
		subreddit,
	};
};

export const requestPosts = (subreddit: string) => {
	return {
		type: REQUEST_POSTS,
		subreddit,
	};
};

export const receivePosts = (subreddit: string, json: any) => {
	return {
		type: RECEIVE_POSTS,
		subreddit,
		posts: json.data.children.map((child: any) => child.data),
		receivedAt: Date.now(),
	};
};
