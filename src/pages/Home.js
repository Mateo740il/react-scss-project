import React from "react";
import homeImage from "../images/homePageImage.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home__headline">
        <h1>
          This is <span className="home__headline__green">Lorem ipsum</span>
        </h1>
        <p>
          <span className='home__headline__green'>Lorem Ipsum </span>is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <button className="primaryBtn">Read more</button>
      </div>
      <img className="home__image" src={homeImage} alt="home illustartion" />
    </div>
  );
};

export default Home;
