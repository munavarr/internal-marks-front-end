import React, { useState } from 'react'
import { Navigate, useNavigate, Link } from "react-router-dom";
import "../teachers/Teacher.css";
import arrow from "../../assets/icon.png";
import avatar1 from "../../assets/avatar1.png";
import Button from '@mui/material/Button';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addMarks, getAllExams, getAllMarks, getAllStudentsList } from '../../features/adminSlice';








const Teacher = () => {

 const username = localStorage.getItem("username");
 const teachersub = localStorage.getItem("subject");

const [exam,setexam] = useState()
console.log(exam)
// const [mark,setmark] = useState([])
const teacherid = localStorage.getItem("id");


const dispatch = useDispatch();

useEffect(() => {
  dispatch(getAllExams());
  dispatch(getAllStudentsList());
}, [ dispatch ]);

const { AllExams,AllStudents,allMarks } = useSelector(
  (state) => ({
    AllExams: state.admin.allExams,
    AllStudents: state.admin.AllStudents,
    allMarks: state.admin.allMarks
  })
);
console.log(allMarks)

// const thedatas = AllStudents.map((trt) => ({
//   teacherid: "111",
//   studentid: trt.id,
//   marks.map((themark)=>
//   [mark.questionNumbers]: themark.result
//   )
// }));

// const thedatas = AllStudents.map((trt) => ({
//   teacherid: "111",
//   studentid: trt.id,
//   ...mark.map((themark) => ({
//     [themark.questionNumbers]: themark.result
//   })).reduce((acc, allmark) => ({ ...acc, ...allmark }), {})
// }));

// const handleMarkChange = (value, index) => {
//   const newMarks = [...mark];
//   newMarks[index] = parseFloat(value);
//   setmark(newMarks);
// };
const [co1,setco1] = useState("");
const [co2,setco2] = useState();
const [co3,setco3] = useState();
const [co4,setco4] = useState();
const [co5,setco5] = useState();
const [co6,setco6] = useState();
const [co7,setco7] = useState();
const [co8,setco8] = useState();
const [co9,setco9] = useState();
const [co10,setco10] = useState();

const [marks, setMarks] = useState([]);

const handleMarkChange = (value, studentIndex, markIndex) => {
  const updatedMarks = [...marks];
  // updatedMarks[studentIndex][markIndex] = parseFloat(value);
  // setMarks(updatedMarks);

  if (!updatedMarks[studentIndex]) {
    updatedMarks[studentIndex] = [];
  }

  updatedMarks[studentIndex][markIndex] = parseFloat(value);
  setMarks(updatedMarks);

   // Set the value to 0 if it's empty or not a number.
  //  updatedMarks[studentIndex][markIndex] = value.trim() === '' || isNaN(parseFloat(value)) ? 0 : parseFloat(value);
  //  setMarks(updatedMarks);
  
};

// const thedatas = AllStudents.map((trt) => ({
//   teacher: 6,
//   exam_name:9,
//   student: trt.id,
//   question_one : ,
//   question_one_co:"kk",
//   question_two : "q",
//   question_one_co
//   question_three:"a",
//   question_three_co
//   question_four
//   question_four_co
//   question_five
//   question_five_co
//   question_six
//   question_six_co
//   question_seven
//   question_seven_co
//   question_eight
//   question_eight_co
//   question_nine
//   question_nine_co
//   question_ten
//   question_ten_co
// }));

// const data = [undefined, [40, 50, 20, 30], undefined, [10, 30, 60]];
const thedata = AllStudents.map((trt, index) => {
  const studentMarks = marks[index];

  return {
    teacher: teacherid,
    exam_name:exam,
    student: trt.id,
    question_1: studentMarks && studentMarks[0] ,
    question_one_co:co1,
    question_2: studentMarks && studentMarks[1] ,
    question_two_co : co2,
    question_3: studentMarks && studentMarks[2] ,
    question_three_co :co3,
    question_4: studentMarks && studentMarks[3] ,
    question_four_co :co4,
    question_5 :studentMarks && studentMarks[4] ,
    question_five_co :co5,
    question_6 : studentMarks && studentMarks[5] ,
    question_six_co :co6,
    question_7 : studentMarks && studentMarks[6] ,
    question_seven_co :co7,
    question_8 : studentMarks && studentMarks[7] ,
    question_eight_co :co8,
    question_9 : studentMarks && studentMarks[8] ,
    question_nine_co :co9,
    question_10 : studentMarks && studentMarks[9] ,
    question_ten_co :co10,
  };
});
console.log(thedata)
for (let i = 0; i < thedata.length; i++) {
  console.log(thedata[i]);
}

console.log(AllExams)
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/")
  };


//  const addmark =()=>{
//   dispatch(addMarks(thedata));
//   setMarks("")
//  }

const addmark = () => {
  dispatch(addMarks(thedata));
  console.table(thedata)
}



  const sendSubjectid = (e)=>{
    console.log(e.target.value)
    dispatch(getAllMarks(e.target.value));
    console.table(allMarks[0])
  }
  
  // if (allMarks.length > 0) {
  //   const questionOneCo = allMarks[0].question_one_co
  //   console.log(questionOneCo); // Do something with questionOneCo
  // } else {
  //   console.log("thedata is empty or undefined");
  // }

  


  return (
    <div className="addTeacher">
      <div className="navigation">
        <img className="arrow" src={arrow} />
        <Button style={{textTransform: "capitalize"}} className='logoutbt' onClick={logout}>
        <p className="teacherlogout">Logout</p>
          </Button> 
      </div>
      <div className="line"></div>
      <div className="nextbody">
      <div className='avatarflex'>  <img className="avatar1" src={avatar1} /> </div>
        <p className='teachername1'>{username}</p>
        <p className='teachersubject1'>{teachersub}</p>
       { !AllStudents[0] ?  <p className='studentsaddedtext1'>No students added yet!</p>  :

         <div className='dropdownbox'>
        <FormControl style={{ width: '330px', marginTop: '25px',borderRadius: '4px 4px 0px 0px' }} >
      <InputLabel id="dropdown-label" >Select Exam</InputLabel>
      <Select
        labelId="dropdown-label"
        id="dropdown"
        value={exam}
        // onChange={handleChange}
        
        // onChange={(e) => setexam(e.target.value)}
        onChange={(e) => {
          setexam(e.target.value); 
          sendSubjectid(e); 
        }}
      >
        {AllExams.map((subject)=>
        <MenuItem value={subject.id}>{subject.name}</MenuItem>
       ) }
      </Select>
    </FormControl>
    </div>  }
    {exam ? 
    <div>
        <table>
    <tr>
        <td className='inputs_container' rowspan="4"><p className='tablefields'>Roll no</p></td>
        <td className='inputs_container' rowspan="4"><p className='tablefields'>Reg no</p></td>
        <td className='inputs_container' rowspan="4"><p className='tablefields'>Name</p></td>
        <td colspan="10"><p className='tablefields'>Question number</p></td>
    </tr>
    <tr>
        <td >1</td>
        <td >2</td>
        <td >3</td>
        <td >4</td>
        <td >5</td>
        <td >6</td>
        <td >7</td>
        <td >8</td>
        <td >9</td>
        <td >10</td>
        
    </tr>
    <tr>
        <td colspan="10"><p className='tablefields'>CO Value</p></td>
    </tr>
    <tr>
        <td  className='inputs_container'>
        <FormControl style={{ 
         margin:"0px",padding: "0px", width: "100%",height: "100%",whiteSpace: "nowrap",border: "none",textAlign: "center",fontSize: "20px",borderRadius: '4px 4px 0px 0px' }} >
      <InputLabel id="dropdown-label" >{allMarks.length > 0 ? allMarks[0].question_one_co : "select CO"}</InputLabel>
      <Select
        labelId="dropdown-label"
        id="dropdown"
        value={co1}
        onChange={(e) => setco1(e.target.value)}
      >
        <MenuItem value="co1" >CO1</MenuItem>
        <MenuItem value="co2" >CO2</MenuItem>
        <MenuItem value="co3" >CO3</MenuItem>
        <MenuItem value="co4" >CO4</MenuItem>
        </Select>
    </FormControl>
        </td>
        <td  className='inputs_container'>
        <FormControl style={{ 
         margin:"0px",padding: "0px", width: "100%",height: "100%",whiteSpace: "nowrap",border: "none",textAlign: "center",fontSize: "20px",borderRadius: '4px 4px 0px 0px' }} >
      <InputLabel id="dropdown-label" >{allMarks.length > 0 ? allMarks[1].question_one_co : "select CO"}</InputLabel>
      <Select
        labelId="dropdown-label"
        id="dropdown"
        value={co2}
        onChange={(e) => setco2(e.target.value)}
      >
        <MenuItem value="co1" >CO1</MenuItem>
        <MenuItem value="co2" >CO2</MenuItem>
        <MenuItem value="co3" >CO3</MenuItem>
        <MenuItem value="co4" >CO4</MenuItem>
        </Select>
    </FormControl>
        </td>
        <td  className='inputs_container'>
        <FormControl style={{ 
         margin:"0px",padding: "0px", width: "100%",height: "100%",whiteSpace: "nowrap",border: "none",textAlign: "center",fontSize: "20px",borderRadius: '4px 4px 0px 0px' }} >
      <InputLabel id="dropdown-label" >{allMarks.length > 0 ? allMarks[2].question_one_co : "select CO"}</InputLabel>
      <Select
        labelId="dropdown-label"
        id="dropdown"
        value={co3}
        onChange={(e) => setco3(e.target.value)}
      >
        <MenuItem value="co1" >CO1</MenuItem>
        <MenuItem value="co2" >CO2</MenuItem>
        <MenuItem value="co3" >CO3</MenuItem>
        <MenuItem value="co4" >CO4</MenuItem>
        </Select>
    </FormControl>
        </td>
        <td  className='inputs_container'>
        <FormControl style={{ 
         margin:"0px",padding: "0px", width: "100%",height: "100%",whiteSpace: "nowrap",border: "none",textAlign: "center",fontSize: "20px",borderRadius: '4px 4px 0px 0px' }} >
      <InputLabel id="dropdown-label" >{allMarks.length > 0 ? allMarks[3].question_one_co : "select CO"}</InputLabel>
      <Select
        labelId="dropdown-label"
        id="dropdown"
        value={co4}
        onChange={(e) => setco4(e.target.value)}
      >
        <MenuItem value="co1" >CO1</MenuItem>
        <MenuItem value="co2" >CO2</MenuItem>
        <MenuItem value="co3" >CO3</MenuItem>
        <MenuItem value="co4" >CO4</MenuItem>
        </Select>
    </FormControl>
        </td>
        <td  className='inputs_container'>
        <FormControl style={{ 
         margin:"0px",padding: "0px", width: "100%",height: "100%",whiteSpace: "nowrap",border: "none",textAlign: "center",fontSize: "20px",borderRadius: '4px 4px 0px 0px' }} >
      <InputLabel id="dropdown-label" >{allMarks.length > 0 ? allMarks[4].question_one_co : "select CO"}</InputLabel>
      <Select
        labelId="dropdown-label"
        id="dropdown"
        value={co5}
        onChange={(e) => setco5(e.target.value)}
      >
        <MenuItem value="co1" >CO1</MenuItem>
        <MenuItem value="co2" >CO2</MenuItem>
        <MenuItem value="co3" >CO3</MenuItem>
        <MenuItem value="co4" >CO4</MenuItem>
        </Select>
    </FormControl>
        </td>
        <td  className='inputs_container'>
        <FormControl style={{ 
         margin:"0px",padding: "0px", width: "100%",height: "100%",whiteSpace: "nowrap",border: "none",textAlign: "center",fontSize: "20px",borderRadius: '4px 4px 0px 0px' }} >
      <InputLabel id="dropdown-label" >{allMarks.length > 0 ? allMarks[5].question_one_co : "select CO"}</InputLabel>
      <Select
        labelId="dropdown-label"
        id="dropdown"
        value={co6}
        onChange={(e) => setco6(e.target.value)}
      >
        <MenuItem value="co1" >CO1</MenuItem>
        <MenuItem value="co2" >CO2</MenuItem>
        <MenuItem value="co3" >CO3</MenuItem>
        <MenuItem value="co4" >CO4</MenuItem>
        </Select>
    </FormControl>
        </td>
        <td  className='inputs_container'>
        <FormControl style={{ 
         margin:"0px",padding: "0px", width: "100%",height: "100%",whiteSpace: "nowrap",border: "none",textAlign: "center",fontSize: "20px",borderRadius: '4px 4px 0px 0px' }} >
      <InputLabel id="dropdown-label" >{allMarks.length > 0 ? allMarks[6].question_one_co : "select CO"}</InputLabel>
      <Select
        labelId="dropdown-label"
        id="dropdown"
        value={co7}
        onChange={(e) => setco7(e.target.value)}
      >
       <MenuItem value="co1" >CO1</MenuItem>
        <MenuItem value="co2" >CO2</MenuItem>
        <MenuItem value="co3" >CO3</MenuItem>
        <MenuItem value="co4" >CO4</MenuItem>
        </Select>
    </FormControl>
        </td>
        <td  className='inputs_container'>
        <FormControl style={{ 
         margin:"0px",padding: "0px", width: "100%",height: "100%",whiteSpace: "nowrap",border: "none",textAlign: "center",fontSize: "20px",borderRadius: '4px 4px 0px 0px' }} >
      <InputLabel id="dropdown-label" >{allMarks.length > 0 ? allMarks[7].question_one_co : "select CO"}</InputLabel>
      <Select
        labelId="dropdown-label"
        id="dropdown"
        value={co8}
        onChange={(e) => setco8(e.target.value)}
      >
        <MenuItem value="co1" >CO1</MenuItem>
        <MenuItem value="co2" >CO2</MenuItem>
        <MenuItem value="co3" >CO3</MenuItem>
        <MenuItem value="co4" >CO4</MenuItem>
        </Select>
    </FormControl>
        </td>
        <td  className='inputs_container'>
        <FormControl style={{ 
         margin:"0px",padding: "0px", width: "100%",height: "100%",whiteSpace: "nowrap",border: "none",textAlign: "center",fontSize: "20px",borderRadius: '4px 4px 0px 0px' }} >
      <InputLabel id="dropdown-label" >{allMarks.length > 0 ? allMarks[8].question_one_co : "select CO"}</InputLabel>
      <Select
        labelId="dropdown-label"
        id="dropdown"
        value={co9}
        onChange={(e) => setco9(e.target.value)}
      >
       <MenuItem value="co1" >CO1</MenuItem>
        <MenuItem value="co2" >CO2</MenuItem>
        <MenuItem value="co3" >CO3</MenuItem>
        <MenuItem value="co4" >CO4</MenuItem>
        </Select>
    </FormControl>
        </td>
        <td  className='inputs_container'>
        <FormControl style={{ 
         margin:"0px",padding: "0px", width: "100%",height: "100%",whiteSpace: "nowrap",border: "none",textAlign: "center",fontSize: "20px",borderRadius: '4px 4px 0px 0px' }} >
      <InputLabel id="dropdown-label" >{allMarks.length > 0 ? allMarks[9].question_one_co : "select CO"}</InputLabel>
      <Select
        labelId="dropdown-label"
        id="dropdown"
        value={co10}
        onChange={(e) => setco10(e.target.value)}
      >
        <MenuItem value="co1" >CO1</MenuItem>
        <MenuItem value="co2" >CO2</MenuItem>
        <MenuItem value="co3" >CO3</MenuItem>
        <MenuItem value="co4" >CO4</MenuItem>
        </Select>
    </FormControl>
        </td> 
      
    </tr>
  

{
// AllStudents.map((student, studentIndex) => (
//   <tr key={student.id}>
//     <td>{student.roll_number}</td>
//     <td>{student.register_number}</td>
//     <td>{student.name}</td>
//     {Array.from({ length: 10 }, (_, markIndex) => (
//       <td className='inputs_container' key={markIndex}>
//         <input
//           type="number"
//           className='inputs'
//           onChange={(e) => handleMarkChange(e.target.value, studentIndex, markIndex)}
//         />
//       </td>
//     ))}
//   </tr>
// ))

// AllStudents.map((student, studentIndex) => (
//   <tr key={student.id}>
//     <td>{student.roll_number}</td>
//     <td>{student.register_number}</td>
//     <td>{student.name}</td>
//     {Array.from({ length: 10 }, (_, markIndex) => (
//       <td className='inputs_container' key={markIndex}>
//         <input
//           type="number"
//           className='inputs'
//           placeholder={maindata[studentIndex][`question_${markIndex + 1}`]}
//           onChange={(e) => handleMarkChange(e.target.value, studentIndex, markIndex)}
//         />
//       </td>
//     ))}
//   </tr>
// ))

AllStudents.map((student, studentIndex) => 
  <tr key={student.id}>
    <td>{student.roll_number}</td>
    <td>{student.register_number}</td>
    <td>{student.name}</td>
    {Array.from({ length: 10 }, (_, markIndex) => {
      const questionKey = `question_${markIndex + 1}`;
      const placeholderValue = allMarks[studentIndex]?.[questionKey] ?? "";
      return (
        <td className='inputs_container' key={markIndex}>
          <input
            type="number"
            className='inputs'
            placeholder={placeholderValue}
            onChange={(e) => handleMarkChange(e.target.value, studentIndex, markIndex)}
          />
        </td>
      );
    })}
  </tr>
)
    } 
</table>


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
            marginLeft: '760px',
            paddingRight: "10px",
            paddingTop: "10px",
            marginBottom:'20px',
            paddingBottom: "10px",
            textTransform: "capitalize",
          }} onClick={addmark} >add</Button>
</div>
:
""
}

       
{/* <div class="grid-container">
  <div class="cell" rowspan="4"><input className='in'></input></div>
  <div class="cell" rowspan="4">2</div>
  <div class="cell" rowspan="4">3</div>
  <div class="cell" colspan="10">4</div>
</div> */}









        
      </div>
   
    

    </div>
  );
};

export default Teacher;
