import React from 'react'
import imagenProduto from "../../public/toyota.png"
import { MdAddShoppingCart } from "react-icons/md";
import { useParams } from 'react-router';
import { productos } from '../data';
import { useRef, useEffect } from 'react';

const Producto = () => {
  const { id } = useParams();

  const automobile = productos.find((producto) => {
    return producto.id === parseInt(id)
  })

  const innerRef = useRef(null);
  const leftRef = useRef(null);

  useEffect(() => {
    const handleMousemove = (event) => {
      const { width, height } = leftRef.current.getBoundingClientRect();
      const xAxis = event.offsetX / width * 100;
      const yAxis = event.offsetY / height * 100;
      innerRef.current.style.transform = `translate(-${xAxis}%, -${yAxis}%)`;
    };

    leftRef.current.addEventListener('mousemove', handleMousemove);

    return () => {
      if (leftRef.current) {
        leftRef.current.removeEventListener('mousemove', handleMousemove);
      }
    };
  }, []);

//   const añadirProducuto = product =>{
    
//     if (allProduts.find(item => item.id === product.id)) {
//       const products = allProduts.map(item => 
//           item.id === product.id
//         ? {...item,cantidad: item.cantidad + 1 }
//         : item

//         );
// setTotal(total + product.price * product.cantidad);
// setCountProducts(countProducts + product.cantidad)
// return setAllProducts([...products])
//     }

// console.log("si sirve we...")


//   }
  return (
    <>
    {/* {productos.map = (product => (
      
    ))} */}
      <div className='grid md:grid-cols-2 grid-cols-1 md:mx-8 gap-4 py-5'>
      <div className="wrapper">
      <div className="left" ref={leftRef}>
        <img
          src={automobile.imagen}
        />
      </div>
      <div className="right">
        <div className="inner" ref={innerRef}>
          <img
            src={automobile.imagen}
          />
        </div>
      </div>
    </div>
        <div className='  my-5 p-5 bg-neutral-100'>
          <div className=''>
            <h3 className='capitalize my-5 font-bold text-1xl text-slate-600'
            >fecha de subida</h3>
            <h3 className='capitalize my-5 font-bold text-1xl text-slate-600'
            >subido por: <span 
            className='text-black'>tienda</span></h3>
          <h2 className='capitalize my-5 font-bold text-xl'>{automobile.nombre}</h2>
          <p className='capitalize text-justify font-light leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat adipisci iste! Adipisci excepturi similique 
            repellat tempore error fuga explicabo facilis minus nobis libero! Id doloribus accusantium natus sequi error?
          </p>
          </div>
          <div>
          </div>
          <div className='flex flex-row p-5'>
          <h3 className='text-2xl'> {automobile.precio}</h3>
          <button className='p-2 ml-2  text-white w-full md:w-24 text-xl flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110
            rounded-lg justify-center bg-blue-500' type="button">
              < MdAddShoppingCart/>
            </button>
          </div>
        </div>
      </div>   
    </>
  )
}

export default Producto