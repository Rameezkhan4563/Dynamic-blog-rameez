"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Comment } from "@/lib/types";

interface CommentListProps {
  comments: Comment[];
}

export function CommentList({ comments }: CommentListProps) {
  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <Card key={comment.id} className="p-4">
          <div className="flex items-start gap-4">
            <Avatar>
              <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${comment.author}`} />
              <AvatarFallback>{comment.author[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{comment.author}</h3>
                <time className="text-sm text-muted-foreground">{comment.date}</time>
              </div>
              <p className="mt-2 text-muted-foreground">{comment.content}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}