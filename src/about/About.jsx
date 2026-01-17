import React from 'react';
import web from "../assets/aboutus.png";
import Common from "../components/Common";

const About = () => {
    return (
        <>
            <Common 
                heading="Transform dreams into"
                highlightedText="Digital Reality"
                subHeading="Fuel your brand's digital journey" 
                imgsrc={web} 
                visit="/contact" 
                btname="Contact Now" 
            />
        </>
    );
};

export default About;