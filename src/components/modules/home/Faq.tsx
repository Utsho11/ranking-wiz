"use client";
import { Image } from "@nextui-org/image";
import { useState } from "react";

import faqs from "./data/faq.json";

const Faq = () => {
  //   console.log(faqs);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="my-16">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Some Frequently Ask <br />{" "}
        <span className="text-[#BA68C8]">Questions</span>
      </h1>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6">
        <div className="w-full lg:w-1/2">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b">
              <button
                className="w-full text-left px-4 py-3 font-semibold text-lg focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
              </button>
              <div
                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-[200px]" : "max-h-0"
                }`}
              >
                <div className="px-4 py-3 text-gray-600">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            isBlurred
            alt="Web Development Services"
            className="rounded-lg"
            height={400}
            src="/Faq.png"
            width={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
