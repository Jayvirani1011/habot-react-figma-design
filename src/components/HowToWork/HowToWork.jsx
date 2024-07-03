import { Card, Colors } from "../Card";
import PropTypes from "prop-types";

export const HowToWork = ({ className = "" }) => {
  const cardData = [
    {
      img: "/assets/icons/group-add.svg",
      title: "Select Your Role and Sign Up",
      color: Colors.LIGHT_BLUE,
    },
    {
      img: "/assets/icons/document-check.svg",
      title: "Buyers Post Your Requirements",
      color: Colors.WHITE,
    },
    {
      img: "/assets/icons/document-search.svg",
      title: "Review, Select, and Contact the Best Suppliers",
      color: Colors.LIGHT_BLUE,
    },
    {
      img: "/assets/images/edit.png",
      title:
        "Suppliers Complete your profile and get notified for opportunities",
      color: Colors.WHITE,
    },
    {
      img: "/assets/icons/document-edit.svg",
      title: "Contact to Buyers and Share your Quote for the service",
      color: Colors.LIGHT_BLUE,
    },
    {
      img: "/assets/icons/group-check.svg",
      title: "Both the Parties can Connect and Make Business Leave a Feedback",
      color: Colors.WHITE,
    },
  ];
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[73px] box-border max-w-full text-center text-18xl-3 text-gray-100 font-poppins mq450:pb-[31px] mq450:box-border mq1050:pb-[47px] mq1050:box-border ${className}`}
    >
      <div className="w-[1200px] flex flex-col items-start justify-start gap-[73px] max-w-full mq750:gap-[18px] mq1225:gap-[36px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
          <div className="w-[839px] flex flex-col items-start justify-start gap-[26px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <b className="w-[287px] relative leading-[48px] flex items-center justify-center shrink-0 mq450:text-3xl mq450:leading-[29px] mq750:text-11xl mq750:leading-[38px]">
                How it works?
              </b>
            </div>
            <div className="self-stretch relative text-mid-2 leading-[26px] text-black">
              Buyers post their needs and review top suppliers, while suppliers
              complete profiles, connect with potential buyers, and build
              successful business relationships, sharing valuable feedback.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 p-4 max-w-full text-xl text-black">
          {cardData.map((data, index) => (
            <Card
              key={index}
              image={data.img}
              title={data.title}
              color={data.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

HowToWork.propTypes = {
  className: PropTypes.string,
};
