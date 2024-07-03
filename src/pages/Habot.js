
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { HowToWork } from '../components/HowToWork'
import { SignUp } from "../components/SignUp";
import { SupplierBenefits } from "../components/SupplierBenefits";
import { VideoBuyer } from "../components/VideoBuyer";

const Habot = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[9px] box-border gap-[124px] leading-[normal] tracking-[normal] mq450:gap-[15px] mq750:gap-[31px] mq1225:gap-[62px]">
      <Header />
      <img
        className="w-full h-[609px] absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/assets/images/backgroung-image.png"
      />
      <Input />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-5 box-border max-w-full">
        <div className="w-[1316px] flex flex-col items-end justify-start gap-[119px] max-w-full mq450:gap-[30px] mq750:gap-[59px]">
          <SignUp />
          <VideoBuyer />
        </div>
      </section>
      <SupplierBenefits />
      <HowToWork />
      <Footer />
    </div>
  );
};

export default Habot;
