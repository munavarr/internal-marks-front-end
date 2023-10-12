import React, { useState } from 'react'
import { Navigate, useNavigate, Link } from "react-router-dom";
import "../admin/AddSubject.css";
import arrow from "../../assets/icon.png";
import Subjects from "../../assets/Subjects.png";
import deleteicon from "../../assets/deleteicon.png";
import edit1 from "../../assets/edit1.png";
import mapping from '../../assets/Frame3.png'
import plus from "../../assets/plus.png";
import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';
import { styled } from '@mui/system'; 
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';


const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddSubject = () => {


const [thesubject,setthesubject] = useState()




const submitSubject = () => {
  // dispatch(Login(logindata));
};

const editSubject = () => {
  // dispatch(Login(logindata));
};

const subjectdata = {
  
  Subject : thesubject,

}


  
  //modal

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  // add
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
// edit 
  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
//delete
  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const data ="a"
  return (
    <div className="addTeacher">
      <div className="navigation">
        <img className="arrow" src={arrow} />
        <Link style={{textDecoration:'none'}} to={"/Addmembers"}>
        <p className="HomeTeachers">Home/Subjects</p>
          </Link> 
      </div>
      <div className="line"></div>
      <div className="secondbody">
        <img className="avatar1" src={Subjects} />
        <Button
          style={{
            color: "var(--m-3-sys-light-on-primary, #FFF)",
            textAlign: "center",
            fontFamily: "Roboto",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "20px",
            letterSpacing: "0.1px",
            borderRadius: "4px",
            background: "#278AE6",
            marginTop: "20px",
            paddingRight: "24px",
            paddingTop: "10px",
            paddingBottom: "10px",
            textTransform: "capitalize",
          }}
          onClick={handleOpen}
        >
          <img className="plus" src={plus} />
          Add subject
        </Button>
      </div>
    {!data ?  <p className='noteachers'>Add subject to assign it to teachers</p> :
       <div className="teacherslist">
     <div className="subjects2">
    <div className="firstrow1">
      <div className="details1">
    <p className="name1">subject</p>
    <div className="allnames1">
    <p className="teachername">Computing Master</p>
    
    </div>
    </div>
    <div className="action1">
      <button className='deletebutton1' onClick={handleOpen1}>
      <img className="delete1" src={deleteicon} />
      </button>
      <button className='editbutton1' onClick={handleOpen2}>
      <img className="edit1" src={edit1} />
      </button>
      </div>
      </div>
  </div>

  <div className="teachers2">
    <div className="firstrow1">
      <div className="details1">
    <p className="name1">name</p>
    <div className="allnames1">
    <p className="teachername">Shylaja /</p>
    <p className="teacherposition">Computer Architecturer</p>
    </div>
    <div className="username-password">
      <p className="rollreg">username: hahah</p>
    <p className="rollreg">gggggggg: vvvvv</p>
    </div>
    </div>
    <div className="action1">
      <button className='deletebutton1' onClick={handleOpen1}>
      <img className="delete1" src={deleteicon} />
      </button>
      <button className='editbutton1'>
      <img className="edit1" src={edit1} />
      </button>
      </div>
      </div>
  </div>

 
</div> }
<StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="modal-content">
        <div className='subjectbox' >
 <img className="mapping1" src={mapping} />
<p className='addingteacher'>Add subject</p>
<p className='localtext'>Add subject to assign it to teachers</p>
<TextField style={{ width: '330px', marginTop: '46px',borderRadius: '4px 4px 0px 0px' }} label="Subject Name"  InputLabelProps={{
   style: {
     color: 'var(--m-3-sys-light-on-surface-variant, #49454F)',
     fontFamily: 'Roboto',
     fontSize: '16px',
     fontStyle: 'normal',
     fontWeight: 400,
     lineHeight: '24px',
     letterSpacing: '0.5px',
   }
 }} type='text' onChange={(e) => setthesubject(e.target.value)} />


 
 <Button   style={{
            color: "var(--m-3-sys-light-on-primary, #FFF)",
            textAlign: "center",
            fontFamily: "Roboto",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "20px",
            letterSpacing: "0.1px",
            borderRadius: "4px",
            background: "#278AE6",
            marginTop: "30px",
            marginLeft: '260px',
            paddingRight: "10px",
            paddingTop: "10px",
            paddingBottom: "10px",
            textTransform: "capitalize",
          }} onClick={submitSubject} >add</Button>
 </div>
        </div>
      </StyledModal>


      <StyledModal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="modal-content">
        <div className='subjectbox' >
 <img className="mapping1" src={mapping} />
<p className='addingteacher'>Edit subject</p>
<p className='localtext'>Edit subject name and click ‘Update’.</p>
<TextField style={{ width: '330px', marginTop: '46px',borderRadius: '4px 4px 0px 0px' }} label="Subject Name"  InputLabelProps={{
   style: {
     color: 'var(--m-3-sys-light-on-surface-variant, #49454F)',
     fontFamily: 'Roboto',
     fontSize: '16px',
     fontStyle: 'normal',
     fontWeight: 400,
     lineHeight: '24px',
     letterSpacing: '0.5px',
   }
 }} type='text' onChange={(e) => setthesubject(e.target.value)} />


 
 <Button   style={{
            color: "var(--m-3-sys-light-on-primary, #FFF)",
            textAlign: "center",
            fontFamily: "Roboto",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "20px",
            letterSpacing: "0.1px",
            borderRadius: "4px",
            background: "#278AE6",
            marginTop: "30px",
            marginLeft: '260px',
            paddingRight: "10px",
            paddingTop: "10px",
            paddingBottom: "10px",
            textTransform: "capitalize",
          }} onClick={editSubject} >Update</Button>
 </div>
        </div>
      </StyledModal>

    

      <StyledModal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="modal-content">
         <div className='notification'>
         <p className='notifytext'>Are you sure you want to delete this subject ‘Cloud Computing’?</p>
         <Button style={{borderRadius: '100px',border: '1px solid var(--m-3-sys-light-outline, #79747E)'
         ,color: 'var(--m-3-sys-light-primary, #6750A4)',
         textAlign: 'center',fontSize: '14px',fontStyle: 'normal',fontWeight: '700',lineHeight: '20px',
         letterSpacing: '0.1px',textTransform: 'capitalize',marginLeft:'161px',marginTop:'22px',width:'93px',
         height:'40px'}} onClick={handleClose1}>Cancel</Button>
         <Button style={{borderRadius: '100px',
         background: "var(--m-3-sys-light-error, #B3261E)",textTransform:'capitalize',
         marginLeft:'10px',marginTop:'22px',width:'93px',height:'40px',
         color: 'var(--m-3-sys-light-on-primary, #FFF)', textAlign: 'center',
         fontSize: '14px',fontStyle: 'normal',fontWeight: '500',lineHeight: '20px', 
         letterSpacing: '0.1px'}} >Delete</Button>
         </div>
        </div>
      </StyledModal>


    </div>
  );
};

export default AddSubject;
