import React from "react";
import Stripe from "./Stripe";

function Stripes() {
  var data = [
    {
      URL: "https://wallpapers.com/images/hd/git-hub-logo-octocat-character-4lsy0bw5blp4xwgv-2.png",
      ID: "https://github.com/SParth-23",
    },
    {
      URL: "https://cdn.uconnectlabs.com/wp-content/uploads/sites/46/2022/08/Linkedin-Logo-e1660320077673.png",
      ID: "https://www.linkedin.com/in/parth-singhal-cs/",
    },
    {
      URL: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png",
      ID: "mailto:parthsinghal23.cs@gmail.com?",
    },
    {
      URL: "https://seeklogo.com/images/B/behance-logo-DD6F82C17B-seeklogo.com.png",
      ID: "https://www.behance.net/ParthSinghal_23",
    },
    {
      URL: "https://logos-world.net/wp-content/uploads/2021/02/Docker-Logo.png",
      ID: "https://hub.docker.com/u/sparth23",
    },
  ];
  return (
    <div className="pt-20 flex justify-evenly">
      {data.map((item, index) => (
        <Stripe key={index} val={item} />
      ))}
    </div>
  );
}

export default Stripes;
