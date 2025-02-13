import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef();

  
  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

 
  const handleDownloadClick = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  
  const handleConfirmDownload = () => {
    setIsModalOpen(false);
    window.open("https://drive.google.com/file/d/1-6PNULMM1UGwnHXJE5oicFqf3l6t_KQ9/view?usp=drive_link", "_blank");
  };

 
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef} className="bg-gray-800 text-white p-4 sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <a
          onClick={() => handleNavClick('profile')}
          className="text-xl font-bold hover:text-gray-400 cursor-pointer"
        >
          Mi Portafolio
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>

        <ul
          className={`flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 absolute md:static w-full md:w-auto bg-gray-800 md:bg-transparent top-16 md:top-auto left-0 md:flex ${
            isOpen ? 'flex' : 'hidden'
          }`}
        >
          <li><a onClick={() => handleNavClick('profile')} className="block py-2 px-4 hover:text-gray-400 cursor-pointer">Perfil</a></li>
          <li><a onClick={() => handleNavClick('projects')} className="block py-2 px-4 hover:text-gray-400 cursor-pointer">Proyectos</a></li>
          <li><a onClick={() => handleNavClick('contact')} className="block py-2 px-4 hover:text-gray-400 cursor-pointer">Contacto</a></li>
          <li>
            <a
              href="#"
              onClick={handleDownloadClick}
              className="block py-2 px-4 hover:text-gray-400"
            >
              Descargar CV
            </a>
          </li>
        </ul>
      </div>

      {/* Modal estilizado */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full transform transition-all duration-300 scale-105 opacity-100">
            
            {/* Botón de cierre */}
            <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
              <FaTimes className="text-xl" />
            </button>

            {/* Contenido del modal */}
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Descargar CV</h2>
            <p className="mb-6 text-gray-700">¿Estás seguro de que quieres descargar el CV?</p>
            
            {/* Botones de acción */}
            <div className="flex justify-center gap-4">
              <button
                onClick={handleConfirmDownload}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Sí, descargar
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
