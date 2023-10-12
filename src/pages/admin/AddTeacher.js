import React, { useState } from 'react'
import { Navigate, useNavigate, Link } from "react-router-dom";
import "../admin/AddTeachers.css";
import arrow from "../../assets/icon.png";
import avatar1 from "../../assets/avatar1.png";
import deleteicon from "../../assets/deleteicon.png";
import edit1 from "../../assets/edit1.png";
import mapping from '../../assets/Frame3.png'
import plus from "../../assets/plus.png";
import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';
import { styled } from '@mui/system'; 
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { addTeacher, deleteTeacher, getAllSubjects, getAllTeachersList, updateTeacher } from '../../features/adminSlice';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddTeacher = () => {

const [username,setusername] = useState("")
const [password,setpassword] = useState("")
const [Fullname,setFullname] = useState("")
const [subject,setsubject] = useState()
const [deleteusername,setdeleteusername] = useState()
const [updateid,setupdateid] = useState()

console.log(subject)
const dispatch = useDispatch();

 useEffect(() => {
    dispatch(getAllSubjects());
    dispatch(getAllTeachersList());
  }, [ dispatch ]);
  

  // const AllSubjects = useSelector((state) => state.admin.allSubjects);
  // console.log(AllSubjects)

  const { AllSubjects,AllTeachers } = useSelector(
    (state) => ({
      AllSubjects: state.admin.allSubjects,
      AllTeachers: state.admin.allTeachers
    })
  );



const teacherDelete = (deleteData) => {
  if (deleteData) {
    dispatch(deleteTeacher(deleteData));
  }
  setOpen1(false);
};



const teacherdata = {
  full_name : Fullname,
  username : username,
  subject : subject,
  password : password
}

const editTeacher = () => {
  dispatch(updateTeacher({teacherdata,updateid}));
  setOpen2(false);
};

const submitTeacher = () => {
  dispatch(addTeacher(teacherdata));
  setOpen(false);
};

  //modal

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [deleteData, setdeleteData] = useState();

  // add
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
// edit 
  const handleOpen2 = (updateid) => {
    setOpen2(true);
    setupdateid(updateid)
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
//delete
  const handleOpen1 = (deleteid,username) => {
    setOpen1(true);
    console.log(deleteid)
    setdeleteData(deleteid && deleteid)
    setdeleteusername(username)
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  
  return (
    <div className="addTeacher">
      <div className="navigation">
        <img className="arrow" src={arrow} />
        <Link style={{textDecoration:'none'}} to={"/Addmembers"}>
        <p className="HomeTeachers">Home/Teachers</p>
          </Link> 
      </div>
      <div className="line"></div>
      <div className="secondbody">
        <img className="avatar1" src={avatar1} />
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
          Add Teacher
        </Button>
      </div>
    {!AllTeachers ?  <p className='noteachers'>No teachers added. Click '+ Add Teacher' to start.</p> :
       <div className="teacherslist">
   {AllTeachers?.map((teacher)=>
   <div className="teachers2">
   <div className="firstrow1">
     <div className="details1">
   <p className="name1">name</p>
   <div className="allnames1">
   <p className="teachername">{teacher.full_name} /</p>
   <p className="teacherposition">Computer Architecturer</p>
   </div>
   <div className="username-password"><p className="username">username:{teacher.username}</p>
   <p className="password">password:{teacher.copy_pass}</p></div>
   </div>
   <div className="action1">
     <button className='deletebutton1' onClick={()=> handleOpen1(teacher.id && teacher.id,teacher.username)}>
     <img className="delete1" src={deleteicon} />
     </button>
     <button className='editbutton1' onClick={()=>handleOpen2(teacher.id)}>
     <img className="edit1" src={edit1} />
     </button>
     </div>
     </div>
 </div> 
   ) }

  {/* <div className="teachers2">
    <div className="firstrow1">
      <div className="details1">
    <p className="name1">name</p>
    <div className="allnames1">
    <p className="teachername">Shylaja /</p>
    <p className="teacherposition">Computer Architecturer</p>
    </div>
    <div className="username-password">
      <p className="username">username: hahah</p>
    <p className="password">gggggggg: vvvvv</p>
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
  </div> */}

 
</div> }
<StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="modal-content">
        <div className='addteacherbox'>
 <img className="mapping1" src={mapping} />
<p className='addingteacher'>Add teacher</p>
<p className='localtext'>Set a username and password for the teacher login</p>
<TextField style={{ width: '330px', marginTop: '46px',borderRadius: '4px 4px 0px 0px' }} label="Fullname"  InputLabelProps={{
   style: {
     color: 'var(--m-3-sys-light-on-surface-variant, #49454F)',
     fontFamily: 'Roboto',
     fontSize: '16px',
     fontStyle: 'normal',
     fontWeight: 400,
     lineHeight: '24px',
     letterSpacing: '0.5px',
   }
 }} type='text' onChange={(e) => setFullname(e.target.value)} />

<FormControl style={{ width: '330px', marginTop: '25px',borderRadius: '4px 4px 0px 0px' }} >
      <InputLabel id="dropdown-label" >Select Subject</InputLabel>
      <Select
        labelId="dropdown-label"
        id="dropdown"
        value={subject}
        // onChange={handleChange}
        
        onChange={(e) => setsubject(e.target.value)}
      >
        {AllSubjects.map((subject)=>
        <MenuItem value={subject.id}>{subject.name}</MenuItem>
       ) }
      </Select>
    </FormControl>
 <TextField style={{ width: '330px', marginTop: '25px' }} label="Username"  InputLabelProps={{
   style: {
     color: 'var(--m-3-sys-light-on-surface-variant, #49454F)',
     fontFamily: 'Roboto',
     fontSize: '16px',
     fontStyle: 'normal',
     fontWeight: 400,
     lineHeight: '24px',
     letterSpacing: '0.5px',
   }
 }} type='text'  onChange={(e) => setusername(e.target.value)} />
  <TextField style={{ width: '330px', marginTop: '25px' }} label="Password"  InputLabelProps={{
   style: {
     color: 'var(--m-3-sys-light-on-surface-variant, #49454F)',
     fontFamily: 'Roboto',
     fontSize: '16px',
     fontStyle: 'normal',
     fontWeight: 400,
     lineHeight: '24px',
     letterSpacing: '0.5px',
   }
 }} type='text' onChange={(e) => setpassword(e.target.value)} />
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
          }} onClick={submitTeacher} >add</Button>
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
        <div className='addteacherbox'>
 <img className="mapping1" src={mapping} />
<p className='addingteacher'>Edit teacher info</p>
<p className='localtext'>Set a username and password for the teacher login</p>
<TextField style={{ width: '330px', marginTop: '46px',borderRadius: '4px 4px 0px 0px' }} label="Fullname"  InputLabelProps={{
   style: {
     color: 'var(--m-3-sys-light-on-surface-variant, #49454F)',
     fontFamily: 'Roboto',
     fontSize: '16px',
     fontStyle: 'normal',
     fontWeight: 400,
     lineHeight: '24px',
     letterSpacing: '0.5px',
   }
 }} type='text' onChange={(e) => setFullname(e.target.value)} />

<FormControl style={{ width: '330px', marginTop: '25px',borderRadius: '4px 4px 0px 0px' }} >
      <InputLabel id="dropdown-label" >Select Subject</InputLabel>
      <Select
        labelId="dropdown-label"
        id="dropdown"
        value={subject}
        // onChange={handleChange}
        onChange={(e) => setsubject(e.target.value)}
      >
         {AllSubjects.map((subject)=>
        <MenuItem value={subject.id}>{subject.name}</MenuItem>
       ) }
      </Select>
    </FormControl>
 <TextField style={{ width: '330px', marginTop: '25px' }} label="Username"  InputLabelProps={{
   style: {
     color: 'var(--m-3-sys-light-on-surface-variant, #49454F)',
     fontFamily: 'Roboto',
     fontSize: '16px',
     fontStyle: 'normal',
     fontWeight: 400,
     lineHeight: '24px',
     letterSpacing: '0.5px',
   }
 }} type='text'  onChange={(e) => setusername(e.target.value)} />
  <TextField style={{ width: '330px', marginTop: '25px' }} label="Password"  InputLabelProps={{
   style: {
     color: 'var(--m-3-sys-light-on-surface-variant, #49454F)',
     fontFamily: 'Roboto',
     fontSize: '16px',
     fontStyle: 'normal',
     fontWeight: 400,
     lineHeight: '24px',
     letterSpacing: '0.5px',
   }
 }} type='text' onChange={(e) => setpassword(e.target.value)} />
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
          }} onClick={editTeacher} >Update</Button>
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
         <p className='notifytext'>Are you sure you want to delete this teacher ‘{deleteusername}’?</p>
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
         letterSpacing: '0.1px'}} onClick={()=>teacherDelete(deleteData && deleteData)} >Delete</Button>
         </div>
        </div>
      </StyledModal>


    </div>
  );
};

export default AddTeacher;
