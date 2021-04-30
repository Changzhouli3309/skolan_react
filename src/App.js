import React, { useEffect, useState } from 'react';
import './App.css';
/* import './App.scss'; */
import Printa from './Printa';

function App() {
  

 const [pokemons, setPokemons] = useState([])
 const [omegaHook, setOmegaHook] = useState(true)

 
  useEffect(() => {
    async function fetchPokemons(){
      const resp = await fetch('http://localhost:8080/api/students')
      
      if (resp.status===204) {
        setPokemons([]);
        
      } else {
        const pokemon = await resp.json()
        const pokemon50 = [...pokemon];
        setPokemons(pokemon50);
      }
      
    }
    fetchPokemons();
    console.log(pokemons);      
  },[omegaHook]);

  function callOmegaHook(){
    setOmegaHook(!omegaHook)
  }
 
  function removePokemon(x){  
   /* let omega = Math.floor(Math.random()* 10000000000); */
    async function fetchDel(){
      const resp = await fetch(`http://localhost:8080/api/student/${pokemons[x].student_id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })
      if (resp.ok){
          callOmegaHook();
      }
    }
    fetchDel();    
  }



  function addUser(Xfirstname, Xlastname, Xage, Ypresent){
  /* let omega = Math.floor(Math.random()* 10000000000); */
    async function fetchAdd(){
      const resp = await fetch('http://localhost:8080/api/student', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: Xfirstname,
          last_name: Xlastname,
          age: Xage,          
          present: Ypresent
        })          
      })
      if(resp.status===201){
        callOmegaHook();
      }else{
        alert("Fail to add, check your input")
      }                
    }
    fetchAdd(); 
          
  }



  function checkBoxChanged(i, h){
   
    /* let omega = Math.floor(Math.random()* 10000000000); */
    async function fetchCheck(){
      const resp = await fetch(`http://localhost:8080/api/student/${pokemons[i].student_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: pokemons[i].name,
          last_name: pokemons[i].last_name,
          age: pokemons[i].age,          
          present: h
        })          
      })                 
    }
    fetchCheck(); 
    callOmegaHook();     
  }

  function updateUser(i, Xfirstname, Xlastname, Xage, Ypresent){    
/*     let omega = Math.floor(Math.random()* 10000000000); */
    async function fetchUpdate(){
      const resp = await fetch(`http://localhost:8080/api/student/${pokemons[i].student_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: Xfirstname,
          last_name: Xlastname,
          age: Xage,          
          present: Ypresent
        })          
      })
      if(resp.status===200){
        callOmegaHook();
      }else{
        alert("Fail to update, check your input")
      }                    
    }
    fetchUpdate();  
  }

  return (
        <div>
        <Printa 
        poke={pokemons}
        removePokemon = {removePokemon}
        addUser = {addUser}
        checkBoxChanged = {checkBoxChanged}
        updateUser = {updateUser}
        />        
      </div>  
  )
 
}

export default App;

