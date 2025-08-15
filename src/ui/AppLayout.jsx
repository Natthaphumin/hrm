import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
