import { AnyAction, combineReducers } from 'redux';

import {
    SELECT_SUBREDDIT,
    INVALIDATE_SUBBREDIT,
    REQUEST_POSTS,
    RECEIVE_POSTS,
} from './constants';
import { Posts, PostsBySubreddit } from './interfaces';

const selectedSubreddit = (state: string = 'frontend', action: AnyAction) => {
    switch (action.type) {
        case SELECT_SUBREDDIT: {
            return action.subreddit;
        }
        default: {
            return state;
        }
    }
};

const initialSubreddit: Posts = {
    isFetching: false,
    didInvalidate: false,
    items: [],
};

const posts = (state: Posts = initialSubreddit, action: AnyAction) => {
    switch (action.type) {
        case INVALIDATE_SUBBREDIT: {
            return { ...state, didInvalidate: true };
        }
        case REQUEST_POSTS: {
            return { ...state, isFetching: true, didInvalidate: false };
        }
        case RECEIVE_POSTS: {
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt,
            };
        }
        default: {
            return state;
        }
    }
};

const postsBySubreddit = (state: PostsBySubreddit = {}, action: AnyAction) => {
    switch (action.type) {
        case INVALIDATE_SUBBREDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS: {
            return {
                ...state,
                [action.subreddit]: posts(state[action.subreddit], action),
            };
        }
        default: {
            return state;
        }
    }
};

export const rootReducer = combineReducers({
    selectedSubreddit,
    postsBySubreddit,
});
