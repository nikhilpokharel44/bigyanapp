/** @format */

import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function BtnLike({ isLiked }) {
  const [userLike, setUserLike] = useState(isLiked);
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setUserLike(!userLike);
      }}
      className='btn btn-like'
    >
      {userLike ? <FaHeart className='_like' /> : <FaRegHeart />}
    </button>
  );
}
