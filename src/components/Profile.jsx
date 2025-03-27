import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import profileImage from '../assets/profile.jpg';
import { 
  FaReact, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaGitAlt,
  FaDocker
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMongodb, 
  SiMysql,
  SiNextdotjs,
  SiGoland,
  SiBootstrap,
  SiTailwindcss,
  SiKubernetes,
  SiTerraform,
  SiWordpress,
  SiAwslambda,
  SiAmazon
} from 'react-icons/si';

function Profile() {
  const technologies = [
    { icon: FaReact, label: "React" },
    { icon: SiNextdotjs, label: "Next.js" },
    { icon: FaJsSquare, label: "JavaScript" },
    { icon: SiTypescript, label: "TypeScript" },
    { icon: FaPython, label: "Python" },
    { icon: SiGoland, label: "Golang" },
    { icon: FaHtml5, label: "HTML5" },
    { icon: FaCss3Alt, label: "CSS3" },
    { icon: SiBootstrap, label: "Bootstrap" },
    { icon: SiTailwindcss, label: "Tailwind" },
    { icon: SiMongodb, label: "MongoDB" },
    { icon: SiMysql, label: "SQL" },
    { icon: FaDocker, label: "Docker" },
    { icon: SiKubernetes, label: "Kubernetes" },
    { icon: SiAmazon, label: "AWS" },
    { icon: SiAwslambda, label: "Lambda" },
    { icon: SiTerraform, label: "Terraform" },
    { icon: FaGitAlt, label: "Git" },
    { icon: SiWordpress, label: "WordPress" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % technologies.length);
    }, 1800); // Change to next icon every 2 seconds

    return () => clearInterval(interval);
  }, []);

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
          className="w-full h-full object-cover rounded-full shadow-lg border-4 border-blue-200 transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Información Personal */}
      <div className="z-10">
        <h2 className="text-3xl font-bold text-gray-800 mt-4">Julia R Natera</h2>
        <p className="text-lg text-gray-700 mt-2 max-w-md">
          Desarrolladora FullStack especializada en Backend & DevOps. Experiencia con JavaScript, TypeScript, React, Next.js, Golang, Python, AWS, Docker y Kubernetes. Apasionada por crear soluciones escalables y eficientes.
        </p>
      </div>

      {/* Tecnologías Utilizadas */}
      <div className="mt-8 flex flex-wrap justify-center gap-6 z-10">
        {technologies.map((tech, index) => (
          <TechnologyIcon
            key={index}
            icon={tech.icon}
            label={tech.label}
            isActive={index === activeIndex}
          />
        ))}
      </div>
    </section>
  );
}

function TechnologyIcon({ icon: Icon, label, isActive }) {
  return (
    <div className={`flex flex-col items-center transition-transform duration-300 ${isActive ? 'scale-125' : 'scale-100'}`}>
      <Icon className="text-3xl text-blue-500" />
      <span className="text-sm mt-1 text-gray-600">{label}</span>
    </div>
  );
}

TechnologyIcon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default Profile;