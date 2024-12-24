import React from 'react';
import { useParams } from 'react-router-dom';
import easytipcalc from '../assets/easytipcalc.jpg';
import calcount from '../assets/calcount.jpg';
import vettrack from '../assets/vettrack.jpg';
import coinforge from '../assets/coinforge.jpg';
import barvana from '../assets/barvana.jpg';
import landingpage from '../assets/landingpage.jpg';
import landingpageshop from '../assets/landingpageshop';
import weather from '../assets/weather.png';
import swagger from '../assets/swagger.jpg'


const projects = [
  { 
    id: 1, 
    title: 'Easy Tip Calculator', 
    description: 'Calculadora de propinas rápida y sencilla. Este proyecto permite calcular fácilmente la propina basada en el porcentaje deseado y el total de la cuenta.', 
    link: 'https://easytipcalc-3622f8.netlify.app/', 
    image: easytipcalc,
    details: `
      Tecnologías: React, CSS, React Hooks.
      Easy Tip Calculator permite a los usuarios calcular el porcentaje de propina sobre el total de la cuenta.
      Retos: Precisión en cálculos, interactividad en tiempo real, diseño responsivo.
      Mejoras Futuras: Conversión de monedas, opciones de preajustes de propina.
    ` 
  },
  { 
    id: 2, 
    title: 'Cal-Count+', 
    description: 'Aplicación para contar calorías diarias de manera efectiva y monitorear la ingesta de nutrientes.', 
    link: 'https://cal-countf7283.netlify.app/', 
    image: calcount,
    details: `-tecnologias usadas: React, Vite, TypeScript, hook useReducer, Talwindcss
     Aplicación de monitoreo calórico diseñada para ofrecer un seguimiento diario de la ingesta nutricional del usuario, Podemos agregar calorías que consumimos o calorías que quemamos en base a ciertas actividades Tenemos dos categorías comida o ejercicio.
    Las comidas aumentan las calorías y el ejercicio las quema.Y al final tenemos una diferencia de si consumimos más calorías de las que quemamos o al final si tenemos un déficit calórico.`
  },
  { 
    id: 3, 
    title: 'VetTrack', 
    description: 'Sistema de gestión de datos de pacientes para clínicas veterinarias.', 
    link: 'https://vet-track4dce34.netlify.app/', 
    image: vettrack,
    details: `Tecnologias usadas: React, Ts, React Hook Form, Zustand, Taldwind 
    Sistema completo de gestión veterinaria que permite a los veterinarios registrar y hacer seguimiento de sus pacientes y consultas médicas.`
  },
  { 
    id: 4, 
    title: 'CoinForge', 
    description: 'Aplicación para consultar precios de criptomonedas en tiempo real, ideal para entusiastas del mercado de criptomonedas.', 
    link: 'https://coinforge59b6d6.netlify.app/', 
    image: coinforge,
    details: `Tecnologias usadas: React, Ts, Cripto App con Zod y Zustand. 
    Aplicación de consulta de precios en tiempo real de criptomonedas con actualización constante.`
  },
  { 
    id: 5, 
    title: 'Barvana API', 
    description: 'API para la gestión de datos de bares y restaurantes, facilitando el acceso y control de información de inventario y clientes.', 
    link: 'https://barvana-api.netlify.app/', 
    image: barvana,
    details: `-Tecnologías Utilizadas:
      API, Vite, TS, React Router, Talwind, Zustand, Zod
    -Funcionalidad de la Aplicación
    Buscar Bebidas: Permite buscar bebidas por nombre o tipo y devuelve información detallada, incluyendo una lista de ingredientes.
    -Gestión de Inventario: Los bares pueden llevar un registro de los ingredientes disponibles y de las bebidas que pueden preparar con esos ingredientes.
    -Control de Recetas: La API permite acceder a recetas detalladas y a las proporciones necesarias de cada ingrediente, lo cual ayuda a los bartenders a preparar bebidas de forma estandarizada.
    -Retos Enfrentados
    Integración de la API Externa: Configurar y optimizar la integración con la Cocktail DB API o una API similar fue un desafío, especialmente para manejar tiempos de respuesta rápidos y asegurar que los datos fueran actualizados y precisos.`
  },
  { 
    id: 6, 
    title: 'Landing Page Marketing', 
    description: 'Landing page para una agencia de marketing, diseñada para atraer y convertir clientes potenciales.', 
    link: 'https://landingpagmarketing.netlify.app/', 
    image: landingpage,
    details: `Tecnologías: React, Tailwind CSS.
    Funcionalidad: Página de aterrizaje diseñada para captar clientes interesados en los servicios de una agencia de marketing digital. 
    Retos: Crear un diseño atractivo y de alta conversión, optimización de tiempos de carga y asegurar que la página sea completamente responsiva en dispositivos móviles.
    Mejoras Futuras: Integración de herramientas de análisis como Google Analytics para medir la efectividad de la página.`
  },

  { 
    id: 7, 
    title: 'Landing Page Shop', 
    description: 'He desarrollado una landing page interactiva enfocada en proporcionar una experiencia de usuario moderna y responsiva, Este proyecto destaca por su diseño limpio, funcionalidad dinámica y un enfoque en la experiencia del cliente.', 
    link: 'https://landingpagegaleria.netlify.app/', 
    image: landingpageshop,
    details: `Tecnologías utilizadas:Frontend: React con TypeScript, Tailwind CSS
      APIs Externas: Unsplash API para obtener imágenes dinámicas.
      Gestión de datos: Hooks personalizados (useUnsplash) para manejo eficiente de datos.
      Versionamiento: Git y GitHub.`
  },
  { 
    id: 8, 
    title: 'Weather App', 
    description: ' Esta aplicación de clima permite a los usuarios buscar el clima actual y obtener el pronóstico de los próximos tres días para cualquier ciudad.', 
    link: 'https://simpleclimaapp.netlify.app/', 
    image: weather,
    details:`Desarrollada con React para la estructura de componentes, 
    TypeScript para tipado seguro y Tailwind CSS para un diseño responsivo y estilizado.`
  },

  { 
    id: 9, 
    title: 'Dcoumentación Swagger', 
    description: 'La documentación Swagger implementada para la API de Product Admin App proporciona una forma interactiva y fácil de entender cómo funciona la API, qué endpoints están disponibles y cómo realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre los productos en el catálogo. ', 
    link: 'https://backend-addproduct.onrender.com/api-docs/#/', 
    image: swagger,
    details:`Los endpoints principales cubren las operaciones CRUD para la gestión de productos. Estos incluyen:
    GET /api/products: Obtiene todos los productos disponibles en el sistema.
    POST /api/products: Permite agregar un nuevo producto al catálogo.
    GET /api/products/{id}: Recupera un producto específico mediante su ID.
    PUT /api/products/{id}: Permite actualizar los detalles de un producto existente.
    DELETE /api/products/{id}: Elimina un producto del catálogo utilizando su ID.`
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
      <div className="bg-white p-6 rounded border-2 border-gray-200 shadow-lg max-w-2xl w-full transition-all duration-300 hover:border-blue-500">
        
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
