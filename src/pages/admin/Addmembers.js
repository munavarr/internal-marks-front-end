import React, { useState } from 'react'
import '../admin/Addmembers.css'
import { Navigate, useNavigate, Link } from "react-router-dom";
import mapping from '../../assets/Frame3.png'
import teachers from '../../assets/Frame5.png'
import students from '../../assets/Frame4.png'
import subjects from '../../assets/Frame6.png'
import logoutimage from '../../assets/logout.png'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/system'; 


const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Addmembers = () => {

// const thedata = [{rolno : 1,regno:"ddd",name :'ssrr'},{rolno : 2,regno:"ee",name :'ssrr'},{rolno : 3,regno:"ttt",name :'ssrr'}]

const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/")
  };

  return (
   
      <div className='addmembers'>
      <div className='mapping_wrap'>
        <img className="mappingicon1" src={mapping} />
      </div>
      <div className='members_wrap'>
        <div className='members'>
        <Link  to={"/AddTeacher"}>
        <img className="contents1" src={teachers} />
          </Link>
          <Link  to={"/AddStudent"}>
        <img className="contents1" src={students} />
          </Link>
          <Link  to={"/AddSubject"}>
        <img className="contents1" src={subjects} />
          </Link>
        </div>
      </div>
      <div className='logout_ultrawrap'>
        <div className='logout_wrap'>
          <Button onClick={handleOpen}>
            <img className='logout' src={logoutimage} />
          </Button>
        </div>
      </div>

      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="modal-content">
         <div className='notification'>
         <p className='notifytext'>Are you sure you want to logout the admin <br></br> control panel?</p>
         <Button style={{
          borderRadius: '100px',
          border: '1px solid var(--m-3-sys-light-outline, #79747E)',
          color: 'var(--m-3-sys-light-primary, #6750A4)',
          textAlign: 'center',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '20px',
          letterSpacing: '0.1px',
          textTransform: 'capitalize',
          marginLeft:'161px',
          marginTop:'22px',
          width:'93px',
          height:'40px'}} onClick={handleClose}>Cancel</Button>
         <Button style={{
          borderRadius: '100px',
         background: "var(--m-3-sys-light-error, #B3261E)",
         textTransform:'capitalize',
         marginLeft:'10px',
         marginTop:'22px',
         width:'93px',
         height:'40px',
         color: 'var(--m-3-sys-light-on-primary, #FFF)', 
         textAlign: 'center',
         fontSize: '14px',
         fontStyle: 'normal',
         fontWeight: '500',
         lineHeight: '20px', 
         letterSpacing: '0.1px'}} onClick={logout}>Logout</Button>
         </div>
        </div>
      </StyledModal>



      




      {/* <table>
    <tr>
        <td rowspan="4">1</td>
        <td rowspan="4">2</td>
        <td rowspan="4">3</td>
        <td colspan="10">4</td>
    </tr>
    <tr>
        <td >5</td>
        <td >5</td>
        <td >5</td>
        <td >5</td>
        <td >5</td>
        <td >5</td>
        <td >5</td>
        <td >5</td>
        <td >5</td>
        <td >5</td>
        
    </tr>
    <tr>
        <td colspan="10">6</td>
    </tr>
    <tr>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>10</td>
        <td>11</td>
        <td>12</td>
        <td>13</td>
        <td>14</td>
        <td>15</td>
        <td>16</td>
    </tr>
    {thedata.map((tt)=>
     <tr>
     <td>{tt.rolno}</td>
     <td>{tt.regno}</td>
     <td>{tt.name}</td>
     <td>10</td>
     <td>11</td>
     <td>12</td>
     <td>13</td>
     <td>14</td>
     <td>15</td>
     <td>16</td>
     <td>14</td>
     <td>15</td>
     <td>16</td>
 </tr>
    )}
   

</table> */}




    </div>
  );
}

export default Addmembers;

