/** @format */
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaComment,
  FaShare,
  FaEllipsisV,
  FaTrash as DeleteIcon,
  FaEdit as EditIcon,
  FaRegAngry as NotInterested,
} from "react-icons/fa";
import { useRouter } from "next/router";

import Likebtn from "../btnLike";

export default function Ads({
  currentId,
  userName,
  imgPath,
  caption,
  likes,
  likedBy = "",
  date,
}) {
  const [toggleFeed, setToggleFeed] = useState(false);
  const router = useRouter();
  const userProfileLink = (currentId, userName) => {
    return (
      <span
        className='_profile_link'
        onClick={(e) => {
          e.preventDefault();
          router.push(`/user/${currentId}`);
        }}
      >
        {userName}
      </span>
    );
  };

  return (
    <Link href={`/view/${currentId}`}>
      <a>
        <div className='card border-0'>
          <div className='_image_container'>
            <Image
              src={imgPath}
              alt={caption}
              quality={"50"}
              layout='fill'
              objectFit={"cover"}
              alt={caption}
            />
            <div className='_btn_scope'>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setToggleFeed((prev) => !prev);
                }}
                className='btn btn_filter'
              >
                <FaEllipsisV />
              </button>
              <div className={`_dot_menu ${toggleFeed ? "_active" : ""}`}>
                <button className='btn btn-default'>
                  <p>
                    <NotInterested className='_dot_icon' />
                  </p>
                  <p>Not interested</p>
                </button>
                <button className='btn btn-default'>
                  <p>
                    <DeleteIcon className='_dot_icon' />
                  </p>{" "}
                  <p>Remove this video</p>
                </button>
                <button className='btn btn-default'>
                  <p>
                    <EditIcon className='_dot_icon' />
                  </p>{" "}
                  <p>Update this video</p>
                </button>
              </div>
            </div>
          </div>
          <div className='card-description'>
            <div className='_likes'>
              <div className='_btn_collection'>
                <Likebtn isLiked={false} />
                <button className='btn btn-like'>
                  <FaComment />
                </button>
                <button className='btn btn-like'>
                  <FaShare />
                </button>
              </div>
              <div className='_counter'>{likes} likes</div>
            </div>
            <div className='_desc'>
              {userProfileLink(currentId, userName)}
              {caption}
            </div>
            <div className='_date'>{date}</div>
          </div>
        </div>
      </a>
    </Link>
  );
}
