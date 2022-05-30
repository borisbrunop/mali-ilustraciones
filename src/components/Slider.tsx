import React, { useState, useEffect, useMemo, DetailedHTMLProps, HTMLAttributes } from "react";
import { Loading } from "./Loading";

interface ArrowsTypes {
    prevSlide: () => void,
    nextSlide: () => void
}

function Arrows({ prevSlide, nextSlide }: ArrowsTypes) {
  return (
    <div
    //  className="arrows w-full  h-full flex justify-between items-center absolute top-0 z-0"
     style={{height: '100%', width: '100%', justifyContent: 'space-between', display: 'flex', alignItems: 'center', position: 'absolute', top: '0', zIndex: '0'}}
     >
      <span
        style={{width: '40px', cursor: 'pointer', color: 'white', justifyContent: 'center', height: '100%', display: 'flex', alignItems: 'center'}}
        onClick={prevSlide}
      >
        &#10094;
      </span>
      <span
        style={{width: '40px', cursor: 'pointer', color: 'white', justifyContent: 'center', height: '100%', display: 'flex', alignItems: 'center'}}
        onClick={nextSlide}
      >
        &#10095;
      </span>
    </div>
  );
}
interface DostTypes {
    activeIndex: number;
    onClick: (index: number) => void;
    sliderImage: string[];
    dotStyles?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}

function Dots({ activeIndex, onClick, sliderImage, dotStyles }: DostTypes) {
  return (
    <div 
    style={{display: 'flex', justifyContent: 'center', width: '100%'}}
    >
      <div 
      style={{display: 'flex', position: 'absolute', bottom: 2, padding: '10px', borderRadius: '5px', ...dotStyles}}
      >
        {sliderImage?.map((slide, index) => (
          <span
            key={index}
            style={activeIndex === index ? 
                {backgroundColor: 'white', margin:'2px', border: '1px solid white', width: '16px', height: '16px', borderRadius: '50%', cursor: 'pointer'} 
                : 
                {border: '1px solid white', margin:'2px', width: '16px', height: '16px', borderRadius: '50%', cursor: 'pointer'}}
            onClick={() => onClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}



interface SliderContentTypes {
    activeIndex: number,
    sliderImage: string[],
    actions?: ActionsTypes[]
}

function SliderContent({ activeIndex, sliderImage, actions }: SliderContentTypes) {
  return (
    <div 
    className="relative w-full h-full"
    style={{position: "relative", width: "100%", height: '100%'}}
    >
      {sliderImage?.length !== 0 ? (
        sliderImage.map((slide, index) => (
          <div
            key={slide + index}
            className={`w-full ${
              index === activeIndex ? "relative h-full" : "hidden"
            } transition-all`}
            style={ index === activeIndex ?
                {width: "100%", position: "relative", height: "100%"}
                :
                {display: "none", width: "100%"}
            }
          >
            <img
              className="w-full h-full object-cover bg-gray-300 rounded-t-xl"
              style={{width: "100%", height: "100%", objectFit: 'cover', borderTopLeftRadius: '0.75rem',borderTopRightRadius: '0.75rem'}}
              src={slide}
              alt={slide + ' ' + index}
            />
          </div>
        ))
      ) : (
        <img
        className="w-full h-full object-cover bg-gray-300 rounded-t-xl"
        style={{width: "100%", height: "100%", objectFit: 'cover', borderTopLeftRadius: '0.75rem',borderTopRightRadius: '0.75rem'}}
        src="https://res.cloudinary.com/mali-ilustraciones/image/upload/v1653253005/sample.jpg"
        alt="sample.jpg"
      />
      )}
      {actions &&
        actions.map((item, index) => (
          <>
            <div key={index} 
            style={{position: "absolute", zIndex: 10, ...item.styles}}
            >
              {item.children}
            </div>
          </>
        ))}
    </div>
  );
}

interface ActionsTypes {
    styles: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 
    children: JSX.Element,
}

interface SliderTypes {
    styles?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 
    data: any[],
    interval?: boolean,
    arrows?: boolean,
    dots?: boolean,
    dotStyles?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    actions?: ActionsTypes[]
}

export const Slider = (props: SliderTypes) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { interval = false, data, arrows = true, actions, dotStyles, dots = true, styles } =
    props;
  const len = useMemo(() => data?.length - 1, [data]);

  useEffect(() => {
    if (interval) {
      const interval = setInterval(() => {
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [activeIndex, interval, len]);

  return (
    <div
      style={{alignItems: 'center', position: 'relative', height: '250px', overflow: "hidden", width: '100%', ...styles}}
    >
      {data ? (
        <>
          <SliderContent
            activeIndex={activeIndex}
            sliderImage={data}
            actions={actions}
          />
          {arrows && (
            <Arrows
              prevSlide={() =>
                setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
              }
              nextSlide={() =>
                setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
              }
            />
          )}
          {dots && (
            <Dots
              activeIndex={activeIndex}
              sliderImage={data}
              onClick={(activeIndex: any) => setActiveIndex(activeIndex)}
              dotStyles={dotStyles}
            />
          )}
        </>
      ) : (
        <Loading type={"simple"}/>
      )}
    </div>
  );
};
