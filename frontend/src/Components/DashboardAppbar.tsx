
import { GetStarted } from "./Getstartedbtn";
import { SigninBtn } from "./Signinbtn";



export function DashboardAppbar() {

    return <div className="h-20 justify-between border-b  flex items-center">
        <div className="font-bold ml-20 font-poppins text-3xl">
            Dorse
        </div>
        <div className="flex pt-2 gap-4 items-center mr-10">
          <SigninBtn />
            <GetStarted />
        </div>
    </div>
}



