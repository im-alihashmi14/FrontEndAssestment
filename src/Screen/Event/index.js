import React from "react";
import { ReactComponent as Calendar } from "./../../assets/Calendar.svg";
import { ReactComponent as Location } from "./../../assets/Location.svg";

const EventsButto = ({ SVGComponent, title, subTitle }) => {
  return (
    <div className="row">
      <div className="svgContainer">
        {SVGComponent && <SVGComponent height={40} width={40} />}
      </div>
      <div className="column">
        <div className="date"> {title}</div>
        <div className="subDateContent">{subTitle}</div>
      </div>
    </div>
  );
};

function Event() {
  return (
    <div className="main reverseColumn" style={{ backgroundColor: "#DDDDDD" }}>
      <div className="birthLeftDiv">
        <div className="birthDayText">Birthday Bash</div>
        <p className="birthTextContent"> Hosted by Elysia</p>
        <div className="dateContent">
          <EventsButto
            SVGComponent={Calendar}
            title="18 August 6:00 PM"
            subTitle={
              <>
                <div className="dateTextContent"> {" to "} </div>
                <div className="dateTextContent" style={{ fontWeight: "bold" }}>
                  {" "}
                  19 August 1:00PM{" "}
                </div>
                <div className="dateTextContent"> UTC +10 </div>
              </>
            }
          />
          <EventsButto
            SVGComponent={Location}
            title="Street name"
            subTitle={
              <div className="dateTextContent"> Suburb, State, Postcode </div>
            }
          />
        </div>
      </div>
      <div className="rightDiv">
        <img
          style={{ width: "500px", height: "500px", resizeMode: "center" }}
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221003T185717Z&X-Amz-Expires=86400&X-Amz-Signature=21b0c93f0c6ca054a026ba61449b94300fe5fbace545cb7fdb8a35afc32fd720&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject"
        />
      </div>
    </div>
  );
}

export default Event;
