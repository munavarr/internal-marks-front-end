import React, { useState } from 'react'
import "../admin/adminLogin.css";
import mapping from '../../assets/Frame3.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Login } from '../../features/authSlice';
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";

const Adminlogin = () => {

const [username,setusername] = useState()
const [password,setpassword] = useState()

const dispatch = useDispatch();
const navigate = useNavigate();

const LoginHandle = () => {
  dispatch(Login({logindata,navigate}));
};

const logindata = {
  username : username,
  password : password
}



  return (
    <div className="adminLogin">
    <div className="login">
     <img className="mapping" src={mapping}/>
     <p className='paneltext1'>Login</p>
     <p className='logintext1'>Login to your account</p>
     <div style={{ display: 'grid', placeItems: 'center' }}>
     <TextField style={{ width: '330px', marginTop: '46px' }} label="Username"  InputLabelProps={{
   style: {
     color: 'var(--m-3-sys-light-on-surface-variant, #49454F)',
     fontFamily: 'Roboto',
     fontSize: '16px',
     fontStyle: 'normal',
     fontWeight: 400,
     lineHeight: '24px',
     letterSpacing: '0.5px',
   }
 }} onChange={(e) => setusername(e.target.value)} />
     <TextField style={{ 
     width: '330px', 
     marginTop: '25px' }} label="Password" InputLabelProps={{style: {
     color: 'var(--m-3-sys-light-on-surface-variant, #49454F)',
     fontFamily: 'Roboto',
     fontSize: '16px',
     fontStyle: 'normal',
     fontWeight: 400,
     lineHeight: '24px',
     letterSpacing: '0.5px',
   }
 }}  onChange={(e) => setpassword(e.target.value)} />
  </div><div style={{ display:'flex' }}>
  <Button style={{
     marginLeft:'293px',
     height:'40px', 
     marginTop:'30px',
     textTransform: 'capitalize' 
     }}  variant="contained" onClick={LoginHandle}>Login</Button>
  </div>
    </div>
   </div>
  )
}
export default Adminlogin

