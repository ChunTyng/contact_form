import star from '../assets/images/star.svg';
const Star = () => {
  return (
    <>
      <img
        src={star}
        alt=""
        className="w-1 filter translate-y-[7px] "
        style={{
          filter:
            'brightness(0) saturate(100%) invert(37%) sepia(15%) saturate(2886%) hue-rotate(124deg) brightness(95%) contrast(91%)',
        }}
      />
    </>
  );
};

export default Star;
