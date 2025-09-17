import { useParams } from "react-router-dom";
import { blogPosts } from "@/blogData";
import ProfileWidget from "./Profile";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function BlogDetails() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) return <p>Post not found!</p>;

  return (
    <div className="container mx-auto py-10  text-center text-gray-500">
      <div>
        <div className="text-start mx-60 border-b mb-5 ">
          <span className="text-red-600 mx-10">#{post.tags[0]}</span>
          <span className="text-amber-500 mx-10">#{post.tags[1]}</span>
          <h1 className="text-3xl font-bold mb-4 mx-10">{post.title}</h1>
        </div>
        <img src={post.imageUrl} alt={post.title} className="w-auto rounded-lg mb-6 mx-auto" />
        <div className="text-start mx-50 mb-5 flex justify-center">
          <span className="text-red-600">#{post.tags[0]}</span>
          <span>/</span>
          <span className="text-amber-500">#{post.tags[1]}</span>
          <span>/</span>
          <h1 className="text-xl font-bold mb-4">{post.title}</h1>
        </div>
      </div>
      <div className="bg-gray-50/75 min-h-screen">
        <div className="container mx-auto py-16 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
            {/* Left Column: Blog Posts */}
            <main className="lg:col-span-2 space-y-8 bg-white rounded-2xl">
              <div className="m-20">
                <p className="m-4 text-start">{post.summary}</p>
                <div className="m-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                  >
                    <AccordionItem value="item-3" className="border-2 rounded-2xl">
                      <AccordionTrigger className="bg-red-500 px-2 text-white">Table Of Content</AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance text-start p-2">
                        <p>
                          We stand behind our products with a comprehensive 30-day return
                          policy. If you&apos;re not completely satisfied, simply return the
                          item in its original condition.
                        </p>
                        <p>
                          Our hassle-free return process includes free return shipping and
                          full refunds processed within 48 hours of receiving the returned
                          item.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="text-start">
                  <h1 className="text-3xl font-bold text-black">{post.titleDetail}</h1>
                  <p className="">
                    {post.summary}
                  </p>
                  <img src={post.images} alt={post.title} className="w-full rounded-2xl"/>
                </div>
              </div>
            </main>

            {/* Right Column: Sidebar */}
            <aside className="space-y-8 mt-12 lg:mt-0">
              <ProfileWidget />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
