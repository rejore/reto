import React, {useEffect,useContext}from 'react';
import ApiContext from '../context/ApiContext';

import "./styles/FormInsurance.scss";

const FormInsurance = (props) => {
    useEffect(() => {
        fetch('https://randomuser.me/api/')
         .then(response => response.json())
         .then(data => setGlobalApi(data.results))            
     },[]);

     return(
        <section className="section__insurance">
            <h3 className="section__insurance--title">Déjanos tus datos</h3>
            <form onSubmit={props.onSubmit} className="section__insurance--form">
            <div className="section__insurance--dni">
                <select>
                    <option value="">DNI</option>
                </select>
                <input type="text" placeholder="Nro. de doc" id="dni" 
                pattern="[0-9]{8}" title="Debe ingresar 8 numeros"
                name="dni" onChange={props.onChange}/>
                <span style={{color: "red"}}>{props.errors["dni"]}</span>
            </div>
            <div className="section__insurance--mobile">
                <input type="text"   pattern="[0-9]{9}" 
                title="Debe ingresar 9 numeros" placeholder="Celular"
                name="celular" onChange={props.onChange}/>
                <span style={{color: "red"}}>{props.errors["celular"]}</span>
            </div> 
            <div className="section__insurance--licensePlate">
                <input type="text" placeholder="Placa"
                name="placa" onChange={props.onChange}/>
                 <span style={{color: "red"}}>{props.errors["placa"]}</span>
            </div>
            <div className="section__insurance--terms">
            <div className="section__insurance--check">
                <input type="checkbox" id="insurance--check" value="1" />
                <label htmlFor="insurance--check"></label>
                </div>
                <p>
                    Acepto la <a href="#"> Política de Protecciòn de Datos 
                    Personales </a> y 
                    los  <a href="#">Términos y Condiciones.</a>
                </p> 
            </div>
            <div className="section__insurance--quotation">
                <input type="submit" value="COTIZALO"/>
            </div>
            </form>
         </section> 
        )
    }

export default FormInsurance;