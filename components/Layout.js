/** @format */

import { useEffect, useState } from "react";
import Navbar, { Avatar } from "./navbar";
import Sidebar from "./sidebar";
import Header from "./header";
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
    <div className='app_container'>
      <Header
        pageTitle='Bigyapan'
        pageDescription='Information about latest bigyapans'
        pageBanner='/icons/mock.jpg'
      />
      <Navbar />
      <div
        className={`_main_page_contents ${
          router.pathname == "/profile" ? "_user_current_profile" : ""
        }`}
      >
        {loading ? (
          <h2>Loading ......</h2>
        ) : (
          <>
            <div className='_avatar_small'>
              <Avatar
                path='https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Avatar_2_logo.jpg/220px-Avatar_2_logo.jpg'
                alt='user-avatar-logo'
              />
            </div>
            {children}
          </>
        )}
      </div>
      <Sidebar />
    </div>
  );
};

export default Layout;
