import { Blog } from "../Hooks";
import { Avatar } from "./Blogcard";



export const FullBlogComponent = ({blog}: {blog: Blog}) => {
  return (
    <div className="h-screen w-screen flex  justify-center">
      <div className=" mt-16  max-w-4xl p-5  flex-col  item-center   font-poppins  rounded">
        <div className="font-extrabold text-4xl">{blog.title}</div>
        <div className="flex gap-2 pt-6 pb-6 border-b-2">
          <div>
            <Avatar username={blog.author.username} />
          </div>
          <div className="text-md">{blog.author.username}</div>
          <div>.</div>
          <div className="text-md">{`${Math.ceil(
            blog.content.length / 1000
          )} min read`}</div>
        </div>
        <div className="text-xl pt-8 pb-8"  dangerouslySetInnerHTML={{ __html: blog.content }}/>
      </div>
    </div>
  );
};
