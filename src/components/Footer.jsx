import React from 'react'

const Footer = () => {
  return (
    <>
  <footer className="bg-gray-100 text-center lg:text-center md:text-center">
        <div className="container p-6">
          <div className="grid lg:grid-cols-4 md:grid-cols-2">
            <div className="mb-6">
              <h5  className="uppercase font-bold mb-2.5 text-gray-800">Links</h5>
      
              <ul className="list-none mb-0">
                <li>
                  <a href="#!" className="text-blue-600">Link 1</a>
                </li>
                <li>
                  <a href="#!" className="text-blue-600">Link 2</a>
                </li>
                <li>
                  <a href="#!" className="text-blue-600">Link 3</a>
                </li>
                <li>
                  <a href="#!" className="text-blue-600">Link 4</a>
                </li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5">Links</h5>
      
              <ul className="list-none mb-0">
                <li>
                  <a href="#!" className="text-blue-600">Link 1</a>
                </li>
                <li>
                  <a href="#!" className="text-blue-600">Link 2</a>
                </li>
                <li>
                  <a href="#!" className="text-blue-600">Link 3</a>
                </li>
                <li>
                  <a href="#!" className="text-blue-600">Link 4</a>
                </li>
              </ul>
            </div>
      
            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5 text-gray-800">Links</h5>
      
              <ul className="list-none mb-0">
                <li>
                  <a href="#!" className="text-blue-600">Link 1</a>
                </li>
                <li>
                  <a href="#!" className="text-blue-600">Link 2</a>
                </li>
                <li>
                  <a href="#!" className="text-blue-600">Link 3</a>
                </li>
                <li>
                  <a href="#!" className="text-blue-600">Link 4</a>
                </li>
              </ul>
            </div>
      
            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5 text-gray-800">Links</h5>
      
              <ul className="list-none mb-0">
                <li>
                  <a href="#" className="twitter"><i className="fa fa-twitter transition ease-in-out delay-150 text-base p-1 
                    hover:text-blue-600 rounded-full
                      hover:bg-white" ></i></a>  
                </li>
                <li>
                  <a href="#" className="facebook"><i className="fa fa-facebook transition ease-in-out delay-150 text-base p-1 
                    hover:text-blue-600 rounded-full hover:bg-white"></i></a>
                </li>
                <li>
                  <a href="#" className="instgram"><i className="fa fa-instagram transition ease-in-out delay-150 text-base p-1
                     hover:text-blue-600 rounded-full hover:bg-white"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {}
        <div class="text-gray-700 text-center p-4">
            {<div>{`©${new Date().getFullYear()}`}</div>}
        {/* <div>{`© ${new Date().getFullYear()}`}</div> */}
          <a class="text-gray-800" href="#">Nombre Tienda</a>
        </div>
      </footer>
    </>
  )
}

export default Footer