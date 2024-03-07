import React from 'react'



const Carrito = ({
  //useState variables 
  allProducts,
  setAllProducts,
  total,
  setTotal,
  countProducts,
  setCountProducts
}) => {
  const eliminarProdducto = product => {
    const results = allProducts.filter(
      item => item.id !== product.id
    )
    setTotal(total - product.precio * product.cantidad)
    setCountProducts(countProducts - product.cantidad)
    setAllProducts(results);
  };
  const vaciarCarrito = () =>{
    setAllProducts([]);
    setTotal(0)
    setCountProducts(0);
  }
  return (
    <>
     <div>
    <div className='w-full p-2 '>
     <h2 className='text-2xl m-8 font-light capitalize'
     >productos agregados:</h2>
    </div>


    <div className='contenedorElelmentos'>

      {allProducts.length ?  (
        <>
          
        <div className='padre grid grid-cols-1  gap-4 m-5 py-5 '>

          {allProducts.map(product => (
            <div key={product.id} className='producto md:w-[80%] md:mx-[90px] bg-stone-100 grid  grid-cols-1 md:grid-cols-2'>
            <div>
                <img src={product.imagen} ></img>
            </div>
            <div className='m-8 capitalize'>
              <h2 className='my-5 text-lg'>{product.nombre}</h2>
                <h2 className='my-5 text-2xl'>{product.precio}</h2>
                <button onClick={() => eliminarProdducto(product)} type='button' className='bg-red-700  md:w-auto w-full p-2 rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 text-white' >borrar</button>
            </div>
            </div>
            

          ))}
        
     </div>
     <div className='w-full p-2 '>
     <h2 className='text-2xl m-8 font-light capitalize'
     >total: ${total}</h2>
    </div>

     <div className='flex justify-center'>
        <button onClick={vaciarCarrito} className='p-2  rounded-lg hover:bg-white transition duration-300 hover:text-black  my-5 text-center text-2xl capitalize bg-black text-white' 
        type='button'>
            vaciar carrito 
        </button>
     <div>
      
    
     </div>
     </div>
        </>
     
      ) : (
        //aqui se vera vacio 
        <h3 className='text-2xl m-8 capitalize'> sin productos en el carrito</h3>
      )}
     
     </div>
    </div> 
    </>
  )
}

export default Carrito
