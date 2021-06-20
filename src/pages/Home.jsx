import React,{Component,Fragment} from 'react';

import "./styles/app.scss";
import "./styles/Home.scss";
import Header from '../components/Header';
import Cover from '../components/Cover';
import FormInsurance from '../components/FormInsurance';


export default class Home extends Component{
    state={
       sent:false,
       error:{},
       form:{
           dni:"",
           celular:"",
           placa:""
       }
    }

    handleChange = (e) => {
       this.setState({
           form:{
              ...this.state.form,
              [e.target.name]: e.target.value
           }
       })  
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.validateForm()){
           this.setState({
               sent:true
           })
        }
    }

    validateForm = () => {
        let data = this.state.form;
        let error = {};
        let formValid = true;
        
        if(data.celular == ""){
            formValid = false;
            error["celular"] = "Por favor ingresar tu celular";
        }
  
        if(data.dni == ""){
            formValid = false;
            error["dni"] = "Por favor ingresar tu dni";  
        }

        if(data.placa == ""){
            formValid = false;
            error["placa"] = "Por favor ingresar tu placa";   
        }
        
        this.setState({
            error:error
        })

        return formValid;
    }
    render(){
        return(
             <Fragment> 
                <Header/> 
                <div className="container__home">
                    <div className="container__home--left">
                         <Cover/>     
                    </div>
                    <div className="container__home--right">
                          <FormInsurance 
                          onSubmit={this.handleSubmit}
                          onChange={this.handleChange}
                          formValues={this.state.form}
                          errors={this.state.error}
                          statusFormValid={this.state.sent}/>
                    </div>  
                </div>
             </Fragment>
        )
    }
}

