import React, { useState, useEffect } from 'react'


let x = "";
let y = false;
let i = 0;
let name = "";
let lastName = "";
let age = 0;

export default function PrintaPokemon(props){

const [sida, setSida] = useState(false)
const [Xpokemons, XsetPokemons] = useState()
const [Xlastname, XsetLastname] = useState()
const [Xnumber, XsetNumber] = useState()
const [Xpresent, XsetPresent] = useState()


function PrintaPoks(props){  
 
  return (
    <div className="topa"> 
          <span className="Kurs">Kursnäro</span>
          {props.poke.map((p, index) => <div key={p.index}  index={index} className="test">                    
          <p>{p.name} </p>
          &nbsp;
          <p>{p.last_name} </p>
          &nbsp;
          &nbsp;         
          <label className="check" htmlFor={p.index}><input type="checkbox" checked={p.present} onChange={e => {props.checkBoxChanged(index, e.target.checked)}}></input><p className="box"></p></label>      
          &nbsp;
          &nbsp;
          &nbsp;
          <button className="square shape" onClick={e => {setSida(true); XsetPokemons(p.name); XsetLastname(p.last_name); i = index; XsetNumber(p.age); XsetPresent(p.present)}}> <span className="text2">edit</span> </button>
          &nbsp;
          <button className="square shape" onClick={e => {props.removePokemon(index)}}><span className="text2">del</span></button>                   
          </div>)}
          <div></div>    
          <div></div>
          <div>
          <p>Add Student</p>   
          <p>Name: <input type="text" value={Xpokemons} onChange={e => {XsetPokemons(e.target.value)}}/></p>          
          <p>Lastname: <input type="text" value={Xlastname} onChange={e =>{XsetLastname(e.target.value)}}></input></p>
          <p>Age: <input type="number" value={Xnumber} onChange={e =>{XsetNumber(e.target.value)}}/></p>          
          <div className="omega"><label className="check"><input type="checkbox" checked={Xpresent} onChange={e =>{XsetPresent(e.target.checked)}}/><p className="box"></p></label></div>
          <button className="square shape" onClick={e => {props.addUser(Xpokemons, Xlastname, Xnumber, Xpresent); XsetPokemons(""); XsetLastname(""); XsetNumber(""); XsetPresent(true)}}> <span className="text2">add</span> </button>            
          </div>
    </div>
  )
}


function PrintaInfo(props){ 
return <div>   
   <span className="Kurs">Kursnäro</span>
   <p>Edit Student</p>   
   <p>Name: <input type="text" value={Xpokemons} onChange={e => {XsetPokemons(e.target.value)}}/></p>
   <p>Lastname: <input type="text" value={Xlastname} onChange={e =>{XsetLastname(e.target.value)}}></input></p>
   <p>Age: <input type="number" value={Xnumber} onChange={e =>{XsetNumber(e.target.value)}}/></p>
   <div className="omega"><label className="check"><input type="checkbox" checked={Xpresent} onChange={e =>{XsetPresent(e.target.checked)}}/><p className="box"></p></label></div>
   <button className="square shape" onClick={e => {setSida(false); props.updateUser(i, Xpokemons, Xlastname, Xnumber, Xpresent); XsetPokemons(""); XsetLastname(""); XsetNumber(""); XsetPresent(true)}}> <span className="text2">back</span> </button>   
   <button className="square shape" onClick={e => {setSida(false); props.removePokemon(i); XsetPokemons(""); XsetLastname(""); XsetNumber(""); XsetPresent(true)}}><span className="text2">del</span></button>          
   </div>   
}

function ChooseToPrint(){
  if(!sida) return PrintaPoks(props);
  else return PrintaInfo(props);
}
     return(
        <div>
         {ChooseToPrint()}
      </div>  
    )
}

