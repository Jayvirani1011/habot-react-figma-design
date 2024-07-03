import PropTypes from 'prop-types';

export const Colors = {
  WHITE: "bg-white",
  LIGHT_BLUE: "bg-lightblue",
};

export const Card = ({ image, title, color }) => {
  return (
    <div
      className={`${color} flex flex-col items-center justify-start py-[42px] px-[32px] gap-[24px] text-center  text-black font-poppins`}
    >
      <div className="h-[75px] w-[75px] overflow-hidden">
        <img
          className="h-full w-full object-contain"
          loading="lazy"
          alt=""
          src={image}
        />
      </div>
      <h5 className="m-0  font-medium">
        {title}
      </h5>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.oneOf([Colors.WHITE, Colors.LIGHT_BLUE]).isRequired,
};
