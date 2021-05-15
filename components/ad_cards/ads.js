/** @format */
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart, FaHeart, FaComment, FaShare } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Ads({
  currentId,
  userName,
  imgPath,
  caption,
  likes,
  likedBy = "",
  date,
}) {
  const [userLike, setUserLike] = useState(false);
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
          </div>
          <div className='card-description'>
            <div className='_likes'>
              <div className='_btn_collection'>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setUserLike(!userLike);
                  }}
                  className='btn btn-like'
                >
                  {userLike ? <FaHeart className='_like' /> : <FaRegHeart />}
                </button>
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
