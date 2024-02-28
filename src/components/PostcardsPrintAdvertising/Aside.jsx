import React from "react";
import { asidePostcardsData } from "../../constants";

const Aside = () => {
  return (
    <>
      <section className="xl:flex hidden w-full max-w-[330px] h-full">
        <div className="border inter px-3 py-3 border-[#CACACA] bg-white rounded-2xl lg:mb-[-34rem] z-10 ml-2">
          <h1 className="font-bold border-b-2 px-3 text-[18px] leading-loose">
            Postcards & Print Advertising
          </h1>
          <div className="px-3">
            {asidePostcardsData.map((categoryData, index) => (
              <div key={index}>
                <h1 className="font-semibold text-[17px] leading-loose pt-3">
                  {categoryData.category}
                </h1>
                <ul className="py-2 leading-relaxed">
                  {categoryData.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="hover:font-medium transition-colors cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Aside;
