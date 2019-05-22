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
          let s = Math.round(rect.width / 250);
          let x = rect.width / s;
          setWidth(x);
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
