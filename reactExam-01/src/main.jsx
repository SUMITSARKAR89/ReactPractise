import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./responsive.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <section>
      {/* 01- =========== card one  */}
      <div>
        <h3 className="cardTitle">card one</h3>
        <p className="cardDecs">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod cumque
          blanditiis obcaecati quos aliquam sit alias sapiente voluptates hic
          odio error, tempore consequatur saepe nemo debitis quia minus sequi
          illum.
        </p>
        <ul className="cardList">
          <li className="list">btn-1</li>
          <li className="list">btn-2</li>
          <li className="list">btn-2</li>
        </ul>
        <a href="#" className="link">
          see more
        </a>
        <p className="cardFooter">thank to read</p>
      </div>
    </section>
    <section>
      <div className="card-container">
        <div className="cards">
          <h3 className="cardTitle">card one</h3>
          <img
            src="https://plus.unsplash.com/premium_photo-1756143417932-28719fc78d97?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <p className="cardDecs" style={{ fontSize: "1rem" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            cumque blanditiis obcaecati quos aliquam sit alias sapiente
            voluptates hic odio error, tempore consequatur saepe nemo debitis
            quia minus sequi illum.
          </p>
          <ul className="cardList">
            <li className="list">Buy now</li>
          </ul>
          <a href="#" className="link">
            see more
          </a>
          <p className="cardFooter">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="cards">
          <h3 className="cardTitle">card two</h3>
          <img
            src="https://plus.unsplash.com/premium_photo-1695604461277-fa3f0d46da6c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <p className="cardDecs" style={{ fontSize: "1rem" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            cumque blanditiis obcaecati quos aliquam sit alias sapiente
            voluptates hic odio error, tempore consequatur saepe nemo debitis
            quia minus sequi illum.
          </p>
          <ul className="cardList">
            <li className="list">Buy now</li>
          </ul>
          <a href="#" className="link">
            see more
          </a>
          <p className="cardFooter">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </section>
  </StrictMode>
);
