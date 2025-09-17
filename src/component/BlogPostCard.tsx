import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Eye, Clock } from "lucide-react";
import { Link } from "react-router-dom";

type BlogPost = {
    id: number;
    title: string;
    author: string;
    comments: number;
    excerpt: string;
    imageUrl: string;
    tags: string[];
    views: number;
    readTime: string;
};

export default function BlogPostCard({ post }: { post: BlogPost }) {
    return (
        <Card className="overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
            <div className="flex flex-col sm:flex-row">
                <div className="sm:w-48 sm:flex-shrink-0">
                    <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-48 sm:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                    <Link to={`/details/${post.id}`}>
                        <h2 className="text-xl font-bold text-gray-800 mt-3 group-hover:text-red-600 transition-colors cursor-pointer">
                            {post.title}
                        </h2>
                    </Link>
                    <p className="text-xs text-gray-500 mt-2">
                        By {post.author} &nbsp;&middot;&nbsp; {post.comments} Comments
                    </p>
                    <p className="text-sm text-gray-600 mt-4 flex-grow">{post.excerpt}</p>
                    <Separator className="my-4" />
                    <div className="flex justify-between items-center text-xs text-gray-500">
                        <span className="flex items-center gap-1.5">
                            <Eye size={14} /> {post.views} Views
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock size={14} /> {post.readTime}
                        </span>
                    </div>
                </div>
            </div>
        </Card>
    );
}
