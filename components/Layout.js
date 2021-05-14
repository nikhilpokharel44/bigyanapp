/** @format */

import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Layout = ({ children }) => {
  return (
    <div className='container app_container'>
      <Navbar />
      <div className='_main_page_contents'>{children}</div>
      <Sidebar />
    </div>
  );
};

export default Layout;
