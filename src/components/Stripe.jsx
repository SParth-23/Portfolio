import React from "react";

function Stripe({ val }) {
  return (
    <div className="w-[20%] flex justify-center py-6 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600">
          <a href={val.ID} target="_blank">
          <img className="h-12 object-contain" src={val.URL} alt="Description of Image"/>
        </a>
    </div>
  );
}

export default Stripe;
