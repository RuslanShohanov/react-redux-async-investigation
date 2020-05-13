import { Dispatch } from 'redux';

import {
    SELECT_SUBREDDIT,
    INVALIDATE_SUBBREDIT,
    REQUEST_POSTS,
    RECEIVE_POSTS,
} from './constants';
import { AppState } from './interfaces';

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

const fetchPosts = (subreddit: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(requestPosts(subreddit));

        const fetchResult = await fetch(
            `https://www.reddit.com/r/${subreddit}.json`
        );
        const json = await fetchResult.json();

        dispatch(receivePosts(subreddit, json));

        return json;
    };
};

const shouldFetchPosts = (state: AppState, subreddit: string) => {
    const posts = state.postsBySubreddit[subreddit];

    return !posts || (!posts.isFetching && posts.didInvalidate);
};

export const fetchPostsIfNeeded = (subreddit: string) => {
    return (dispatch: any, getState: any) => {
        if (shouldFetchPosts(getState(), subreddit)) {
            return dispatch(fetchPosts(subreddit));
        }
    };
};
