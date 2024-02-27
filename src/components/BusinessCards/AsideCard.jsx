import React from "react";
import { cardData } from "../../constants";

const AsideCard = () => {
  return (
    <>
      <div className="border border-[#CACACA] bg-white w-full max-w-[300px] h-full rounded-2xl lg:mb-[-64rem]">
        <div className="inter p-5">
          {cardData.map((categoryData, index) => (
            <div key={index}>
              <h1 className="font-bold border-b text-[18px] leading-loose">
                {categoryData.category}
              </h1>
              <ul className="py-2 border-b leading-relaxed">
                {categoryData.items.map((item, idx) => (
                  <li key={idx} className="hover:font-bold cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AsideCard;
