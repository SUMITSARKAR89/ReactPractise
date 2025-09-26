import React, { useState } from "react";
const demo = `
onScroll → scroll container detect করে scroll position দেখাবে।
onResize → শুধু React component এর ভেতরে নয়, পুরো window resize detect করবে।
`;

export default function Scroll() {
  const [scrollPos, setScrollPos] = useState(0);
  const handleScroll = (e) => {
    setScrollPos(e.target.scrollTop)
  }
  return (
    <div className="handlerCard">
      <div className="titleCard">
        <h1>10.Scroll / UI Events → </h1>
        <p style={{ color: "yellow" }}>onScroll, onResize, etc.</p>
        <pre>{demo}</pre>
      </div>
      <div className="container">
        <div className="example">
          <h3>1. Scroll position</h3> <br />
          <div
            onScroll={handleScroll}
            style={{
              border: "2px solid gray",
              width: "300px",
              height: "150px",
              overflowY: "scroll", // scrollable করলাম
              padding: "10px",
            }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              viverra justo eget sapien dictum, nec condimentum libero
              consequat. Suspendisse id semper magna. Nulla facilisi. Quisque
              vitae arcu bibendum, malesuada ipsum at, convallis nisi. Sed
              posuere ligula ac nunc bibendum.
            </p>
            <p>
              Fusce sodales eros vel sem elementum, vel lacinia lorem fringilla.
              Integer sed felis sit amet dolor varius vulputate. Mauris in dui
              ut nibh venenatis tincidunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              viverra justo eget sapien dictum, nec condimentum libero
              consequat. Suspendisse id semper magna. Nulla facilisi. Quisque
              vitae arcu bibendum, malesuada ipsum at, convallis nisi. Sed
              posuere ligula ac nunc bibendum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              viverra justo eget sapien dictum, nec condimentum libero
              consequat. Suspendisse id semper magna. Nulla facilisi. Quisque
              vitae arcu bibendum, malesuada ipsum at, convallis nisi. Sed
              posuere ligula ac nunc bibendum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              viverra justo eget sapien dictum, nec condimentum libero
              consequat. Suspendisse id semper magna. Nulla facilisi. Quisque
              vitae arcu bibendum, malesuada ipsum at, convallis nisi. Sed
              posuere ligula ac nunc bibendum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              viverra justo eget sapien dictum, nec condimentum libero
              consequat. Suspendisse id semper magna. Nulla facilisi. Quisque
              vitae arcu bibendum, malesuada ipsum at, convallis nisi. Sed
              posuere ligula ac nunc bibendum.
            </p>
          </div>
          <p>📌 Current Scroll Position: {scrollPos}px</p>
        </div>
      </div>
    </div>
  );
}
