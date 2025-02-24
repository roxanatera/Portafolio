import { useNavigate } from 'react-router-dom';
import easytipcalc from '../assets/easytipcalc.jpg';
import calcount from '../assets/calcount.jpg';
import vettrack from '../assets/vettrack.jpg';
import coinforge from '../assets/coinforge.jpg';
import barvana from '../assets/barvana.jpg';
import landingpage from '../assets/landingpage.jpg';
import landingpageshop from '../assets/landingpageshop.png'
import weather from '../assets/weather.png'
import swagger from '../assets/swagger.jpg'
import urls from '../assets/urls.png'
import energy from '../assets/energy.png'

const projects = [
  { 
    id: 1, 
    title: 'Easy Tip Calculator', 
    description: 'Calculadora de propinas rápida y sencilla.', 
    link: 'https://easytipcalc-3622f8.netlify.app/', 
    image: easytipcalc 
  },
  { 
    id: 2, 
    title: 'Cal-Count+', 
    description: 'Aplicación para contar calorías diarias.', 
    link: 'https://cal-countf7283.netlify.app/', 
    image: calcount 
  },
  { 
    id: 3, 
    title: 'VetTrack', 
    description: 'Gestión de datos de pacientes veterinarios.', 
    link: 'https://vet-track4dce34.netlify.app/', 
    image: vettrack 
  },
  { 
    id: 4, 
    title: 'CoinForge', 
    description: 'Consulta de precios de criptomonedas en tiempo real.', 
    link: 'https://coinforge59b6d6.netlify.app/', 
    image: coinforge 
  },
  { 
    id: 5, 
    title: 'Barvana API', 
    description: 'Interfaz API para gestión de datos de bares.', 
    link: 'https://barvana-api.netlify.app/', 
    image: barvana 
  },
  { 
    id: 6, 
    title: 'Landing Page Marketing', 
    description: 'Landing page para agencia de marketing.', 
    link: 'https://landingpagmarketing.netlify.app/', 
    image: landingpage 
  },
   {
    id: 7,
    title: 'Landin Page Shopstore',
    description: 'Landing Page para una Empresa de Ropa.',
    link: 'https://landingpagegaleria.netlify.app/',
    image: landingpageshop 
   },
   {
    id: 8,
    title: 'Weather App',
    description: 'Weather App, Aplicación del clima',
    link: 'https://simpleclimaapp.netlify.app/',
    image: weather 
   },

   {
    id: 9,
    title: 'Documentación Swagger',
    description: 'Presenta un listado de endpoints disponibles, destinados a la gestión o incorporación de productos. Esta documentación sirve como punto central para que desarrolladores e integradores comprendan cómo interactuar con el backend.',
    link: 'https://backend-addproduct.onrender.com/api-docs/#/',
    image: swagger
   },
   {
    id: 10,
    title: "UrlsChecker ",
    description:
      "herramienta simple pero poderosa para verificar el estado HTTP de múltiples URLs.",
    image: urls
  },
  {
    id: 11,
    title: "Landing Page Energy",
    description:
      "Este es mi primer proyecto desarrollado con Golang para el backend y SCSS para los estilos, diseñado para mostrar las mejores ofertas de energía de manera visual, atractiva y profesional. ",
    image: energy
  },
  

];

function Projects() {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <section id="projects" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="relative bg-white p-6 rounded border-2 border-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-blue-500 cursor-pointer"
            onClick={() => handleProjectClick(project.id)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 md:h-64 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            {/* Botón en el centro "Ver Proyecto" */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 rounded transition-opacity duration-300">
              <span className="text-white font-semibold text-lg">Ver Proyecto</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
