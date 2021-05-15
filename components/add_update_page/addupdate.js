/** @format */
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Addupdate() {
  //handling text and number inputs
  const [title, setTitle] = useState("");
  const [titleErr, setTitleErr] = useState(null);
  const [description, setDescription] = useState("");
  const [descErr, setDescErr] = useState(null);
  const [rewardPoint, setRewardPoint] = useState("");
  const [rewardErr, setRewardErr] = useState(null);
  // handling video for media
  const [videoErr, setVideoError] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [videoPreviewProgress, setVideoPreviewProgress] = useState(0);
  // handling images for thumbnail
  const [thumbErr, setThumbErr] = useState(null);
  const [thumbImage, setThumbImage] = useState(null);
  const [thumbPreviewProgress, setThumbPreviewProgress] = useState(0);
  const [thumbPreview, setThumbPreview] = useState(null);

  //handle title
  const titleSetting = (mainTitle) => {
    setTitle(mainTitle);
    if (mainTitle.trim().length < 10) {
      setTitleErr("Title must be atleast 10 characters long");
    } else {
      setTitleErr(null);
    }
  };
  //handle description
  const descriptionSetting = (mainDesc) => {
    setDescription(mainDesc);
    if (mainDesc.trim().length < 40) {
      setDescErr("Description must be atleast 40 characters long");
    } else {
      setDescErr(null);
    }
  };
  //handle-reward-point
  const rewardSetting = (rewardValue) => {
    setRewardPoint(rewardValue);
    if (rewardValue > 1000 || rewardValue < 10) {
      setRewardErr("Reward must be between 0 and 1000");
    } else {
      setRewardErr(null);
    }
  };
  //handling image
  const handleImage = (e, image) => {
    if (image) {
      setThumbPreview(null);
      setThumbPreviewProgress(0);
      setThumbErr(null);
      setThumbImage(null);
      const error = [];
      const { name, size } = image;
      const getExt = name.split(".").pop();
      const prefferedExt = ["jpg", "jpeg", "png"];
      const prefferedSize = 2000000;

      if (!prefferedExt.includes(getExt)) {
        error.push({ err: "Image files with .jpg .jpeg and .png required" });
        setThumbErr(error);
        e.target.value = "";
        return false;
      } else if (size > prefferedSize) {
        error.push({ err: "Image size must be lessthan 2MB" });
        setThumbErr(error);
        e.target.value = "";
        return false;
      } else {
        const reader = new FileReader();
        reader.onload = () => {
          setThumbPreview(reader.result);
        };
        reader.onprogress = (currentprogress) => {
          const { loaded, total } = currentprogress;
          setThumbPreviewProgress((loaded / total) * 100);
        };
        reader.readAsDataURL(image);
        setThumbErr(null);
        setThumbImage(image);
      }
    }
  };

  //handling video
  const handleVideo = (e, video) => {
    if (video) {
      setVideoError(null);
      setVideoFile(null);
      setVideoPreview(null);
      setVideoPreviewProgress(0);
      const error = [];
      const { name, size } = video;
      const getExt = name.split(".").pop();
      const prefferedExt = ["mp4", "avi", "mov"];
      const prefferedSize = 20000000;

      if (!prefferedExt.includes(getExt)) {
        error.push({ err: "Video must be with .mp4 .avi and .mov extention" });
        setVideoError(error);
        e.target.value = "";
        return false;
      } else if (size > prefferedSize) {
        error.push({ err: "video size must be lessthan 20MB" });
        setVideoError(error);
        e.target.value = "";
        return false;
      } else {
        const reader = new FileReader();
        reader.onload = () => {
          setVideoPreview(reader.result);
        };
        reader.onprogress = (currentprogress) => {
          const { loaded, total } = currentprogress;
          setVideoPreviewProgress((loaded / total) * 100);
        };
        reader.readAsDataURL(video);
        setVideoError(null);
        setVideoFile(video);
      }
    }
  };

  //handling form post
  const postCreation = (e) => {
    e.preventDefault();
    !title ? setTitleErr("title is required") : null;
    !description ? setDescErr("description is required") : null;
    !thumbImage ? setThumbErr([{ err: "thumbnail is required" }]) : null;
    !videoFile ? setVideoError([{ err: "video is required" }]) : null;
    !rewardPoint ? setRewardErr("reward point is required") : null;
    if (titleErr || descErr || thumbErr || videoErr || rewardErr) {
      return false;
    }
  };

  return (
    <div className='_create_form'>
      <form onSubmit={postCreation}>
        <div className='form-group'>
          <label className='_form_label' htmlFor='caption'>
            Headline
            {titleErr ? (
              <span className='text-danger'> ( {titleErr} )</span>
            ) : null}
          </label>
          <input
            id='caption'
            type='text'
            value={title}
            placeholder='Title / Caption'
            className='form-control rounded-0'
            onChange={(e) => {
              titleSetting(e.target.value);
            }}
          />
        </div>
        <div className='form-group'>
          <label className='_form_label' htmlFor='description'>
            Description
            {descErr ? (
              <span className='text-danger'> ( {descErr} )</span>
            ) : null}
          </label>
          <textarea
            id='description'
            rows='10'
            placeholder='Describe your advertisement'
            className='form-control rounded-0'
            value={description}
            onChange={(e) => {
              descriptionSetting(e.target.value);
            }}
          ></textarea>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <div className='form-group'>
              <label className='_form_label' htmlFor='thumbnail'>
                Thumbnail {"( lessthan 2MB )"}{" "}
                <span>
                  {thumbPreviewProgress > 0 && thumbPreviewProgress < 100
                    ? thumbPreviewProgress + "%"
                    : null}
                </span>
                {thumbErr && thumbErr.length ? (
                  <>
                    <br />
                    {thumbErr.map((data, index) => (
                      <span key={index} className='text-danger'>
                        {data.err}
                      </span>
                    ))}
                    <br />
                  </>
                ) : null}
              </label>
              {thumbPreview ? (
                <div
                  className='mb-2'
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "200px",
                  }}
                  className='image_preview'
                >
                  <Image
                    src={thumbPreview}
                    layout={"fill"}
                    objectFit={"cover"}
                  />
                </div>
              ) : null}
              <input
                id='thumbnail'
                type='file'
                onChange={(e) => {
                  handleImage(e, e.target.files[0]);
                }}
                placeholder='Add your thumbnail'
                className='form-control rounded-0'
              />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='form-group'>
              <label className='_form_label' htmlFor='media'>
                Media File {"( lessthan 10MB )"}
                <span>
                  {videoPreviewProgress > 0 && videoPreviewProgress < 100
                    ? videoPreviewProgress + "%"
                    : null}
                </span>
                {videoErr && videoErr.length ? (
                  <>
                    <br />
                    {videoErr.map((data, index) => (
                      <span key={index} className='text-danger'>
                        {data.err}
                      </span>
                    ))}
                    <br />
                  </>
                ) : null}
              </label>
              {videoPreview ? (
                <div
                  className='mb-2'
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "200px",
                  }}
                  className='image_preview'
                >
                  <video
                    src={videoPreview}
                    controls
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
              ) : null}
              <input
                id='media'
                type='file'
                onChange={(e) => {
                  handleVideo(e, e.target.files[0]);
                }}
                placeholder='Add your thumbnail'
                className='form-control rounded-0'
              />
            </div>
          </div>
        </div>
        <div className='form-group'>
          <label className='_form_label' htmlFor='reward'>
            Reward Points {"( 10 - 1000 )"}
            {rewardErr ? (
              <>
                <br />
                <span className='d-block mt-1 text-danger'>{rewardErr}</span>
              </>
            ) : null}
          </label>
          <input
            id='reward'
            type='number'
            placeholder='Reward points ( Eg: 100 )'
            className='form-control rounded-0'
            value={rewardPoint}
            onChange={(e) => {
              rewardSetting(e.target.value);
            }}
          />
        </div>
        <div className='form-group btn_collection'>
          <Link href='/'>
            <a className='btn rounded-0'>Back to home</a>
          </Link>
          <button className='btn btn-submit rounded-0' type='submit'>
            Post
          </button>
        </div>
      </form>
    </div>
  );
}
