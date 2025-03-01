import React from "react";
import { FaClockRotateLeft, FaWallet } from "react-icons/fa6";
import { GoRocket } from "react-icons/go";
import { PiChats } from "react-icons/pi";
import Container from "./Container";

const data = [
  {
    title: "Free delivery",
    description: "When ordering above $500",
    icon: <GoRocket />,
  },
  {
    title: "90 Days Return",
    description: "If goods have problems",
    icon: <FaClockRotateLeft />,
  },
  {
    title: "Secure Payment",
    description: "100% secure payment",
    icon: <FaWallet />,
  },
  {
    title: "24/7 Support",
    description: "Dedicated support",
    icon: <PiChats />,
  },
];

const Facilities = () => {
  return (
    <Container>
      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {data?.map((item) => (
          <div
            key={item?.title}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <span className="text-3xl text-lightOrange">{item?.icon}</span>
            <div className="text-center">
              <h2 className="uppercase font-bold">{item?.title}</h2>
              <p className="text-sm text-lightText">{item?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Facilities;
