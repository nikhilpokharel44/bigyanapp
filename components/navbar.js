/** @format */
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaHome,
  FaUserCircle,
  FaPlusCircle,
  FaUsers,
  FaSearch,
  FaCashRegister,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { useRouter } from "next/router";

export function Avatar({ path, alt }) {
  return (
    <Link href='/profile'>
      <div className='logged_user_avatar'>
        <a className='_user d-flex align-items-center p-2'>
          <div className='_avatar'>
            <Image
              className='image_avatar'
              src={path}
              alt={alt}
              width={40}
              height={40}
            />
          </div>
          <div className='_detail d-flex flex-column'>
            <span>Nikhil</span>
            <span>nikhilpokharel9815</span>
          </div>
        </a>
      </div>
    </Link>
  );
}
export default function Navbar() {
  const currentLink = useRouter();
  const [scrollCounter] = useState(16);
  return (
    <header className='main_navigation'>
      <div className='nav_link _navigator _navigator_top'>
        <button
          onClick={() => {
            let navbarMain = document.querySelector(".nav_vertical");
            let checkWidth = typeof window !== "undefined" && window.innerWidth;
            if (checkWidth <= 500) {
              navbarMain.scrollBy(-scrollCounter, 0);
            } else {
              navbarMain.scrollBy(0, -scrollCounter);
            }
          }}
          className='_icons_min'
        >
          <FaChevronUp />
        </button>
      </div>
      <ul className='nav_vertical'>
        <li className='nav_link'>
          <Link href='/'>
            <a className={currentLink.pathname == "/" ? "active" : null}>
              <span className='_icons_min'>
                <FaHome />
              </span>
              <span>Home</span>
            </a>
          </Link>
        </li>
        <li className='nav_link'>
          <Link href='/profile'>
            <a className={currentLink.pathname == "/profile" ? "active" : null}>
              <span className='_icons_min'>
                <FaUserCircle />
              </span>
              <span>Profile</span>
            </a>
          </Link>
        </li>
        <li className='nav_link'>
          <Link href='/ad/create'>
            <a
              className={currentLink.pathname == "/ad/create" ? "active" : null}
            >
              <span className='_icons_min'>
                <FaPlusCircle />
              </span>
              <span>Post Ad</span>
            </a>
          </Link>
        </li>
        <li className='nav_link'>
          <Link href='/creators'>
            <a
              className={currentLink.pathname == "/creators" ? "active" : null}
            >
              <span className='_icons_min'>
                <FaUsers />
              </span>
              <span>Creator</span>
            </a>
          </Link>
        </li>
        <li className='nav_link'>
          <Link href='/withdraw/amt'>
            <a
              className={
                currentLink.pathname == "/withdraw/amt" ? "active" : null
              }
            >
              <span className='_icons_min'>
                <FaCashRegister />
              </span>
              <span>Withdraw</span>
            </a>
          </Link>
        </li>
        <li className='nav_link'>
          <button
            onClick={() => {
              const sideBar =
                typeof document !== "undefined" &&
                document.querySelector("._sidebar");
              sideBar && sideBar.classList.toggle("showMenu");
            }}
            className='_btn_temp btn btn-default'
          >
            <span className='_icons_min'>
              <FaSearch />
            </span>
          </button>
        </li>
      </ul>
      <div className='nav_link _navigator _navigator_bottom'>
        <button
          onClick={(e) => {
            let navbarMain = document.querySelector(".nav_vertical");
            let checkWidth = typeof window !== "undefined" && window.innerWidth;
            if (checkWidth <= 500) {
              navbarMain.scrollBy(scrollCounter, 0);
            } else {
              navbarMain.scrollBy(0, scrollCounter);
            }
          }}
          className='_icons_min'
        >
          <FaChevronDown />
        </button>
      </div>
      <Avatar
        path='https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Avatar_2_logo.jpg/220px-Avatar_2_logo.jpg'
        alt='user-avatar-logo'
      />
    </header>
  );
}
