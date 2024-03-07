import React from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { productos } from '../data';

 const Tienda = ({
  //useState variables 
  allProducts,
  setAllProducts,
  total,
  setTotal,
  countProducts,
  setCountProducts
}) => {

  const addProducto = product =>{
    if (allProducts.find(item => item.id === product.id)) {
      const productos = allProducts.map(item => 
          item.id === product.id
        ? {...item,cantidad: item.cantidad + 1 }
        : item

        );
  setTotal(total + product.precio * product.cantidad);
  setCountProducts(countProducts + product.cantidad)
  return setAllProducts([...productos])
    }

		setTotal(total + product.precio * product.cantidad);
		setCountProducts(countProducts + product.cantidad);
		setAllProducts([...allProducts, product]);

console.log("si sirve we...")

  }
  return (
    <>
    <div className='contenedor md:mx-16 p-2'>
      <div  className=' padre grid   grid-cols-2 lg:grid-cols-4 gap-4
      lg:gap-8'>
        {productos.map(product =>(
          
          <>
            <div key={product.id} className='h-96 transition ease-in-out delay-150 duration-300
          hover:shadow-xl rounded-lg flex flex-col items-center 
          justify-center'>
            
            <NavLink to={`/producto/${product.id}`}>
            <img src={product.imagen}/>
            </NavLink>
            
            <h4> {product.nombre}</h4>
            <p>${ product.precio}</p>
            <div>

            <button onClick={() => addProducto(product)} key={product.id} className='p-2 my-5 text-white w-24 text-xl flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110
            rounded-lg justify-center bg-blue-500' type="button">
              < MdAddShoppingCart/>
            </button>
            </div>
          </div>
         
          </>
        ))}
      </div>
    </div>
    
    </>
  )
}

export default Tienda
 
