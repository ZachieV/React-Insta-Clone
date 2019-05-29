import React from 'react';

const CommentInput = props => {
  return (
    <form onSubmit={props.addNewComment}>
      <input type="text" placeholder="Add comment... " value={props.comment} onChange={props.handleCommentInput}/>
      <input type="submit"/>
    </form>
  );
};

export default CommentInput;