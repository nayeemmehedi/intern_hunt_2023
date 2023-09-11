import Home from "../page/Home";
import Login from "../page/Login";
import SignUp from "../page/SignUp";

export const listRouter = [
    {path:"/", element:Home},
    {path:"/home", element:Home},

    {path:"/login", element:Login},
    {path:"/signup", element:SignUp},
    {path:"/*", element: "error"},


]
export const privateListRouter = [{path:"/", element:"hello"}]
