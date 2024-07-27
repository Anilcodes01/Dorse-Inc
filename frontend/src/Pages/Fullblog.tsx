import { useParams } from "react-router-dom";
import { Appbar } from "../Components/Appbar";
import { FullBlogComponent } from "../Components/Oneblog";
import { useBlog } from "../Hooks";
import { FullBlogSkeleton } from "../Components/FullblogSkeleton";

export const FullBlog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });

  if (loading || !blog) {
    return (
      <div>
        <FullBlogSkeleton />
      </div>
    );
  }
  return (
    <div>
      <div>
        <Appbar />
      </div>
      <div>
        <FullBlogComponent blog={blog} />
      </div>
    </div>
  );
};
