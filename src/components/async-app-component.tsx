import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AsyncAppProps } from './interfaces';
import {
    fetchPostsIfNeeded,
    selectSubreddit,
    invalidateSubreddit,
} from '../store/actions';
import { Picker } from './picker';
import { Posts } from './posts';

export const AsyncAppComponent = (props: AsyncAppProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPostsIfNeeded(props.selectedSubreddit));
    }, [dispatch, props]);

    const handleChange = (nextSubreddit: string) => {
        dispatch(selectSubreddit(nextSubreddit));
        dispatch(fetchPostsIfNeeded(selectedSubreddit));
    };

    const handleRefreshClick = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault();

        dispatch(invalidateSubreddit(props.selectedSubreddit));
        dispatch(fetchPostsIfNeeded(props.selectedSubreddit));
    };

    const { selectedSubreddit, posts, isFetching, lastUpdated } = props;

    return (
        <div>
            <Picker
                value={selectedSubreddit}
                onChange={handleChange}
                options={['reactjs', 'frontend', 'DIY']}
            />
            <p>
                {lastUpdated && (
                    <span>
                        {`Last updated at ${new Date(
                            lastUpdated
                        ).toLocaleTimeString()} `}
                    </span>
                )}
                {!isFetching && (
                    <button onClick={handleRefreshClick}>Refresh</button>
                )}
            </p>
            {isFetching && posts.length === 0 && <h2>Loading...</h2>}
            {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
            {posts.length > 0 && (
                <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                    <Posts posts={posts} />
                </div>
            )}
        </div>
    );
};
