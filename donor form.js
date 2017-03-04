import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import {hashHistory} from 'react-router';
import bloodg from './bg';



export default class Donorform extends Component{
render(){
    return(<div>
<form>
  <fieldset>
    <legend>Donor Details</legend>
    <label for="Name">Your Name;</label>
    <input type="text" name="" value="" ></input> <br/>
    <label For="fathername">Father Name;</label>
    <input type="text" name="" value="" ></input> <br/>

    <label>Group;</label>
    <select>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="A+">A+</option>
  <option value="B+">B+</option>
  <option value="o+">o+</option>
  <option value="0-">o-</option>
</select>
 <br/>
 <label for="city">Your City;</label>
 <select> 
     <option value="Karachi">Karachi</option>
     <option value="Peshawar">Peshawar</option>
     <option value="Islamabad">Islamabad</option>
     <option value="lahore">lahore</option>
 </select>
<br/>
<label>Mobile No;</label>
<input type="text"/>
<br/>
<label>Email;</label>
<input type="Email"/>
<br/>
<label>Password;</label>
<input type="password"/>
   <br/>
<label> blood donated Before; </label>
<select name="Not donated ever" id="">
    <option value="No">No</option>
    <option value="Yes">Yes</option>
</select>
   
   
   
    </fieldset>
    </form>
    <button>Submit</button>
    </div>
    )
}
}

