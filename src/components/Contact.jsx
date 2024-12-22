import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center p-8 bg-gradient-to-b from-blue-50 to-gray-200 text-gray-800">
      <div className="bg-white rounded-lg p-6 text-center shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Contacto</h2>
        <p className="mb-6 text-gray-600">Conéctate conmigo en mis redes:</p>
        
        <div className="flex flex-col items-center space-y-4">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/julia-roxana-natera-917b62172/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 transition-transform duration-300 hover:scale-105">
            <FaLinkedin size={30} className="text-blue-600" />
            <span className="text-lg font-medium text-gray-700">LinkedIn</span>
          </a>
          
          {/* GitHub */}
          <a href="https://github.com/roxanatera" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 transition-transform duration-300 hover:scale-105">
            <FaGithub size={30} className="text-gray-700" />
            <span className="text-lg font-medium text-gray-700">GitHub</span>
          </a>

          {/* Email */}
          <a href="mailto:jrnt17@gmail.com" className="flex items-center space-x-3 transition-transform duration-300 hover:scale-105">
            <FaEnvelope size={30} className="text-red-600" />
            <span className="text-lg font-medium text-gray-700">jrnt17@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-center text-gray-400 py-4">
      <p>Julia Natera. Todos los derechos reservados © 2024.</p>
    </footer>
  );
}

export { Contact, Footer };
