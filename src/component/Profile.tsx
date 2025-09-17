import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/blogData";

const popularPosts = [
  {
    date: { day: "20", month: "Aug" },
    title: "Computer Filters Noise To Make You A Better Listener",
    author: "By Jessica Smith",
  },
  {
    date: { day: "08", month: "Aug" },
    title: "Ultimate Guide To Planning Your First Overseas Trip",
    author: "By Jessica Smith",
  },
  {
    date: { day: "05", month: "Aug" },
    title: "Exploring New Trends In Home Decor And Interior Design",
    author: "By Jessica Smith",
  },
];

const categories: string[] = [
  "Entertainment",
  "Gadget",
  "Ideas",
  "Inspiration",
  "Lifestyle",
  "Music",
  "Travel",
  "Trending",
];

export default function ProfileWidget() {
  const topRowImages = blogPosts.slice(0, 3);
  const bottomRowImages = blogPosts.slice(3, 6);

  const topImagesLoop = [...topRowImages, ...topRowImages];
  const bottomImagesLoop = [...bottomRowImages, ...bottomRowImages];

  return (
    <Card className="text-center shadow-sm">
      <CardContent className="pt-6">
        <Avatar className="w-24 h-24 mx-auto border-4 border-white shadow-md">
          <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          <AvatarFallback>RS</AvatarFallback>
        </Avatar>
        <h3 className="font-bold mt-4 text-lg">@Rivaxstudio</h3>
        <p className="text-sm text-gray-500 mt-1">
          We become what we think about!
        </p>
        <Button
          variant="outline"
          className="rounded-full mt-4 text-xs h-8"
        >
          Follow me
        </Button>

        {/* Images Scroll */}
        <div className="mt-6 space-y-2 overflow-hidden">
          <div className="flex gap-2 animate-scroll-reverse">
            {topImagesLoop.map((img, i) => (
              <img
                key={i}
                src={img.imageUrl}
                alt={`Gallery item ${i + 1}`}
                className="rounded-lg aspect-square object-cover w-24 h-24 flex-shrink-0"
              />
            ))}
          </div>
          <div className="flex gap-2 animate-scroll">
            {bottomImagesLoop.map((img, i) => (
              <img
                key={i}
                src={img.imageUrl}
                alt={`Gallery item ${i + 4}`}
                className="rounded-lg aspect-square object-cover w-24 h-24 flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </CardContent>

      {/* Popular Posts */}
      <CardHeader>
        <CardTitle className="text-base">Popular Posts</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-5">
          {popularPosts.map((post, i) => (
            <li key={i} className="flex items-start gap-4">
              <div className="text-center font-bold">
                <span className="text-2xl text-gray-700">{post.date.day}</span>
                <span className="block text-xs text-gray-400 -mt-1">
                  {post.date.month}
                </span>
              </div>
              <div>
                <h4 className="font-semibold text-sm leading-tight text-gray-800 hover:text-red-600 transition-colors cursor-pointer">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{post.author}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>

      {/* Categories */}
      <CardHeader>
        <CardTitle className="text-base">Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Badge
              key={cat}
              variant="outline"
              className="cursor-pointer hover:bg-gray-100"
            >
              #{cat}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
