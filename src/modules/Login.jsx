import api from './api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { redirect } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
const RealizarLogin = async(Email,Senha)=>{
  await api.post('/UserLogin',{
    Email:Email,
    Senha: Senha
  }).then((response)=>{
    if(response.data =='Senha Invalida' || response.data =='Usuario não localizado'){
      console.log(response.data)
      console.log('Senha Invalida')
      return false
    }else{
     return useNavigate('Home')
      
    }
    })
  
  
  //Fim da função
  }

export default RealizarLogin