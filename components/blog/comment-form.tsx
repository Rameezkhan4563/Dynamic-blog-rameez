"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

interface CommentFormProps {
  onSubmit: (comment: string) => void;
}

export function CommentForm({ onSubmit }: CommentFormProps) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    onSubmit(comment);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        placeholder="Share your thoughts..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="min-h-[100px]"
      />
      <Button type="submit" className="flex items-center gap-2">
        <Send className="w-4 h-4" />
        Post Comment
      </Button>
    </form>
  );
}