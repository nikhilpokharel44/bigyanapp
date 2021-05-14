/** @format */
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const menuIcon = (path, alt) => {
    return (
      <Image className='_icon' src={path} width={20} height={20} alt={alt} />
    );
  };
  const loggedUserAvatar = (path, alt) => {
    return (
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
    );
  };
  return (
    <header className='main_navigation'>
      <ul className='nav_vertical'>
        <li className='nav_link'>
          <Link href='/'>
            <a>
              {menuIcon("/icons/home.svg", "home-icon")}
              <span>Home</span>
            </a>
          </Link>
        </li>
        <li className='nav_link'>
          <Link href='/profile'>
            <a>
              {menuIcon("/icons/profile.svg", "profile-icon")}{" "}
              <span>Profile</span>
            </a>
          </Link>
        </li>
        <li className='nav_link'>
          <Link href='/ad/create'>
            <a>
              {menuIcon("/icons/post.svg", "post-icon")} <span>Post Ad</span>
            </a>
          </Link>
        </li>
        <li className='nav_link'>
          <Link href='/creator/all-creators'>
            <a>
              {menuIcon("/icons/creators.svg", "creator-icon")}
              <span>Creator</span>
            </a>
          </Link>
        </li>
      </ul>
      <Link href='/profile'>
        {loggedUserAvatar(
          "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Avatar_2_logo.jpg/220px-Avatar_2_logo.jpg",
          "user-avatar-logo"
        )}
      </Link>
    </header>
  );
}
