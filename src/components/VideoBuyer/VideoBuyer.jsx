import PropTypes from "prop-types";
import { useState } from "react";

export const VideoBuyer = ({ className = "" }) => {
  const [selectedRole, setSelectedRole] = useState("buyer");

  const handleRoleClick = (role) => {
    setSelectedRole(role);
  };

  return (
    <div
      className={`self-stretch rounded-8xs bg-darkslateblue overflow-hidden flex flex-row items-start justify-start pt-[137px] pb-[136px] pr-[50px] pl-[72px] box-border gap-[65px] max-w-full text-left text-7xl text-coral font-poppins mq450:gap-[16px] mq750:gap-[32px] mq750:pt-[89px] mq750:pb-[88px] mq750:box-border mq1225:flex-wrap mq1225:pl-9 mq1225:pr-[25px] mq1225:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start relative min-w-[416px] max-w-full mq750:min-w-full">
        <img
          className="h-[350px] flex-1 relative rounded-8xs max-w-full overflow-hidden object-cover"
          alt=""
          src="/assets/images/requirements.png"
        />
        <div className="h-[75.2px] w-[106.3px] absolute !m-[0] top-[137px] right-[266.7px] z-[1]">
          <div className="absolute top-[17.5px] left-[19.1px] rounded-8xs bg-white w-[53.7px] h-[40.1px]" />
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full z-[1]"
            loading="lazy"
            alt=""
            src="/assets/icons/item--link--youtube.svg"
          />
        </div>
      </div>
      <div className="w-[489px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border min-w-[489px] max-w-full mq750:min-w-full mq1225:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
          <div className="w-[402px] flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
            <div
              className={`w-[225px] flex flex-col items-start justify-start gap-[11px] cursor-pointer ${
                selectedRole === "buyer" ? "text-coral" : "text-white"
              }`}
              onClick={() => handleRoleClick("buyer")}
            >
              <div className="flex flex-row items-start justify-start py-0 pr-[63px] pl-[60px]">
                <h2 className="m-0 relative text-inherit leading-[32px] font-bold font-inherit inline-block min-w-[79px] mq450:text-2xl mq450:leading-[26px]">
                  Buyer
                </h2>
              </div>
              {selectedRole === "buyer" && (
                <div className="self-stretch h-1 relative rounded-12xs bg-coral" />
              )}
            </div>
            <div
              className={`w-[225px] flex flex-col items-start justify-start gap-[11px] cursor-pointer ${
                selectedRole === "supplier" ? "text-coral" : "text-white"
              }`}
              onClick={() => handleRoleClick("supplier")}
            >
              <div className="flex flex-row items-start justify-start py-0 pr-[63px] pl-[60px]">
                <h2 className="m-0 relative text-inherit leading-[32px] font-bold font-inherit inline-block min-w-[79px] mq450:text-2xl mq450:leading-[26px]">
                  Supplier
                </h2>
              </div>
              {selectedRole === "supplier" && (
                <div className="self-stretch h-1 relative rounded-12xs bg-coral" />
              )}
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[10px] max-w-full text-lg-8 text-white mq750:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <img
                  className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/assets/icons/green_check.svg"
                />
                <img
                  className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/assets/icons/green_check.svg"
                />
                <img
                  className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/assets/icons/green_check.svg"
                />
              </div>
            </div>
            {selectedRole === "buyer" ? (
              <div className="flex-1 relative leading-[39px] font-medium inline-block min-w-[300px] max-w-full">
                <p className="m-0">Post your requirements.</p>
                <p className="m-0">
                  Sit back for multiple suppliers to contact you.
                </p>
                <p className="m-0">
                  Choose among the suppliers based on the ratings and reviews.
                </p>
              </div>
            ) : (
              <div className="flex-1 relative leading-[39px] font-medium inline-block min-w-[300px] max-w-full">
                <p className="m-0">Complete your profile and get verified.</p>
                <p className="m-0">
                  Select service tags for relevant opportunities.
                </p>
                <p className="m-0">
                  Reach out to buyers and expand your business.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

VideoBuyer.propTypes = {
  className: PropTypes.string,
};
