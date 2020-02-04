import React from 'react';

import Comments from './Comments';

function Post({ post }) {
  return (
    <div className="postBox">
      <div className="userInfoBox">
        <img src={post.author.avatar} alt="" />
        <div>
          <p className="name">{post.author.name}</p>
          <p className="date">{post.date}</p>
        </div>
      </div>
      <div>
        <p className="content">{post.content}</p>
      </div>
      <div className="dividerWrapper">
        <hr className="divider" />
      </div>
      <Comments comments={post.comments} />
    </div>
  );
}

export default Post;
