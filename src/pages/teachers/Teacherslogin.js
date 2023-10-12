import React from 'react'
import "../teachers/Teacherslogin.css";
import mappingblue from '../../assets/mappingblue.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Teacherslogin = () => {
  return (
    <div className="adminLogin">
    <div className="login">
     <img className="mapping" src={mappingblue}/>
     <p className='text1'>Admin panel</p>
     <p className='text2'>Login to teacher control panel</p>
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
 }} />
     <TextField style={{ width: '330px', marginTop: '25px' }} label="Password" InputLabelProps={{
   style: {
     color: 'var(--m-3-sys-light-on-surface-variant, #49454F)',
     fontFamily: 'Roboto',
     fontSize: '16px',
     fontStyle: 'normal',
     fontWeight: 400,
     lineHeight: '24px',
     letterSpacing: '0.5px',
   }
 }} />
  </div><div style={{ display:'flex' }}>
  <div className='bluetext'>Switch to teacher panel</div>
  <Button style={{ marginLeft:'72px', height:'40px', marginTop:'30px',textTransform: 'capitalize',background: 'var(--m-3-sys-light-primary, #6750A4)' }}  variant="contained">Login</Button>
  </div>
    </div>
   </div>
  )
}
export default Teacherslogin

