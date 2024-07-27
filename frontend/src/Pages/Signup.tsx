import { Quote } from "../Components/Quote";
import { Auth } from "../Components/Auth";

export function Signup() {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 ">
      <div className=" h-screen ">
        <Auth type="signup"/>
      </div>
      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
}
