import PropTypes from "prop-types";

export const Header = ({ className = "" }) => {
  return (
    <header
      className={`mr-[-204px] w-[1920px] shadow-[0px_9px_26px_rgba(115,_115,_115,_0.1)] bg-white flex flex-row items-end justify-center py-[18px] pr-5 pl-[46px] box-border gap-[678.4px] top-[0] z-[99] sticky max-w-[127%] shrink-0 text-left text-base-3 text-dimgray font-poppins mq450:gap-[85px] mq750:w-[1408.1px] mq750:gap-[170px] mq1225:gap-[339px] mq1225:pl-[23px] mq1225:box-border ${className}`}
    >
      <img
        className="h-[43px] w-[181px] relative object-contain"
        loading="lazy"
        alt=""
        src="/assets/images/habot-logo.png"
      />
      <div className="w-[511.9px] flex flex-row items-start justify-start gap-[28.6px] max-w-full mq750:hidden">
        <div className="flex flex-col items-start justify-start pt-[13px] pb-0 pr-1.5 pl-0">
          <a className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[111px] whitespace-nowrap">
            Find Suppliers
          </a>
        </div>
        <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0 text-mini-3">
          <div className="flex flex-row items-start justify-start gap-[4.2px]">
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[124px] whitespace-nowrap">
              Find Service Tags
            </a>
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-4 h-4 relative overflow-hidden shrink-0 object-contain"
                alt=""
                src="/assets/icons/down-arrow.svg"
              />
            </div>
          </div>
        </div>
        <button className="cursor-pointer px-[8px] py-[12px] bg-[transparent] flex-1 rounded-8xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-darkgreen hover:bg-mediumseagreen-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-mediumseagreen-100">
          <a className="[text-decoration:none] flex-1 relative text-mini leading-[24px] font-bold font-inter text-darkgreen text-center">
            Login / Sign Up
          </a>
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};
