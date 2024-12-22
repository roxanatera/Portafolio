import React from 'react';
import profileImage from '../assets/profile.jpg';
import { FaReact, FaAngular, FaPython, FaPhp, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiMysql } from 'react-icons/si'; 

function Profile() {
  return (
    <section 
      id="profile" 
      className="relative flex flex-col items-center p-8 bg-gradient-to-b from-gray-200 via-gray-100 to-blue-50 text-center"
    >
      {/* Imagen de Perfil */}
      <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-4 z-10">
        <img
          src={profileImage}
          alt="Julia Natera"
          className="w-full h-full object-cover rounded-full shadow-lg border-4 border-white transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Información Personal */}
      <div className="z-10">
        <h2 className="text-3xl font-bold text-gray-800 mt-4">Julia Natera</h2>
        <p className="text-lg text-gray-700 mt-2 max-w-md">
          Desarrolladora web Junior con conocimientos en JavaScript, TypeScript,  React, Spring Boot, Python, MongoDB, SQL.
          Apasionada por la programación y el desarrollo de soluciones creativas y eficientes.
        </p>
      </div>

      {/* Tecnologías Utilizadas */}
      <div className="mt-8 flex flex-wrap justify-center gap-6 z-10">
        <TechnologyIcon icon={FaReact} label="React" />
        <TechnologyIcon icon={FaAngular} label="Angular" />
        <TechnologyIcon icon={FaPython} label="Python" />
        <TechnologyIcon icon={SiMongodb} label="MongoDB" />
        <TechnologyIcon icon={SiMysql} label="SQL" />
        {/* <TechnologyIcon icon={FaPhp} label="PHP" /> */}
        <TechnologyIcon icon={FaHtml5} label="HTML5" />
        <TechnologyIcon icon={FaCss3Alt} label="CSS3" />
        <TechnologyIcon icon={FaJsSquare} label="JavaScript" />
        <TechnologyIcon icon={SiTypescript} label="TypeScript" />
        <TechnologyIcon icon={FaGitAlt} label="Git" />
      </div>
    </section>
  );
}

function TechnologyIcon({ icon: Icon, label }) {
  return (
    <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
      <Icon className="text-3xl text-blue-500" />
      <span className="text-sm mt-1 text-gray-600">{label}</span>
    </div>
  );
}

export default Profile;
