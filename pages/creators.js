/** @format */

import Image from "next/image";
import Link from "next/link";

const creator = (userId) => {
  return (
    <Link href={`/user/${userId}`}>
      <a className='_creator'>
        <div className='_creator_brief'>
          <div
            className='_creator_avatar rounded-circle'
            style={{
              position: "relative",
              width: "60px",
              height: "60px",
              overflow: "hidden",
            }}
          >
            <Image
              src='https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Avatar_2_logo.jpg/220px-Avatar_2_logo.jpg'
              layout={"fill"}
              objectFit={"cover"}
              objectPosition={"center"}
            />
          </div>
          <div className='_creator_desc'>
            <p>nikhil POKHAREL</p>
            <p>nikhilpokharel9815@gmail.com</p>
          </div>
        </div>
        <div className='_follow_btn'>
          <button className='btn btn_follow'>Follow</button>
        </div>
      </a>
    </Link>
  );
};

export default function Creators() {
  return (
    <div className='_creators'>
      <div className='_page_header'>
        <h4>Creator's you may know</h4>
      </div>
      {creator("nikhil")}
      {creator("one2")}
      {creator("three2")}
    </div>
  );
}
