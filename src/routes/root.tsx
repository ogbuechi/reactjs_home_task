import {Link, Outlet} from "react-router-dom";
import Sidebar from "../components/shared/Sidebar";


export default function Root() {
    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            <Sidebar />

            <div className="flex-1">
                <div className="p-4">
                    <Outlet />
                </div>
            </div>

        </div>
    );
}
