import React, {useState} from 'react';
import PostAjax from '../../ajax/Post';
import Post from '../../ajax/Post';

export default function PostList(props){
    const items = PostAjax.getPosts();

    for(let [key, value] of Object.entries(items)){
        console.log( value);
    }

    return (
        ''
    );

}