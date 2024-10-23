import React, { useState } from "react";
import { useScroll } from "framer-motion";

function Work() {
  const [images, setImages] = useState([
    {
      url: "https://external-preview.redd.it/java-22-launch-event-v0-VKfyXB99AEiHiPvIbK-vLRHcejGsT7-_XARIBlJwh38.jpg?auto=webp&s=0839fef377ec7e8428306c5b174bbab8ed470b4a",
      top: "6%",
      left: "46%",
      isActive: false,
    },
    {
      url: "https://www.docker.com/wp-content/uploads/2023/08/logo-guide-logos-2.svg",
      top: "7.5%",
      left: "54%",
      isActive: false,
    },
    {
      url: "https://spin.atomicobject.com/wp-content/uploads/Figma-Image.jpg",
      top: "6.5%",
      left: "48%",
      isActive: false,
    },
    {
      url: "https://ml2quantum.com/wp-content/uploads/2020/05/Microsoft-Power-BI-Symbol.png",
      top: "8%",
      left: "43%",
      isActive: false,
    },
    {
      url: "https://images.prismic.io/toyfight/65e1e07d27237c2bb829b9dc_GSAP-Meta-image.jpg?auto=format%2Ccompress&rect=0%2C0%2C2400%2C1260&w=2400&h=1260",
      top: "9%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
      top: "8.5%",
      left: "54%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }
    const scrollIndex = Math.floor(data * 100); // Use 6 for better optimization
    const activeImageIndexes = Array.from(
      { length: scrollIndex + 1 },
      (_, i) => i
    );

    imagesShow(activeImageIndexes);
  });

  return (
    <div className="w-full h-[80vh]">
      <div className="relative text-center pt-52 max-w-screen-xl mx-auto">
        <h1 className="text-[14vw] leading-none font-medium  tracking-tight">
          Hello World!!!
        </h1>
      
      </div>
      <div className="top-0 w-full h-full absolute">
        {images.map(
          (elem, index) =>
            elem.isActive && (
              <img
                key={index}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-52 h-52 object-cover rounded-lg"
                src={elem.url}
                style={{ top: elem.top, left: elem.left }}
                alt=""
              />
            )
        )}
      </div>
    </div>
  );
}

export default Work;
