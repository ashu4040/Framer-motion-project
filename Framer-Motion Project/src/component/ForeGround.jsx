import React, { useRef } from "react";
import Card from "./Card";

const ForeGround = () => {
  const ref = useRef(null);

  const data = [
    {
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing gggggggggggggggggg",
      filesize: ".9mb",
      close: "true",
    },
    {
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing lorem chckhc ckckc",
      filesize: ".6mb",
      close: "false",
    },
    {
      details: "Lorem, ipsum dolor sit amet consectetur adipisicing",
      filesize: ".3mb",
      close: "true",
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5"
    >
      {data.map((items, index) => (
        <Card data={items} reference={ref} />
      ))}
    </div>
  );
};

export default ForeGround;
