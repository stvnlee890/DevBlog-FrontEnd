import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentView from "./CommentView";
import CommentTextBox from "./commentTextbox/CommentTextBox";
import {
  GetComment,
  PostComment,
  DeleteComment,
} from "../../../../utils/httpRequests/HttpRequest";

const Comments = () => {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const user = window.localStorage.getItem("user");

  useEffect(() => {
    GetComment(postId)
      .then((res) => setComments(res))
      .catch((err) => console.log(err));
  }, [commentInput]);

  // comment state being changed
  const handleChange = (e) => {
    e.preventDefault();
    setCommentInput(e.target.value);
  };

  const handleComment = async (event) => {
    event.preventDefault();
    try {
      const data = PostComment(user, postId, commentInput)
        .then(() => {
          setCommentInput(() => '')
        })
      } catch (error) {
        console.log(error)
      }
  
  }

  const handleDelete = async (event) => {
    DeleteComment(postId, event.target.id)
      .then(() => {
        const newComments = comments.filter(
          (comment) => comment._id !== event.target.id
        );
        setComments(newComments);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="">
      <div className="w-full mb-4">
        <CommentTextBox
          handleComment={handleComment}
          handleChange={handleChange}
          comment={commentInput}
        />
      </div>

      <div className="bg-slate-200 border-solid-2 rounded-lg p-10 shadow-lg">
        {comments ? (
          comments
            .slice(0)
            .reverse()
            .map((ele) => (
              <CommentView
                key={ele._id}
                comment={ele}
                handleDelete={handleDelete}
              />
            ))
        ) : (
          <p className="tablet:text-xs laptop:text-sm">no comments</p>
        )}
      </div>
    </div>
  );
};

export default Comments;
