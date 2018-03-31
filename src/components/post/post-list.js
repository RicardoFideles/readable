import React from 'react';
import PostItem from './post-item';

const PostList = ({ posts }) => {
  return (
    <div className="row">
      {posts.map(post => <PostItem key={post.id} {...post} />)}
    </div>
  );
};

export default PostList;
