import { useParams } from 'react-router-dom';
import easytipcalc from '../assets/easytipcalc.jpg';
import calcount from '../assets/calcount.jpg';
import vettrack from '../assets/vettrack.jpg';
import coinforge from '../assets/coinforge.jpg';
import barvana from '../assets/barvana.jpg';
import landingpage from '../assets/landingpage.jpg';
import landingpageshop from "../assets/landingpageshop.png";
import weather from '../assets/weather.png';
import swagger from '../assets/swagger.jpg'
import urls from '../assets/urls.png'
import energy from '../assets/energy.png'
import wordpress from '../assets/word2.png';


const projects = [
  {
    id: 1,
    title: 'revifitApp',
    description: 'Este es un tema personalizado de WordPress desarrollado para el gimnasio ReviveFit. El tema está diseñado para ser ligero, responsive y fácil de personalizar.',
    link: 'https://dev-revivefitapp.pantheonsite.io/',
    image: wordpress,
    details: `
      Tecnologías utilizadas: WordPress, PHP, Advanced Custom Fields, consultas WP_Query.
    `,
  },
  {
    id: 2,
    title: 'Easy Tip Calculator',
    description: 'Calculadora de propinas rápida y sencilla. Este proyecto permite calcular fácilmente la propina basada en el porcentaje deseado y el total de la cuenta.',
    link: 'https://easytipcalc-3622f8.netlify.app/',
    image: easytipcalc,
    details: `
      Tecnologías: React, CSS, React Hooks.
      Easy Tip Calculator permite a los usuarios calcular el porcentaje de propina sobre el total de la cuenta.
      Retos: Precisión en cálculos, interactividad en tiempo real, diseño responsivo.
      Mejoras Futuras: Conversión de monedas, opciones de preajustes de propina.
    `,
  },
  {
    id: 3,
    title: 'Cal-Count+',
    description: 'Aplicación para contar calorías diarias de manera efectiva y monitorear la ingesta de nutrientes.',
    link: 'https://cal-countf7283.netlify.app/',
    image: calcount,
    details: `
      Tecnologías: React, Vite, TypeScript, hook useReducer, Tailwind CSS.
      Aplicación de monitoreo calórico diseñada para ofrecer un seguimiento diario de la ingesta nutricional del usuario.
    `,
  },
  {
    id: 4,
    title: 'VetTrack',
    description: 'Sistema de gestión de datos de pacientes para clínicas veterinarias.',
    link: 'https://vet-track.netlify.app/',
    image: vettrack,
    details: `
      Tecnologías: React, TypeScript, React Hook Form, Zustand, Tailwind CSS.
      Sistema completo de gestión veterinaria que permite a los veterinarios registrar y hacer seguimiento de sus pacientes y consultas médicas.
    `,
  },
  {
    id: 5,
    title: 'CoinForge',
    description: 'Aplicación para consultar precios de criptomonedas en tiempo real, ideal para entusiastas del mercado de criptomonedas.',
    link: 'https://coinforge59b6d6.netlify.app/',
    image: coinforge,
    details: `
      Tecnologías: React, TypeScript, Zod, Zustand.
      Aplicación de consulta de precios en tiempo real de criptomonedas con actualización constante.
    `,
  },
  {
    id: 6,
    title: 'Barvana API',
    description: 'API para la gestión de datos de bares y restaurantes, facilitando el acceso y control de información de inventario y clientes.',
    link: 'https://barvana-api.netlify.app/',
    image: barvana,
    details: `
      Tecnologías: API, Vite, TypeScript, React Router, Tailwind CSS, Zustand, Zod.
      Funcionalidad: Búsqueda de bebidas, gestión de inventario y control de recetas con integración de API externa.
    `,
  },
  {
    id: 7,
    title: 'Landing Page Marketing',
    description: 'Landing page para agencia de marketing, diseñada para atraer y convertir clientes potenciales.',
    link: 'https://landingpagmarketing.netlify.app/',
    image: landingpage,
    details: `
      Tecnologías: React, Tailwind CSS.
      Funcionalidad: Página de aterrizaje diseñada para captar clientes interesados en los servicios de una agencia de marketing digital.
    `,
  },
  {
    id: 8,
    title: 'Landing Page Shopstore',
    description: 'Landing Page para una Empresa de Ropa.',
    link: 'https://landingpagegaleria.netlify.app/',
    image: landingpageshop,
    details: `
      Tecnologías: React con TypeScript, Tailwind CSS, Unsplash API.
      Página interactiva diseñada para proporcionar una experiencia de usuario moderna y responsiva.
    `,
  },
  {
    id: 9,
    title: 'Weather App',
    description: 'Aplicación del clima que permite consultar el clima actual y un pronóstico extendido.',
    link: 'https://simpleclimaapp.netlify.app/',
    image: weather,
    details: `
      Tecnologías: React, TypeScript, Tailwind CSS.
      Funcionalidad: Consulta del clima actual y pronósticos futuros para cualquier ubicación.
    `,
  },
  {
    id: 10,
    title: 'Documentación Swagger',
    description: 'Documentación interactiva para una API de gestión de productos, mostrando cómo interactuar con los endpoints.',
    link: 'https://backend-addproduct.onrender.com/api-docs/#/',
    image: swagger,
    details: `
      Tecnologías: Swagger, Node.js.
      Funcionalidad: Documentación detallada de endpoints CRUD para la gestión de productos en un sistema de inventario.
    `,
  },
  {
    id: 11,
    title: 'Comprobador de Urls',
    description: 'Este proyecto es una herramienta simple pero poderosa para verificar el estado HTTP de múltiples URLs.',
    link: '',
    image: urls,
    details: `
      Tecnologías: Golang, Fiber y Docker.
      Funcionalidad: Herramienta para verificar el estado HTTP de URLs y exportar los resultados. Compatible con despliegues en Docker.

      📦 Ejecuta mi proyecto directamente desde Docker con los siguientes comandos:
      - docker pull roxnatera/check-url:latest
      - docker run -p 3000:3000 roxnatera/check-url:latest
    `,
  },
  {
    id: 12,
    title: 'Landing Page de Ofertas de Energía',
    description: 'Esta aplicación permite a los usuarios buscar el clima actual y obtener el pronóstico de los próximos tres días para cualquier ciudad.',
    link: 'https://landingenergy.netlify.app/',
    image: energy,
    details: `
      Tecnologías:
      - Golang: Utilizado para el backend, incluyendo el framework Fiber para gestionar rutas y plantillas.
      - SCSS: Para estilos personalizados y modularidad en el diseño.
      - HTML5: Estructura de las plantillas.

      🔗 Enlace al Proyecto:
      https://lnkd.in/dm_A7Cgq

      🔗 Enlace al Repositorio:
      https://lnkd.in/dr4xxSEW 👍 

      🐳 Docker:
      - Puedes descargar la imagen con el siguiente comando:
        docker pull roxnatera/landing-energy-app:latest
      - Ejecuta la aplicación en segundos:
        docker run -d -p 3000:3000 roxnatera/landing-energy-app:latest
    `,
  },
];

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <p className="text-center text-red-500">Proyecto no encontrado</p>;
  }

  return (
    <section className="flex flex-col items-center p-8 bg-gray-100">
      <div className="bg-white p-6 rounded border-2 border-gray-100 shadow-lg max-w-2xl w-full transition-all duration-300 hover:border-blue-500">
        
        {/* Imagen del Proyecto */}
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-64 md:h-80 object-cover rounded mb-6"
        />
        
        {/* Título del Proyecto */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
          {project.title}
        </h2>
        
        {/* Descripción del Proyecto */}
        <p className="text-base md:text-lg text-gray-700 mb-6 text-center">
          {project.description}
        </p>
        
        {/* Detalles del Proyecto */}
        <p className="text-sm md:text-base text-gray-600 mb-6 whitespace-pre-line">
          {project.details}
        </p>
        
        {/* Enlace para Ver el Proyecto */}
        <div className="flex justify-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Ver Proyecto
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;
