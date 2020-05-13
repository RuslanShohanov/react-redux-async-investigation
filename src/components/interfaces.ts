import { AnyAction } from 'redux';

import { Post } from '../store/interfaces';

export interface PostsProps {
    posts: Post[];
}

export interface PickerProps {
    options: string[];
    value: string;
    onChange: (value: string) => void;
}

export interface AsyncAppProps {
    selectedSubreddit: string;
    posts: Post[];
    isFetching: boolean;
    dispatch: (action: AnyAction) => void;
    lastUpdated?: number;
}
