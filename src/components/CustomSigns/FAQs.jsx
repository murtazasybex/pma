import React from "react";
import { customsignsFaqs } from "../../constants";

const FAQs = () => {
  return (
    <>
      <section className="container px-5 mx-auto w-full max-w-[1024px]">
        <h1 className="font-bold text-[28px] inter">
          Frequently Asked Questions
        </h1>
        {customsignsFaqs.map((faq, index) => (
          <div key={index} className="py-8 border-b-2">
            <div className="flex justify-between">
              <h1 className="font-bold text-[17px] inter pb-5">
                {faq.question}
              </h1>
            </div>
            <div className="space-y-5">
              {faq.answer.map((paragraph, idx) => (
                <p key={idx} className="inter text-[17px]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default FAQs;
