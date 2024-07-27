import { Appbar } from "../Components/Appbar";
import { BlogCard } from "../Components/Blogcard";
import { BlogCardSkeleton } from "../Components/Skeleton";
import { useBlogs } from "../Hooks";

export const AllBlogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <BlogCardSkeleton />
      </div>
    );
  }

  return (
    <div>
      <Appbar />
      <div>
        <div className="flex justify-content flex-col items-center">
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              content={blog.content}
              authorname={blog.author.username}
              publishedDate="Dec 3, 2024"
              title={blog.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
