import React from 'react';

import { PostsProps } from './interfaces';

export const Posts = (props: PostsProps) => {
    return (
        <ul>
            {props.posts.map((post, i) => (
                <li key={i}>{post.title}</li>
            ))}
        </ul>
    );
};
