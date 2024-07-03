import PropTypes from "prop-types";

export const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`mr-[-1px] self-stretch bg-darkslategray-200 flex flex-row items-start justify-center pt-[43px] pb-[34px] pr-5 pl-[21px] box-border max-w-full text-left text-sm text-white font-inter ${className}`}
    >
      <div className="w-[1200px] box-border flex flex-row items-start justify-between pt-6 pb-[11px] pr-0 pl-[26px] max-w-full gap-[20px] border-t-[1px] border-solid border-gray-200 border-b-[1px] mq1050:flex-wrap mq1050:justify-center mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
        <div className="w-[747px] flex flex-row items-start justify-start [row-gap:20px] max-w-full mq750:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-[19px] px-0 pb-0 box-border min-w-[388px] max-w-full mq750:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start pt-3.5 pb-1 pr-5 pl-[260px] relative gap-[3px] mq450:pl-5 mq450:box-border">
                <div className="w-[276px] !m-[0] absolute top-[-24px] right-[62px] flex flex-row items-start justify-start pt-[5px] pb-0 pr-0.5 pl-[139px] box-border gap-[5.6px] text-base-1 font-arial">
                  <b className="ml-[-140px] w-[134.4px] relative leading-[24px] flex items-center shrink-0 z-[2]">
                    Company
                  </b>
                  <b className="w-[134.4px] relative leading-[24px] flex items-center shrink-0 z-[2]">
                    Terms
                  </b>
                </div>
                <img
                  className="w-[calc(100%_-_184.9px)] h-full absolute !m-[0] top-[0px] right-[184.9px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                  loading="lazy"
                  alt=""
                  src="/assets/icons/habot-icon.svg"
                />
                <a className="[text-decoration:none] w-[140px] relative leading-[22px] font-light text-[inherit] flex items-center z-[2]">
                  About
                </a>
                <div className="w-[140px] relative leading-[22px] font-light flex items-center z-[2]">
                  FAQ
                </div>
                <a className="[text-decoration:none] w-[150px] absolute !m-[0] right-[47px] bottom-[1px] leading-[25px] font-light text-[inherit] flex items-center z-[2]">
                  Terms
                </a>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[9px] box-border max-w-full text-base font-poppins">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                  <div className="relative leading-[32px] font-light">
                    <p className="m-0">© R Singhania</p>
                  </div>
                  <div className="w-[197px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-sm font-inter">
                    <div className="self-stretch relative leading-[22px] font-light z-[2]">
                      Accessibility
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[199px] flex flex-col items-start justify-start gap-[10px] ml-[-49px] text-base-1 font-arial mq750:ml-0">
            <b className="w-[134.4px] relative leading-[24px] flex items-center z-[2]">
              Related
            </b>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 text-sm font-inter">
              <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
                <div className="w-[186.6px] flex flex-row items-start justify-start relative">
                  <div className="w-full absolute !m-[0] top-[0px] left-[-150px] leading-[22px] font-light flex items-center h-full z-[2]">
                    Data privacy
                  </div>
                  <div className="flex-1 relative leading-[22px] font-light z-[2]">
                    Find Buyer
                  </div>
                </div>
                <div className="self-stretch relative leading-[22px] font-light z-[2]">
                  Feedback
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-8 px-0 pb-0">
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <img
              className="h-10 w-10 relative rounded-xl min-h-[40px]"
              loading="lazy"
              alt=""
              src="/assets/icons/item--link--linkedin.svg"
            />
            <img
              className="h-10 w-10 relative rounded-xl min-h-[40px]"
              loading="lazy"
              alt=""
              src="/assets/icons/item--link--twitter.svg"
            />
            <img
              className="h-10 w-10 relative rounded-xl min-h-[40px]"
              loading="lazy"
              alt=""
              src="/assets/icons/item--link--facebook.svg"
            />
            <img
              className="h-10 w-10 relative rounded-xl min-h-[40px]"
              loading="lazy"
              alt=""
              src="/assets/icons/item--link--instagram.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};
