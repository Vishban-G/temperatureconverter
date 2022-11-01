import React from "react";
// import './userform.css'
import { Formik } from "formik";
const initialValues ={
  name :"",
  email :"",
  password :""
}
const Userdata = () => {
const {values,errors,handleBlur,handleChange,handleSubmit}=Formik({
    initialValues:initialValues,
    onSubmit : (values)=>{
      console.log(values)
      
    }

  })
  
  return (
    <div>
      <form >
      <div className='name'>
        <label htmlFor='name'>Enter your name :-</label>
        <input type="text" 
        name="name" 
        id="name" 
        placeholder='Name' 
        autoComplete='off' 
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}  />
      </div>
      <div className='email'>
        <label htmlFor='email'>Enter your Email:-</label>
        <input type="email" 
        name="email" 
        id="email" 
        placeholder='Email' 
        autoComplete='off' 
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}/>
      </div>
      <div className='passwd'>
        <label htmlFor='password'>Enter your password:-</label>
        <input type="password" 
        name="password" 
        id="password" 
        placeholder='Password' 
        autoComplete='off' 
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}/>
      </div>
      <div>
        <button className='submit' id='submit'onSubmit={handleSubmit}>SUBMIT</button>
      </div>
      </form>
    </div>
  )
}
export default Userdata;