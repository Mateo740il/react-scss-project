import { createBrowserRouter, createRoutesFromElements,Route,RouterProvider} from "react-router-dom";

/*Pages */
import Home from './pages/Home'
import About from './pages/About'
import Users, { usersLoader } from './pages/Users'
import Posts, { postLoader } from './pages/Posts'
import NotFound from "./pages/NotFound";
import UserDetail, { userDetailsLoader } from "./pages/UserDetail";
import PostDetails, { postDEtailsLoader } from "./pages/PostDetails";

/*Layouts */
import RootLayout from "./layouts/RootLayout";
import UsersLayout from "./layouts/UsersLayout";
import PostLayout from "./layouts/PostLayout";




const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="users" element={<UsersLayout/>}>
        <Route index element={<Users/>}  loader={usersLoader}/>
        <Route path=":id" element={<UserDetail/>}  loader={userDetailsLoader}/>
      </Route>
      <Route path="posts" element={<PostLayout/>}>
        <Route index element={<Posts/>} loader={postLoader}/>
        <Route path=":id" element={<PostDetails/>} loader={postDEtailsLoader}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
