import PropTypes from "prop-types";

export const SupplierBenefits = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-3.5 box-border max-w-full text-left text-18xl-3 text-black font-poppins ${className}`}
    >
      <div className="flex-1 bg-azure overflow-hidden flex flex-row items-end justify-between pt-[39px] pb-[93px] pr-[236px] pl-[166px] box-border max-w-full gap-[20px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[83px] mq750:pr-[118px] mq750:box-border mq1225:flex-wrap mq1225:justify-center">
        <div className="w-[563px] flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border min-w-[563px] max-w-full mq1050:min-w-full mq1225:flex-1">
          <div className="self-stretch h-[118px] relative max-w-full">
            <div className="absolute top-[68px] left-[0px] w-full flex flex-col items-start justify-start gap-[6px] max-w-full">
              <div className="self-stretch relative leading-[40px] font-semibold mq450:text-3xl mq450:leading-[24px] mq750:text-11xl mq750:leading-[32px]">
                Let Suppliers Find You
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[120px] mq450:pl-5 mq450:box-border">
                <div className="h-1 w-[159px] relative bg-coral" />
              </div>
            </div>
            <div className="absolute top-[0px] left-[529px] w-[57px] h-[57px] overflow-hidden [transform:_rotate(90deg)] [transform-origin:0_0]" />
          </div>
        </div>
        <button className="cursor-pointer [border:none] pt-[19px] px-[52px] pb-[11px] bg-coral w-[216px] rounded-8xs overflow-hidden shrink-0 flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-tomato">
          <b className="flex-1 relative text-lg leading-[24px] inline-block font-poppins text-white text-center min-w-[112px]">
            Get Verified
          </b>
        </button>
      </div>
    </section>
  );
};

SupplierBenefits.propTypes = {
  className: PropTypes.string,
};

