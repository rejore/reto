import React,{useContext} from 'react';

import cover from '../assets/images/cover.png';
import coverDesktop from '../assets/images/cover_desktop.png';
import "./styles/Cover.scss";
import {apiContext} from '../context/ApiContext';

const Cover = () => {
  const apiContextData = useContext(apiContext);
  const {data}  = apiContextData;

  console.log(data)
  return(
    <main className="cover">
         <section className="cover__section">
              <h6 className="cover__section--titleSecondary">¡NUEVO!</h6>
              <h1 className="cover__section--titlePrincipal">Seguro  
                <span>Vehicular</span>
                <p>Tracking</p>
              </h1>
              <p className="cover__section--content">
                Cuentanos donde le haras seguimiento 
                a tu seguro
              </p>
         </section>
         <figure className="cover__figure--v2">
             <img src={cover}/>
         </figure>
         <figure className="cover__figure--desktop">
             <img src={coverDesktop} />
         </figure>
     </main>
  )
}
    
export default Cover;