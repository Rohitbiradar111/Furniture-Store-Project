import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Slider = React.forwardRef(({ items = [], ...props }, ref) => {
  return (
    <AliceCarousel
      ref={ref}
      items={items}
      mouseTracking
      infinite
      disableButtonsControls
      {...props}
    />
  );
});

export default Slider;
