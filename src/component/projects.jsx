import React from "react";
import backgroundImage from "../assets/background.jpg";
import temp1 from "../assets/temp1.jpg";
import temp2 from "../assets/temp2.jpg";
import temp3 from "../assets/temp3.jpg"; 
import temp4 from "../assets/temp4.jpg"; 
import temp5 from "../assets/temp6.jpg"; 
import temp6 from "../assets/temp5.jpg";
import Header from "../layout/header";
import Footer from "../layout/footer";




const projectsData = [
  {
    id: 1,
    image: temp1,
    title: "Admin Panel",
    description: "Modern admin panels are built with security, customization, and scalability in mind. They often include role-based access control, data backups, and real-time notifications to ensure safe and reliable management. Whether it’s a small business or a large enterprise, an intuitive admin panel helps teams collaborate, monitor system health, and maintain overall operational efficiency..",
  },
  {
    id: 2,
    image: temp2, 
    title: "Admin Panel",
    description: "The usability of an admin panel plays a crucial role in maintaining a smooth workflow. A clean layout, categorized menus, and quick navigation features help administrators perform daily tasks with ease. Data visualization tools, such as charts and tables, allow admins to track performance metrics in real time. The easier it is to use the admin panel, the faster the decisions and responses can be made.",
  },
  {
    id: 3,
    image: temp3, 
    title: "Admin Panel",
    description: "An admin panel is the control center of any website or web application. It allows administrators to manage content, users, and system settings efficiently. Through the admin dashboard, one can update website data, monitor user activity, and control access levels without needing to modify the core code. A well-designed admin panel provides clarity, speed, and control, making management tasks simple and effective.",
  },
  {
    id: 4,
    image: temp4, 
    title: "Website UI",
    description: "The User Interface (UI) of a website is the part that users see and interact with directly. A good UI design makes a website visually appealing and enhances the overall user experience. The right balance of colors, typography, buttons, and layout creates an engaging and well-organized interface. When the UI is clean and intuitive, visitors tend to stay longer and explore more content with ease.",
  },
  {
    id: 5,
    image: temp5, 
    title: "Website UI",
    description: "An effective UI design is not only about how beautiful a website looks but also about how easy it is to use. Responsive design ensures that the website functions smoothly across all devices — whether it’s a mobile, tablet, or desktop. Proper placement of navigation menus and call-to-action buttons helps users find what they need quickly, without confusion or frustration.",
  },
  {
    id: 6,
    image: temp6,
    title: "Website UI",
    description: "Modern UI design trends focus on simplicity, clarity, and minimalism. Flat design elements, smooth animations, and consistent color schemes give a professional and polished appearance. Today’s designers continuously refine the UI through user feedback and testing to deliver a more seamless experience. A well-crafted UI represents not only good aesthetics but also trust, functionality, and user satisfaction.",
  },
];

export default function Projects() {
  return (
    <div
      className="relative text-white bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
<Header/>
      {/* --- */}

      {/* Section: My Recent Works */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center mt-10 px-4">
        <h1 className="text-4xl font-bold mb-4">
          My Recent{" "}
          <span className="text-teal-400 italic font-semibold">Works</span>
        </h1>
        <p className="text-md text-gray-200 ">Here are a few Projects I've worked on recently</p>
      </div>



{/* 🔹 New Section: Project Boxes */}
<div className="z-10 mt-16 px-10 flex flex-col items-center ">
 
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12 text-center w-full max-w-6xl ">
    {projectsData.map((project) => (
      <div
        key={project.id}

        className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-purple-500 hover:scale-105 transition-all duration-300"
      >
        <img
          src={project.image} 
          alt={project.title}
          className="w-full h-40 object-cover rounded-xl mb-4"
        />
        <h3 className="text-xl font-semibold mb-2 text-teal-400">
          {project.title}
        </h3>
        <p className="text-white text-md">
          {project.description}
        </p>
      </div>
    ))}
  </div>
</div>   
<Footer/>
</div>

  );
}