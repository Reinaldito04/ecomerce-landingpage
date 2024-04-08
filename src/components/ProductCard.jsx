import React, { useState } from "react";
import "./styles/Mouse.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { MdOutlineDoubleArrow } from "react-icons/md";

function ProductCard({imagen1,imagen2,imagen3,colorPrincipal,ColorSecundario,imagenPrincipal,Product,Descripcion,Marca,ProductModel,ProductName,typeProduct,information1,information2}) {
  const [isFirstContainer, setIsFirstContainer] = useState(true);

  const toggleContainer = () => {
    setIsFirstContainer(!isFirstContainer);
  };
  const containerClassName = isFirstContainer ? "" : "rotating-container";
  const Precio = "24.04";
  
  const [mainImage, setMainImage] = useState(imagen1);

  return (
    <>
      <div className={`container-card-mouse ${containerClassName}`} style={{
      background: `linear-gradient(-45deg, ${colorPrincipal} 50%, ${ColorSecundario} 50%)`
    }}>
        {isFirstContainer ? (
          <div className="container1">
            <div className="contenedor-mousetitulo">
            <p className="p-mouse p-titulo">{Marca}</p>
            </div>
           
          <div className="container-img-container1">
            <img src={imagenPrincipal} className="img-mouse" alt="" />
          </div>

            <div className="container-texto">
                <h4 className="h4-mouse"> {Product} </h4>
              <p className="p-mouse subDescripcion">{typeProduct} </p>
            </div>
          </div>
        ) : (
          <div className="container2">
            <h4 className="text-center text-dark pt-2">{ProductModel} </h4>
            <div className="container-img-container2">
              <img
                src={mainImage}
                className="img-container2 img-mouse"
                alt=""
              />
            </div>

            <div className="contenedor-mouses">
              <div className="container-imgmini">
                <img src={imagen2} className="imgmini" alt="" 
                
                onMouseEnter={() => setMainImage(imagen2)}
                onMouseLeave={() => setMainImage(imagen1)}
                
                />
              </div>
              <div className="container-imgmini">
                <img src={imagen3} className="imgmini" alt=""
                
                onMouseEnter={()=>setMainImage(imagen3)}
                onMouseLeave={() => setMainImage(imagen1)}
                />
              </div>
              <div className="container-imgmini">
                <img src={imagen1} className="imgmini" alt=""
                
                onMouseEnter={() => setMainImage(imagen1)}
                onMouseLeave={() => setMainImage(imagen1)}
                />
              </div>
            </div>
            <div className="container-texto-container2">
              <h5 className="h5-mouse">{ProductName} </h5>
              <p className="p-informacionMouse">
                
                {Descripcion}
              </p>

              <ul className="ul-mouse">
                <li>
                  {" "}
                  <MdOutlineDoubleArrow  className="info-icon"/>
                 {information1}
                </li>
                <li>
                  {" "}
                  <MdOutlineDoubleArrow className="info-icon" />
                  {information2}
                </li>
              </ul>
              <div className="contenedor-precio">
                <p className="p-informacionMouse PrecioMouse">${Precio} </p>
                <a href="/products/Laptop">
                <button className="btn btn-success boton-comprar">
                  
                  
                  Buy</button>
                </a>
                
              </div>
            </div>
          </div>
        )}

        <div className="container-boton-mouse">
          <button
            className="btn btn-primary boton-mouse"
            onClick={toggleContainer}
          >
            {isFirstContainer ? <FaArrowRight /> : <FaLongArrowAltLeft />}
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
