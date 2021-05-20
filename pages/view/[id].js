/** @format */

import { useState } from "react";
import Btnlike from "../../components/btnLike";
import { useRouter } from "next/router";
import { FaComment, FaShare } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function View() {
  // const router = useRouter();
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <div className='_view'>
      <div className='_page_header'>
        <h4>Title Here</h4>
      </div>
      <div className='_video_and_desc'>
        <div className='_video'></div>
        <div className='_likes_total'>
          20,000000 <span>Likes</span>
        </div>
        <div className='_feature_btn'>
          <Btnlike isLiked={true} />
          <button className='btn btn-comment'>
            <FaComment />
          </button>
          <button className='btn btn-share'>
            <FaShare />
          </button>
        </div>
        <div className='_desc'>
          <pre className='_main_desc'>
            This is simple description
            <span className='_show_toggler'>
              <label
                className={`_toggler ${toggleShow ? "_show" : ""}`}
                htmlFor='showToggler'
              ></label>
              <input
                onChange={(e) => {
                  setToggleShow(e.target.checked);
                }}
                className='_view_toggler'
                type='checkbox'
                id='showToggler'
              />
            </span>
          </pre>
        </div>
        <div className='_user_detail'>
          <Link href='/profile'>
            <a className='_user d-flex align-items-center p-2'>
              <div className='_avatar'>
                <Image
                  className='image_avatar'
                  src={
                    "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Avatar_2_logo.jpg/220px-Avatar_2_logo.jpg"
                  }
                  alt={"user-avatar"}
                  width={50}
                  height={50}
                />
              </div>
              <div className='_detail d-flex flex-column'>
                <span>Nikhil</span>
                <span>nikhilpokharel9815</span>
              </div>
            </a>
          </Link>
        </div>
        <div className='_users_review'>
          <h4 className='_review_head'>Reviews</h4>
          <div className='_review'>
            <Link href={`/user/1`}>
              <a className='_user'>
                nikhil<span>POKHAREL</span>
              </a>
            </Link>
            <pre className='_review_text'>very nice!!!</pre>
          </div>

          <div className='_review'>
            <Link href={`/user/1`}>
              <a className='_user'>
                nikhil<span>POKHAREL</span>
              </a>
            </Link>
            <pre className='_review_text'>very nice!!!</pre>
          </div>

          <div className='_review'>
            <Link href={`/user/1`}>
              <a className='_user'>
                nikhil<span>POKHAREL</span>
              </a>
            </Link>
            <pre className='_review_text'>very nice!!!</pre>
          </div>

          <div className='_review'>
            <Link href={`/user/1`}>
              <a className='_user'>
                nikhil<span>POKHAREL</span>
              </a>
            </Link>
            <pre className='_review_text'>very nice!!!</pre>
          </div>

          <div className='_review'>
            <Link href={`/user/1`}>
              <a className='_user'>
                nikhil<span>POKHAREL</span>
              </a>
            </Link>
            <pre className='_review_text'>
              blah! blah !! fjdla fdjfljsad sdajfl; klsajdfl saldfjaslk
              jlskadjflsaj ljdf sad;fjsadlfj lasjfd lasdflj asdlfdsl
              fsadjfl;asjfl;sajf;lsad flsaj dfdlasj flsj;lf salfj sldfj
              sa;lfdsjf
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
