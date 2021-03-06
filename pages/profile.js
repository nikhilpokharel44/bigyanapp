/** @format */

import { useEffect, useState } from "react";
import Image from "next/image";
import Ads from "../components/ad_cards/ads";

export default function profile() {
  const [miniatureProfile, setMiniatureProfile] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 210 && !miniatureProfile) {
          setMiniatureProfile(true);
        }
        if (window.pageYOffset < 60) {
          setMiniatureProfile((prev) => prev && !prev);
        }
      });
    }
    return () => {
      null;
    };
  }, []);
  return (
    <div className='_profile'>
      <div className={`_profile_intro ${miniatureProfile ? "_scrolled" : ""}`}>
        <div className='_avatar'>
          <div
            style={{
              position: "relative",
              width: "100px",
              height: "100px",
              overflow: "hidden",
            }}
            className='_profile_user_image rounded-circle'
          >
            <Image
              src='https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Avatar_2_logo.jpg/220px-Avatar_2_logo.jpg'
              layout={"fill"}
              objectFit={"cover"}
              objectPosition={"center"}
            />
          </div>
          <div className='_user_intro'>
            <p>
              Nikhil <span className='_secondary'>Pokharel</span>
            </p>
            <p>nikhilpokharel9815@gmail.com</p>
          </div>
        </div>
      </div>

      {/* current-profile-description */}
      <div className='_profile_brief'>
        <div className='_allowed_details'>
          <div className='row'>
            <div className='col-lg-6 _user_desc'>
              <p>Reward Distributed</p>
              <div>10</div>
            </div>
            <div className='col-lg-6 _user_desc'>
              <p>Reward Earned</p>
              <div>20</div>
            </div>
          </div>
        </div>
        <div className='_allowed_details'>
          <div className='row'>
            <div className='col-lg-6 _user_desc'>
              <p>Amount earned</p>
              <div>Nrs 2000</div>
            </div>
            <div className='col-lg-6 _user_desc'>
              <p>Amout Withdrawn</p>
              <div>Nrs 20</div>
            </div>
          </div>
        </div>
        <div className='_allowed_details'>
          <div className='row'>
            <div className='col-lg-6 _user_desc'>
              <p>Following</p>
              <div>20</div>
            </div>
            <div className='col-lg-6 _user_desc'>
              <p>Follower</p>
              <div>20K</div>
            </div>
          </div>
        </div>
        <div className='profile_ads'>
          <Ads
            currentId={1}
            userName={"testuser"}
            imgPath={"/icons/mock.jpg"}
            caption={"this is my new ad"}
            likes={200}
            likedBy={"someone"}
            date={"a minute ago"}
          />
        </div>
      </div>
    </div>
  );
}
