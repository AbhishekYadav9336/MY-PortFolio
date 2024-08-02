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
      discreption:<div className="text-justify">•	<b>Technology</b> – Nodejs, Expressjs, Javascript, Html, CSS.<br/>
•	<b>Description</b> – It is a weather app web site which fetch live weather data from API with Nodejs and Expressjs By making server which listen to localhost on some specific port no.<br/> 
•	<b>Duration</b>- 2 week.<br/>
•	<b>Learning</b>- Fetch Data From API, Node And Express, Handling-Error.<br/>
</div>,
link:"https://github.com/AbhishekYadav9336/Weather_app" },
{
  id: 2,
  logo: ecommerce,
  name: "PrimePicks",
  discreption:<div className="text-justify">•	<b>Technology</b>-MERN Technology,Material-Ui,Tailwind Css.<br/>
  •	<b>Description</b>- PrimePicks is an innovative e-commerce platform designed to provide a seamless and enjoyable shopping experience for users.This web-site which consist of User-Friendly Interface,Product Catalog,Authentication and many more.<br/>
  •	<b>Duration</b>- 45 Days.<br/>
  •	<b>Learning</b>-Authentication,Designing-Layout,State Management, Real-World Problem Solving.<br/>
  </div>,
  link:"https://github.com/AbhishekYadav9336/PrimePicks"
},
    {
        id: 3,
        logo: CRUD,
        name: "CRUD-Application",
        discreption:<div className="text-justify">•	<b>Technology</b>-MERN(MongoDb,Expressjs,Reactjs,Nodejs) and Material-Ui.<br/>
        •	<b>Description</b>- Here I have designed the front end and back end part of CRUD operation web-site which consist of addUser,editUser, deleteUser and allUser operations.<br/>
        •	<b>Duration</b>- 30 Days.<br/>
        •	<b>Learning</b>- Designing-Layout,DataBase-Management,State-Management,Asynchronous-Operations.<br/>
        </div>,
        link:"https://github.com/AbhishekYadav9336/CURD-OPERATION-IN-MERN"
      },
      
   
  ];
  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-12 mt-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1><br/>
        <div className="grid  grid-rows-1 md:grid-cols-2 gap-8 my-5">
          {cardItem.map(({ id, logo, name,discreption,link }) => (
            <div
              className="md:w-[550px] md:h-[480px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                   {discreption}

                </p>
              </div>
              <div className="flex justify-center mx-auto ml-0 mt-10">
              <a href={link} target="_blank"><button className="bg-green-400 hover:bg-green-900 text-white font-bold px-6 py-5 rounded">Source Code
              </button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
