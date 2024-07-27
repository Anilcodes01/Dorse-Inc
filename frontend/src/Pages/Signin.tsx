import { Quote } from "../Components/Quote";
import { Auth } from "../Components/Auth";

export function Signin() {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 ">
        <div className="hidden lg:block">
        <Quote />
      </div>
      <div className=" h-screen ">
        <Auth type="signin"/>
      </div>
      
    </div>
  );
}
