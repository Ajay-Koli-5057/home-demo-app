import React, { useState } from "react";

import { Img, Input, Text } from "components";
import MacBookAirTwoMenuitem from "components/MacBookAirTwoMenuitem";

const Home1Page: React.FC = () => {

  const [ isVisible, setIsVisible ] = useState(true)
  const handleCloseClick = () => {
    setIsVisible(!isVisible)
    setTimeout(() => {
      setIsVisible(true)  
    }, 1000)
  }

  return (
    <>
      <div
        className={`bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[832px] items-center justify-start mx-auto p-[296px] md:px-10 sm:px-5 w-full`}
        style={{ backgroundImage: "url('images/img_macbookairtwo.png')" }}
      >
        <div className={`bg-gradient  border border-solid flex flex-col gap-1 h-60 md:h-auto items-start justify-start p-4 md:px-5 rounded-[24px] w-60 white_A700_white_A700_00_border ${isVisible?'fadeIn':'fadeOut'}`}>
          <div className="flex flex-row gap-1 items-center justify-between px-3 py-1 w-full">
            <Text
              className="text-base text-white-A700 w-auto"
              size="txtInterMedium16"
            >
              Menu
            </Text>
            <Img
              className="h-6 w-6"
              src="images/img_arrowright.svg"
              alt="arrowright"
              onClick={handleCloseClick}
            />
          </div>
          <MacBookAirTwoMenuitem className="menu-item flex flex-row gap-4 items-center justify-start rounded-[20px] w-52" />
          <MacBookAirTwoMenuitem
            className="menu-item flex flex-row gap-4 items-center justify-start rounded-[20px] w-52"
            searchicon="images/img_home.svg"
            titleOne="Home"
          />
          <MacBookAirTwoMenuitem
            className="menu-item flex flex-row gap-4 items-center justify-start rounded-[20px] w-52"
            searchicon="images/img_icon.svg"
            titleOne="Notifications"
          />
          <MacBookAirTwoMenuitem
            className="menu-item flex flex-row gap-4 items-center justify-start rounded-[20px] w-52"
            searchicon="images/img_airplane.svg"
            titleOne="Favorites"
          />
        </div>
      </div>
    </>
  );
};

export default Home1Page;
