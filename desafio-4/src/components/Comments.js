import React from 'react';

function Comments({ comments }) {
  return (
    <>
      {comments.map(comment => (
        <div className="commentWrapper">
          <img src={comment.author.avatar} alt="" className="commentAvatar" />
          <div className="commentBox">
            <span className="commentAuthor">{comment.author.name} </span>
            {comment.content}
          </div>
        </div>
      ))}
    </>
  );
}

export default Comments;
