import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex-1 p-10">
      <h1>Welcome</h1>
      <Outlet />
    </div>
  );
};

export default AppLayout;
