import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root.tsx";
import {RouterProvider} from "react-router-dom";

const router = createBrowserRouter(
    [
        {path:"*", Component:Root}
    ]
);

export default function App(){

    return (
        <>
            <RouterProvider router = {router} />
        </>
    );
}