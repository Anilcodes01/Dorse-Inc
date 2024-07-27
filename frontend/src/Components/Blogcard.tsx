import { Link } from "react-router-dom";

interface BlogCardProps {
  id: number;
  authorname: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  id,
  authorname,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
    <div className="border-b rounded font-poppins w-screen cursor-pointer max-w-3xl p-5 m-2 ">
      <div className="flex font-bold gap-2">
        <div>
          <Avatar username={authorname} />
        </div>
        <div>{authorname} </div>
        <div className="font-extrabold items-center text-center flex justify-center">.</div>
        <div>{publishedDate}</div>
      </div>
      <div className="text-3xl pt-4 font-black">{title}</div>
      <div className="text-lg  pt-4" dangerouslySetInnerHTML={{ __html: content.slice(0, 150) + "..." }} />
      <div className="border mb-2 mt-4 w-20 text-center pt-1 bg-slate-200  rounded-full h-6  text-xs">
        {`${Math.ceil(content.length / 1000)} min read`}
      </div>
    </div>
    </Link>
  );
};

export function Avatar({ username }: { username: string }) {
  return (
    <div className="border rounded-full h-6 w-6 text-center bg-slate-200">
      {username[0]}
    </div>
  );
}
