/** @format */

//advertises
import Ads from "../components/ad_cards/ads";

export default function Home() {
  return (
    <div className='_home_contents'>
      <div className='_page_header'>
        <h4>Home</h4>
      </div>
      <Ads
        currentId={1}
        userName={"nikhilPokharel"}
        imgPath={"/icons/mock.jpg"}
        caption={"this is my new video"}
        likes={20}
        likedBy={"someone"}
        date={"6 hours ago"}
      />
    </div>
  );
}
