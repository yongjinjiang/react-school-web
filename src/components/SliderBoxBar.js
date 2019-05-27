import React, { useState } from "react";
import ResizeObserver from "react-resize-observer";
import "./style/SliderBoxBar.scss";
const images = [
  {
    imageUrl: "https://dummyimage.com/250x250/000/fff"
  },
  {
    imageUrl: "https://dummyimage.com/250x250/000/fff"
  },
  {
    imageUrl: "https://dummyimage.com/250x250/000/fff"
  },
  {
    imageUrl: "https://dummyimage.com/250x250/000/fff"
  },
  {
    imageUrl: "https://dummyimage.com/250x250/000/fff"
  },
  {
    imageUrl: "https://dummyimage.com/250x250/000/fff"
  },
  {
    imageUrl: "https://dummyimage.com/250x250/000/fff"
  },
  {
    imageUrl: "https://dummyimage.com/250x250/000/fff"
  },
  {
    imageUrl: "https://dummyimage.com/250x250/000/fff"
  },
  {
    imageUrl: "https://dummyimage.com/250x250/000/fff"
  },
  {
    imageUrl: "https://dummyimage.com/250x250/000/fff"
  },
  {
    imageUrl: "https://dummyimage.com/250x250/000/fff"
  }
];

const SliderBoxBar = () => {
  const [width, setWidth] = useState(250);

  return (
    <div className="containerBar" style={{ height: width, overflow:"hidden" }}>
      <ResizeObserver
        onResize={rect => {
          let boxWanted = Math.round(rect.width / 250);
          if(rect.width < 600){
            boxWanted=4;
          }
          let widthOfBoxes = rect.width / boxWanted;
          setWidth(widthOfBoxes);
        }}
      />
      {images.map(image => (
        <img
          alt="dumb alt"
          key={Math.random()}
          width={width}
          src={image.imageUrl}
        />
      ))}
    </div>
  );
};

export default SliderBoxBar;
