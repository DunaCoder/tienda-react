import React from 'react';
import Slider from '../components/Slider';
import Home1 from "../assets/img/home1.jpg";
import Home2 from "../assets/img/home2.jpg";
import Home3 from "../assets/img/home3.jpg";
import Home4 from "../assets/img/home4.jpg";

const HomePages = () => {
  return (
    <>
      <Slider />

      <div className='md:p-16 p-5 grid md:grid-cols-4 grid-cols-2 gap-6'>
        <img src={Home1} alt='Imagen de auto' />
        <img src={Home2} alt='Imagen de auto' />
        <img src={Home3} alt='Imagen de auto' />
        <img src={Home4} alt='Imagen de auto' />
      </div>

      <div className='my-16'>
        <h2 className='text-3xl font-bold text-gray-800 text-center mb-12'>Los mejores autos en nuestra tienda</h2>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white overflow-hidden shadow rounded-lg'>
              <img
                className='w-full object-cover h-48'
                src='https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                alt='Auto'
              />
              <div className='p-4'>
                <h3 className='text-gray-800 text-xl font-medium mb-2'>Auto de lujo</h3>
                <p className='text-gray-600 text-base'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna in risus fermentum, nec lacinia mi
                  dictum.
                </p>
                <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Ver mas
                </button>
              </div>
            </div>

            <div className='bg-white overflow-hidden shadow rounded-lg'>
              <img
                className='w-full object-cover h-48'
                src='https://images.unsplash.com/photo-1617083278485-ed52e6a8decb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                alt='Auto'
              />
              <div className='p-4'>
                <h3 className='text-gray-800 text-xl font-medium mb-2'>Auto deportivo</h3>
                <p className='text-gray-600 text-base'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna in risus fermentum, nec lacinia mi
                  dictum.
                </p>
                <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                  Ver mas
                </button>
              </div>
            </div>

            <div className='bg-white overflow-hidden shadow rounded-lg'>
              <img
                className='w-full object-cover h-48'
                src='https://images.unsplash.com/photo-1531181616225-f8e50c1ab53e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                alt='Auto'
              />
              <div className='p-4'>
                <h3 className='text-gray-800 text-xl font-medium mb-2'>Auto familiar</h3>
                <p className='text-gray-600text-base'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna in risus fermentum, nec lacinia mi
                  dictum.
                </p>
                <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                  Ver mas
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='my-16'>
        <h2 className='text-3xl font-bold text-gray-800 text-center mb-12'>Nuestros servicios</h2>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white overflow-hidden shadow rounded-lg'>
              <div className='p-4'>
                <h3 className='text-gray-800 text-xl font-medium mb-2'>Financiamiento</h3>
                <p className='text-gray-600 text-base'>
                  Ofrecemos una variedad de opciones de financiamiento para ayudar a nuestros clientes a obtener el auto de sus
                  sueños.
                </p>
                <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                  Ver opciones
                </button>
              </div>
            </div>

            <div className='bg-white overflow-hidden shadow rounded-lg'>
              <div className='p-4'>
                <h3 className='text-gray-800 text-xl font-medium mb-2'>Inspección de autos</h3>
                <p className='text-gray-600 text-base'>
                  Nos aseguramos de que cada vehículo en nuestro inventario sea inspeccionado y esté en óptimas condiciones antes de
                  ponerlo a la venta.
                </p>
                <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                  Más información
                </button>
              </div>
            </div>

            <div className='bg-white overflow-hidden shadow rounded-lg'>
              <div className='p-4'>
                <h3 className='text-gray-800 text-xl font-medium mb-2'>Servicio al cliente</h3>
                <p className='text-gray-600 text-base'>
                  Nuestro equipo de servicio al cliente está disponible para ayudarte en todo momento y responder a cualquier pregunta
                  que tengas.
                </p>
                <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                  Contáctanos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='my-16 w-full h-96 bg-cover bg-center' style={{ backgroundImage: "url('fondo.jpg')" }}>
        <div className='py-16'>
          <h2 className='text-white capitalize text-center text-4xl mb-8'>Únete a nuestra comunidad de entusiastas de autos</h2>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <form className='mt-8'>
              <div className='flex flex-col md:flex-row'>
                <input
                  type='email'
                  className='bg-white rounded-l-md px-4 py-3 mb-3 md:mb-0 md:mr-3 focus:outline-none focus:shadow-outline border border-gray-300'
                  placeholder='Tu correo electrónico'
                />
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md'>
                  Suscríbete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePages;