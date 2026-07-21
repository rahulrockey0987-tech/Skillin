import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AdminLayout() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
}