import React from "react";

import { Img, Text } from "components";

type MacBookAirTwoMenuitemProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "searchicon" | "titleOne"
> &
  Partial<{ searchicon: string; titleOne: string }>;

const MacBookAirTwoMenuitem: React.FC<MacBookAirTwoMenuitemProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start p-2 w-10">
          <Img className="h-6 w-6" alt="search" src={props?.searchicon} />
        </div>
        <Text
          className="text-base text-white-A700_90 w-auto"
          size="txtInterMedium16WhiteA70090"
        >
          {props?.titleOne}
        </Text>
      </div>
    </>
  );
};

MacBookAirTwoMenuitem.defaultProps = {
  searchicon: "images/img_search.svg",
  titleOne: "Search",
};

export default MacBookAirTwoMenuitem;
