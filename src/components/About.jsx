import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
         <h1 className="text-3xl font-bold mb-5">About</h1>
        {/* <p>
          Hello, I'm Abhishek Yadav, a passionate Web developer with a keen eye for MERN Stack .With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p> */}
        <h1 className="text-green-600 font-semibold text-xl">
          Educational Qualification
        </h1>
        <span>
          BTECH &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-ABES ENGINEERING COLLEGE (2021-25)<br/>
          INTERMEDIATE -CENTRAL HINDU SCHOOL (2020) <br/>
          HIGH SCHOOL  -CENTRAL HINDU SCHOOL (2018)
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <br/>
        <h2 className="text-gray-500 font-semibold ">Technical Skills</h2>
          
        <span>
        •	Programming Languages -- C,C++.<br/>
•	 Web Development -- Nodejs,Expressjs,Reactjs,MongDb,Material-Ui, Html, CSS, JavaScript,Bootstrap.<br/>
•	 Strong grasp of Data structure.<br/>
        </span>
        <br/>
        <h2 className="text-gray-500 font-semibold ">Interpersonal Skills</h2>
        <span>
        • Effective communicator<br/>
• Team-Player<br/>
•	 Problem-Solving<br/>
•	 Adaptability<br/>

        </span>
        <br />
        
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
        • Merge 4-Pull request in HACKTOBERFEST 2022,2023 <br/>
        • Solved 200+ LeetCode Problems.
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
        Certifications
        </h1>
        <p>
        • Problem Solving Basic , Problem Solving Intermediate - By Hackerrank.<br/>
•	 SQL Basic , SQL Intermediate – By Hackerrank.<br/>
• AWS Cloud Foundation - By AMAZON 

        </p>
      </div>
    </div>
  );
}

export default About;
