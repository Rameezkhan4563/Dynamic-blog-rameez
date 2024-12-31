"use client";

import { useState } from "react";
import { Comment } from "@/lib/types";
import { CommentList } from "./comment-list";
import { CommentForm } from "./comment-form";

export function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>([]);

  const handleAddComment = (content: string) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      author: "Anonymous User",
      content,
      date: new Date().toLocaleDateString()
    };
    setComments([...comments, newComment]);
  };

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8">Comments</h2>
      <CommentList comments={comments} />
      <div className="mt-8">
        <CommentForm onSubmit={handleAddComment} />
      </div>
    </div>
  );
}