/** @format */
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
  const changeContrast = {
    opacity: "0.8",
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
                  onClick={() => {
                    setUserLike(!userLike);
                  }}
                  className='btn btn-like'
                  style={!userLike ? null : changeContrast}
                >
                  <Image
                    src={!userLike ? "/icons/like.png" : "/icons/liked.png"}
                    width={20}
                    height={20}
                    alt={"like"}
                  />
                </button>
                <button className='btn btn-like'>Query</button>
                <button className='btn btn-like'>Share</button>
              </div>
              <div className='_counter'>{likes} likes</div>
            </div>
            <div className='_desc'>
              <Link href={`/user/${currentId}`}>
                <a>{userName}</a>
              </Link>
              {caption}
            </div>
            <div className='_date'>{date}</div>
          </div>
        </div>
      </a>
    </Link>
  );
}
