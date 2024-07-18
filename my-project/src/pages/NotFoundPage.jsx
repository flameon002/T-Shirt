import React from "react";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="bg-slate-600 flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900">
          Pagina no encontrada
        </h1>
        <p className="mt-4 text-center text-black-500 text-xl">
          Lo siento, La pagina que buscar no existe.
        </p>
        <button className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900">
          <Link to="/">Volver a la paina del inicio</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
