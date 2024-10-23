import React from "react";

function Footer() {
  const Socials = [
    { 
      Name: "LinkedIn", 
      Url: "https://www.linkedin.com/in/parth-singhal-cs/" 
    },
    {
      Name: "Twitter(X?)",
      Url: "https://x.com/Parth_S23?t=FFxGEMX8WY_47uGwWP6vjw&s=08 ",
    },
    {
      Name: "Instagram",
      Url: "https://www.instagram.com/hey_pxrth/profilecard/?igsh=MTRndHRnbHZtc2c4dQ==",
    },
  ];

  const Links = [
    { Name: "Home", Url: "/home" },
    { Name: "Projects", Url: "/projects" },
    { Name: "Skills", Url: "/skills" },
    { Name: "About", Url: "/about" },
  ];

  return (
    <div className="w-full mt-10 mb-16">
      <div className="max-w-screen-xl mx-auto px-20 flex">
        {/* Left side with Awwwards and Policies */}
        <div className="w-1/2 px-24">
          <h1 className="text-[4rem] font-semibold leading-none text-nowrap tracking-tight">
            Awwwards...
          </h1>
          <div className="flex gap-5 pt-4">
            {["PrivacyPolicy", "CookiePolicy", "Terms&Conditions"].map(
              (item, index) => (
                <a key={index} className="block capitalize mt-1 text-zinc-700" href="#">
                  {item}
                </a>
              )
            )}
          </div>
        </div>

        {/* Right side with Socials, Links, and Agency Description */}
        <div className="w-1/2 px-8 flex gap-2">
          {/* Social Links */}
          <div className="basis-1/3">
            <h4 className="pb-3">Socials</h4>
            {Socials.map((item, index) => (
              <a
                key={index}
                href={item.Url}
                target="_blank"
                rel="noopener noreferrer"
                className="block capitalize mt-1 text-zinc-700"
              >
                {item.Name}
              </a>
            ))}
          </div>

          {/* Page Links */}
          <div className="basis-1/3">
            <h4 className="pb-3">Links</h4>
            {Links.map((item, index) => (
              <a
                key={index}
                href={item.Url}
                className="block capitalize mt-1 text-zinc-700"
              >
                {item.Name}
              </a>
            ))}
          </div>

          {/* Agency Description and Badge */}
          <div className="basis-1/2 flex flex-col gap-5">
            <p className="text-right leading-tight">
            © 2024 Parth Singhal<br></br>Crafted with passion and code.
            </p>
            <img
              className="h-20 object-cover rounded-lg"
              src="https://themeselection-cdn.b-cdn.net/wp-content/uploads/2022/05/awwwards.png"
              alt="Badge"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
