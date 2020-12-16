import React from "react";
import { Link } from "react-router-dom";


/**
 * This is the main function for the home page.
 * Some styling and features are applied to this page with comments for user friendliness
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
    </main>
  );
}

/**
 * This is the hero or the picture on home page.
 */
const Hero = () => (
  <section className="hero">
    {/* content for the hero */}
    <div className="hero__content">
<h1 className="hero__title" style={{color: "white"}}><b>Welcome to the ASV
   Stock Analyst Portal! 
  Check for the latest and upto date 
  Stock Prices on American Stock Viewer</b></h1>
      <p className="hero__subtitle" style={{color: "white", fontSize: "30px", textAlign: "left", padding: "15px"}}>Click on stocks to see 
      the available companies, 
      Quote to get the latest price 
      information by stock symbol, or choose Price History to 
      sample from the most recent on 
      hundred days of information for a particular stock. 
      company that provides stock analysis ability</p>
      {/* Login and register pages on the home page */}
      <p style={{color: "white", padding: " 90px 0px"}}>To register click here: <Link to="/register" style={{color:"red"}}>Register</Link> </p>
     <p style={{color:"white"}}>To login click here:  <Link to="/login" style={{color:"red"}}>Login</Link> </p>
    </div>
  </section>
);

// features section
function Features() {
  /* This information will help the user */
  const featuresData = [
    {
      
      heading: "24/7 Support via Email",
      text: "24/7 Online Support is available via Email.",

    },
    {
      
      heading: "Online Mentoring with Brokers",
      text:
        "To learn more about stocks our Analysts Brokers are always able to help and mentor!",
    },
    {
      
      heading: "Reviews and Rating",
      text:
        "The ASV is the Best Stock Analysis tool, They have the best Customer Service."
    }
  ];

  return (
    <article className="features">
      <div className="features__header">
        <h2>Our Commitment</h2>
      </div>

      <div className="features__box-wrapper">
        {
        // display the information for each of our features in their own Box
        featuresData.map(featuredata => (
          <FeatureBox key={featuredata.heading} heading={featuredata.heading} text={featuredata.text} />
        ))
        }
      </div>
    </article>
  );
}

// Display a Feature box when passed in the information for the feature
function FeatureBox(props){
  return (
  <div className="features__box">
    <h5>{props.heading}</h5>
    <p>{props.text}</p>

  </div>
  )
};