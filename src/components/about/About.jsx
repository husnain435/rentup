import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/about.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about">
        <Back name="About Us" title="About Us - Who We Are?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Our Agency Story"
              subtitle="Check out our company story and work process"
            />

            <p>
              Real estate is property consisting of land and the buildings on
              it, along with its natural resources such as crops, minerals or
              water; immovable property of this nature; an interest vested in
              this an item of real property, buildings or housing in general.
            </p>
            <p>
              Real estate is different from personal property, which is not
              permanently attached to the land, such as vehicles, boats,
              jewelry, furniture, tools and the rolling stock of a farm. In the
              United States, the transfer, owning, or acquisition of real estate
              can be through business corporations, individuals, nonprofit
              corporations, fiduciaries, or any legal entity as seen within the
              law of each U.S. state.
            </p>
            <button className="btn2">More About Us</button>
          </div>
          <div className="right row">
            <img src="./immio.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
