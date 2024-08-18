import React from "react";
import Weather from "../../public/weather.png";
import CRUD from "../../public/crud1.png";
import ecommerce from "../../public/ecommerce.jpg";

function Projects() {
  const cardItem = [
    {
      id: 1,
      logo: Weather,
      name: "Weather-App",
      description: (
        <div className="text-justify">
          <div className="font-semibold">• Technology</div>
          <div>Nodejs, Expressjs, Javascript, Html, CSS.</div>
          <div className="font-semibold">• Description</div>
          <div>
            It is a weather app web site which fetch live weather data from API
            with Nodejs and Expressjs By making server which listens to
            localhost on some specific port no.
          </div>
          <div className="font-semibold">• Duration</div>
          <div>2 week.</div>
          <div className="font-semibold">• Learning</div>
          <div>
            Fetch Data From API, Node And Express, Handling-Error.
          </div>
        </div>
      ),
      link: "https://github.com/AbhishekYadav9336/Weather_app",
    },
    {
      id: 2,
      logo: ecommerce,
      name: "PrimePicks",
      description: (
        <div className="text-justify">
          <div className="font-semibold">• Technology</div>
          <div>MERN Technology, Material-Ui, Tailwind Css.</div>
          <div className="font-semibold">• Description</div>
          <div>
            PrimePicks is an innovative e-commerce platform designed to provide
            a seamless and enjoyable shopping experience for users. This website
            consists of a User-Friendly Interface, Product Catalog,
            Authentication, and many more.
          </div>
          <div className="font-semibold">• Duration</div>
          <div>45 Days.</div>
          <div className="font-semibold">• Learning</div>
          <div>
            Authentication, Designing-Layout, State Management, Real-World
            Problem Solving.
          </div>
        </div>
      ),
      link: "https://github.com/AbhishekYadav9336/PrimePicks",
    },
    {
      id: 3,
      logo: CRUD,
      name: "CRUD-Application",
      description: (
        <div className="text-justify">
          <div className="font-semibold">• Technology</div>
          <div>MERN (MongoDb, Expressjs, Reactjs, Nodejs) and Material-Ui.</div>
          <div className="font-semibold">• Description</div>
          <div>
            Here I have designed the front end and back end part of CRUD
            operation website which consists of addUser, editUser, deleteUser,
            and allUser operations.
          </div>
          <div className="font-semibold">• Duration</div>
          <div>30 Days.</div>
          <div className="font-semibold">• Learning</div>
          <div>
            Designing-Layout, Database-Management, State-Management,
            Asynchronous-Operations.
          </div>
        </div>
      ),
      link: "https://github.com/AbhishekYadav9336/CURD-OPERATION-IN-MERN",
    },
  ];

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-12 mt-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-5">
          {cardItem.map(({ id, logo, name, description, link }) => (
            <div
              className="w-full border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[100px] h-[100px] p-1 rounded-full border-[2px] mx-auto mb-4"
                alt=""
              />
              <div>
                <div className="text-center font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-sm">{description}</p>
              </div>
              <div className="flex justify-center mt-6">
                <a href={link} target="_blank">
                  <button className="bg-green-400 hover:bg-green-900 text-white font-bold px-4 py-2 rounded">
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
