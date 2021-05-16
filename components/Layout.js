/** @format */

import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });
    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, [router.pathname]);
  return (
    <div className='container app_container'>
      <Navbar />
      <div
        className={`_main_page_contents ${
          router.pathname == "/profile" ? "_user_current_profile" : ""
        }`}
      >
        {loading ? <h2>Loading ......</h2> : <>{children}</>}
      </div>
      <Sidebar />
    </div>
  );
};

export default Layout;
