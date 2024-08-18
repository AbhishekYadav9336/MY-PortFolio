import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>

        <h1 className="text-green-600 font-semibold text-lg md:text-xl mb-2">
          Educational Qualification
        </h1>
        <span className="block mb-4">
          BTECH - ABES ENGINEERING COLLEGE (2021-25)
          <br />
          INTERMEDIATE - CENTRAL HINDU SCHOOL (2020)
          <br />
          HIGH SCHOOL - CENTRAL HINDU SCHOOL (2018)
        </span>

        <h1 className="text-green-600 font-semibold text-lg md:text-xl mb-2">
          Skills & Expertise
        </h1>
        <h2 className="text-gray-500 font-semibold text-sm md:text-base mb-2">
          Technical Skills
        </h2>
        <span className="block mb-4">
          • Programming Languages -- C, C++.
          <br />
          • Web Development -- Nodejs, Expressjs, Reactjs, MongDb, Material-Ui,
          Html, CSS, JavaScript, Bootstrap.
          <br />
          • Strong grasp of Data structure.
          <br />
        </span>

        <h2 className="text-gray-500 font-semibold text-sm md:text-base mb-2">
          Interpersonal Skills
        </h2>
        <span className="block mb-4">
          • Effective communicator
          <br />
          • Team-Player
          <br />
          • Problem-Solving
          <br />
          • Adaptability
          <br />
        </span>

        <h1 className="text-green-600 font-semibold text-lg md:text-xl mb-2">
          Achievements & Awards
        </h1>
        <span className="block mb-4">
          • Merge 4-Pull requests in HACKTOBERFEST 2022, 2023
          <br />
          • Solved 200+ LeetCode Problems.
        </span>

        <h1 className="text-green-600 font-semibold text-lg md:text-xl mb-2">
          Certifications
        </h1>
        <span className="block">
          • Problem Solving Basic, Problem Solving Intermediate - By Hackerrank.
          <br />
          • SQL Basic, SQL Intermediate – By Hackerrank.
          <br />
          • AWS Cloud Foundation - By AMAZON
          <br />
        </span>
      </div>
    </div>
  );
}

export default About;
