import PropTypes from "prop-types";
import "./SignUp.css"

export const SignUp = ({ className = "" }) => {
  return (
    <div className={`self-stretch flex flex-row items-start justify-end py-0 pr-px pl-1 box-border max-w-full text-left text-18xl-3 text-black font-poppins ${className}`}>
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1225:flex-wrap">
        <div className="w-[624px] flex flex-col items-start justify-start gap-[45px] min-w-[624px] max-w-full mq750:gap-[22px] mq750:min-w-full mq1225:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[35px] max-w-full mq750:gap-[17px]">
            <b className="w-[563px] relative leading-[40px] flex items-center max-w-full mq450:text-3xl mq450:leading-[24px] mq750:text-11xl mq750:leading-[32px]">
              <span className="w-full">
                <span>{`Ready to dive into `}</span>
                <span className="text-midnightblue">HABOT?</span>
              </span>
            </b>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full text-mid-2">
              <div className="flex-1 relative leading-[28px] font-light inline-block max-w-full">
                Signing up with HABOT opens the door to a world of new
                opportunities and potential for business growth. Gain access to
                a vibrant community of like-minded individuals, unlock valuable
                resources, and take the first step towards realizing your
                entrepreneurial dreams.
              </div>
            </div>
          </div>
          {/* pt-[17px] pb-[9px] pr-[27px] pl-[43px] */}
          <button className="cursor-pointer px-[12px] py-[10px] bg-darkgreen w-[317px] rounded-8xs box-border overflow-hidden flex flex-row items-center justify-center gap-[9.4px] border-[1px] border-solid border-darkgreen mq450:pl-5 mq450:box-border">
            <b className=" relative text-lg leading-[24px] font-poppins text-white text-center">
              Sign up Today !
            </b>
            <img className="w-8 h-[16.1px] ml-[4px] relative z-[1] md:inline" alt="" src="/assets/icons/arrow.svg" />
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            </div>
          </button>
        </div>
        <div className="w-[541px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border min-w-[541px] max-w-full text-center text-lg-8 text-darkslategray-100 font-inter mq750:min-w-full mq1225:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24.5px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[21px] mq750:flex-wrap">
              <div className="hover-effect cursor-pointer flex-1 rounded-8xs bg-white box-border flex flex-row items-start justify-start pt-[15px] px-0 pb-3.5 min-w-[169px] whitespace-nowrap border-[1px] border-solid border-chocolate transition-all duration-300 hover:bg-chocolate hover:text-white hover:border-transparent">
                <div className="flex-1 relative leading-[32px] font-medium">
                  Abu Dhabi <img className="w-8 h-[16.1px] ml-[4px] relative z-[1] hidden md:inline" alt="" src="/assets/icons/arrow.svg" />
                </div>
              </div>
              <div className="hover-effect cursor-pointer flex-1 rounded-8xs bg-white box-border flex flex-row items-start justify-start pt-[15px] px-0 pb-3.5 min-w-[169px] border-[1px] border-solid border-chocolate transition-all duration-300 hover:bg-chocolate hover:text-white hover:border-transparent">
                <div className="flex-1 relative leading-[32px] font-medium">
                  Dubai <img className="w-8 h-[16.1px] ml-[4px] relative z-[1] hidden md:inline" alt="" src="/assets/icons/arrow.svg" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[21px] mq750:flex-wrap">
              <div className="hover-effect cursor-pointer flex-1 rounded-8xs bg-white box-border flex flex-row items-start justify-start pt-[15px] px-0 pb-3.5 min-w-[169px] whitespace-nowrap border-[1px] border-solid border-chocolate transition-all duration-300 hover:bg-chocolate hover:text-white hover:border-transparent">
                <div className="flex-1 relative leading-[32px] font-medium">
                  Sharjah & Ajman <img className="w-8 h-[16.1px] ml-[4px] relative z-[1] hidden md:inline" alt="" src="/assets/icons/arrow.svg" />
                </div>
              </div>
              <div className="hover-effect cursor-pointer flex-1 rounded-8xs bg-white box-border flex flex-row items-start justify-start pt-[15px] px-0 pb-3.5 min-w-[169px] border-[1px] border-solid border-chocolate transition-all duration-300 hover:bg-chocolate hover:text-white hover:border-transparent">
                <div className="flex-1 relative leading-[32px] font-medium">
                  Fujairah <img className="w-8 h-[16.1px] ml-[4px] relative z-[1] hidden md:inline" alt="" src="/assets/icons/arrow.svg" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[21px] mq750:flex-wrap">
              <div className="hover-effect cursor-pointer flex-1 rounded-8xs bg-white box-border flex flex-row items-start justify-start pt-[15px] px-0 pb-3.5 min-w-[169px] whitespace-nowrap border-[1px] border-solid border-chocolate transition-all duration-300 hover:bg-chocolate hover:text-white hover:border-transparent">
                <div className="flex-1 relative leading-[32px] font-medium">
                  Ras Al Khaimah <img className="w-8 h-[16.1px] ml-[4px] relative z-[1] hidden md:inline" alt="" src="/assets/icons/arrow.svg" />
                </div>
              </div>
              <div className="hover-effect cursor-pointer flex-1 rounded-8xs bg-white box-border flex flex-row items-start justify-start pt-[15px] px-0 pb-3.5 min-w-[169px] whitespace-nowrap border-[1px] border-solid border-chocolate transition-all duration-300 hover:bg-chocolate hover:text-white hover:border-transparent">
                <div className="flex-1 relative leading-[32px] font-medium">
                  Umm Al Quwain <img className="w-8 h-[16.1px] ml-[4px] relative z-[1] hidden md:inline" alt="" src="/assets/icons/arrow.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  className: PropTypes.string,
};

export default SignUp;
