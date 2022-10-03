import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  let navigate = useNavigate();
  return (
    <div className="main">
      <div className="leftDiv">
        <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221003T172252Z&X-Amz-Expires=86400&X-Amz-Signature=b6d5196fe40ff07f558a3a5b3d53bc071fc4ec690a61d2a0afa4ba84dee72014&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject" />
      </div>
      <div className="rightDiv">
        <div className="subTextColor">Imagine if </div>
        <div className="snapchat">Snapchat </div>
        <div className="subTextColor"> had events.</div>
        <p className="textContent">
          {" "}
          Easily host and share events with your friends across any social
          media.
        </p>
        <div className="meidaQueryDiv">
          <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221003T172252Z&X-Amz-Expires=86400&X-Amz-Signature=b6d5196fe40ff07f558a3a5b3d53bc071fc4ec690a61d2a0afa4ba84dee72014&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject" />
        </div>
        <button onClick={() => navigate("/Event")} className="btn">
          🎉 Create my event
        </button>
      </div>
    </div>
  );
}

export default Home;
