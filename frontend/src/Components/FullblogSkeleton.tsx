import { Appbar } from "./Appbar"



export const FullBlogSkeleton = () => {
    return <div className="flex flex-col justify-center">
        <div>
            <Appbar />
        </div>
        <div className=" w-screen flex justify-center">
        <div role="status" className=" animate-pulse">
        <div className="h-screen w-screen flex  justify-center">
      <div className=" mt-16 w-screen flex   p-5  flex-col    font-poppins  rounded">
        <div className="">
            {/* title */}
            <div className="h-16 max-w-4xl ml-72 bg-gray-300 rounded "></div>
        </div>
       
          <div className="pt-8 flex ml-72 ">
            {/* avatar */}
            <div className="h-6 w-6 bg-gray-300 rounded-full  "></div>
          
          <div className="text-md pt-1 ml-3">
            {/* authorname */}
            <div className="h-4 bg-gray-300 rounded w-60"></div>
          </div>
          
          {/* <div className="text-md">{`${Math.ceil(
            blog.content.length / 1000
          )} min read`}</div> */}
        </div>
        <div className="text-xl ml-72 pt-8 pb-8" >
            {/* content */}
            <div className="h-6 bg-gray-300 rounded-lg max-w-4xl mb-2"></div>
            <div className="h-6 bg-gray-300 rounded max-w-3xl mb-2"></div>
            <div className="h-6 bg-gray-300 rounded max-w-2xl mb-2"></div>

            <div className="h-6 bg-gray-300 rounded-lg max-w-4xl mb-2 mt-12"></div>
            <div className="h-6 bg-gray-300 rounded max-w-2xl mb-2"></div>
            <div className="h-6 bg-gray-300 rounded max-w-2xl mb-2"></div>

            <div className="h-6 bg-gray-300 rounded-lg max-w-4xl mb-2 mt-12"></div>
            <div className="h-6 bg-gray-300 rounded max-w-2xl mb-2"></div>
            <div className="h-6 bg-gray-300 rounded max-w-3xl mb-2"></div>
            
            </div>
      </div>
    </div>
        </div>
        </div>
    </div>
}