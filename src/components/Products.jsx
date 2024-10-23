import React, { useState } from "react";
import Product from "./Product";
import { color, easeIn, motion } from "framer-motion";

function Products() {
  var prod = [
    {
      title: "Chatting Application",
      description:
        "A Socket.IO chat app uses WebSockets for real-time communication, connecting clients to a Node.js server for instant, synchronized message delivery.",
      live: true,
      case: false,
      color: "hover:bg-slate-500",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with ReactJS & Framer Motion offers a dynamic, responsive experience, using smooth animations & transitions to showcase projects & skills interactively.",
      live: true,
      case: false,
      color: "hover:bg-indigo-600",
    },
    {
      title: "Cultural Heritage & Museum",
      description:
        "A museum website built with React provides an interactive, user-friendly experience for exploring exhibits & events, featuring dynamic content & smooth navigation to enhance visitor engagement.",
      live: true,
      case: false,
      color: "hover:bg-purple-600",
    },
    {
      title: "Netflix-Clone",
      description:
        "A Netflix clone developed with HTML & CSS replicates the streaming interface, offering a polished layout for browsing static movie & TV show content.",
      live: true,
      case: false,
      color: "hover:bg-red-600",
    },
    {
      title: "QR Code Generator",
      description:
        "A QR Code generator for links and texts, created with HTML, CSS & JavaScript, enables real-time generation of customizable scannable codes for easy access to URLs or text.",
      live: true,
      case: false,
      color: "hover:bg-blue-600",
    },
    {
      title: "Store Sales Dashboard",
      description:
        "A Power BI dashboard for a superstore sales analysis visualizes key metrics and trends, providing insights into sales performance, inventory levels, and customer behavior through interactive charts and reports.",
      live: true,
      case: false,
      color: "hover:bg-violet-800",
    },
    {
      title: "Covid Death Dashboard",
      description:
        "A Power BI dashboard for COVID-19 deaths offers professional visualizations of mortality trends, demographic insights, and geographic distributions, facilitating data-driven decision-making and comprehensive analysis of the pandemic's impact.",
      live: true,
      case: false,
      color: "hover:bg-red-700",
    },
    {
      title: "Framer Motion Elements",
      description:
        "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our br&, & more.",
      live: true,
      case: false,
      color: "hover:bg-green-800",
    },
    {
      title: "Gradlers UI Design",
      description:
        "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our br&, & more.",
      live: true,
      case: false,
      color: "hover:bg-orange-600",
    },
    {
      title: "Aistear Unica UI Design",
      description:
        "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our br&, & more.",
      live: true,
      case: false,
      color: "hover:bg-pink-500",
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };
  return (
    <div className="relative">
      {prod.map((val, index) => {
        return <Product mover={mover} count={index} val={val} />;
      })}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "80%" }}
          animate={{ y: pos + `rem` }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="absolute w-[23rem] h-[23.4rem] bg-transparent
           rounded-sm overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="w-full h-full rounded-sm"
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <video muted autoPlay loop src="src\assets\vid-1.webm"></video>
          </motion.div>

          <motion.div
            animate={{ y: -pos + `rem` }}
            className="w-full h-full rounded-sm"
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <video muted autoPlay loop src="src\assets\vid-2.webm"></video>
          </motion.div>

          <motion.div
            animate={{ y: -pos + `rem` }}
            className="w-full h-full rounded-sm"
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <video muted autoPlay loop src="src\assets\vid-3.webm"></video>
          </motion.div>

          <motion.div
            animate={{ y: -pos + `rem` }}
            className="w-full h-full rounded-sm"
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <video muted autoPlay loop src="src\assets\vid-4.webm"></video>
          </motion.div>

          <motion.div
            animate={{ y: -pos + `rem` }}
            className="w-full h-full rounded-sm"
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <video muted autoPlay loop src="src\assets\vid-5.webm"></video>
          </motion.div>

          <motion.div
            animate={{ y: -pos + `rem` }}
            className="w-full h-full rounded-sm"
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <video muted autoPlay loop src="src\assets\vid-6.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="w-full h-full rounded-sm"
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <video muted autoPlay loop src="src\assets\vid-6.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="w-full h-full rounded-sm"
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <video muted autoPlay loop src="src\assets\vid-6.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="w-full h-full rounded-sm"
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <video muted autoPlay loop src="src\assets\vid-6.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="w-full h-full rounded-sm"
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <video muted autoPlay loop src="src\assets\vid-6.webm"></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
