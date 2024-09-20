import { Outlet } from "react-router-dom";
import { Footer } from "../../components/common/footer";

const Layout = () => {
  return (
    <div className="min-h-screen p-6 flex flex-col justify-between">
      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
