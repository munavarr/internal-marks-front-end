import React, { useState } from 'react'
import { Navigate, useNavigate, Link } from "react-router-dom";
import "../teachers/Teacher.css";
import arrow from "../../assets/icon.png";
import avatar1 from "../../assets/avatar1.png";
import Button from '@mui/material/Button';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addMarks, getAllExams, getAllStudentsList } from '../../features/adminSlice';








const Teacher = () => {


const [exam,setexam] = useState()
console.log(exam)
// const [mark,setmark] = useState([])
const teacherid = localStorage.getItem("id");


const dispatch = useDispatch();

useEffect(() => {
  dispatch(getAllExams());
  dispatch(getAllStudentsList());
}, [ dispatch ]);

const { AllExams,AllStudents } = useSelector(
  (state) => ({
    AllExams: state.admin.allExams,
    AllStudents: state.admin.AllStudents
  })
);


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

const [marks, setMarks] = useState([]);

const handleMarkChange = (value, studentIndex, markIndex) => {
  const updatedMarks = [...marks];
  // updatedMarks[studentIndex][markIndex] = parseFloat(value);
  // setMarks(updatedMarks);

  if (!updatedMarks[studentIndex]) {
    updatedMarks[studentIndex] = [];
  }

  // updatedMarks[studentIndex][markIndex] = parseFloat(value);
  // setMarks(updatedMarks);

   // Set the value to 0 if it's empty or not a number.
   updatedMarks[studentIndex][markIndex] = value.trim() === '' || isNaN(parseFloat(value)) ? 0 : parseFloat(value);
   setMarks(updatedMarks);
  
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
    question_one: studentMarks ? studentMarks[0] :  0,
    question_one_co:"kk",
    question_two: studentMarks ? studentMarks[1] : 0,
    question_two_co : "q",
    question_three: studentMarks ? studentMarks[2] : 0,
    question_three_co :"kk",
    question_four: studentMarks ? studentMarks[3] : 0,
    question_four_co :"kk",
    question_five :studentMarks ? studentMarks[4] : 0,
    question_five_co :"kk",
    question_six : studentMarks ? studentMarks[5] : 0,
    question_six_co :"kk",
    question_seven : studentMarks ? studentMarks[6] : 0,
    question_seven_co :"kk",
    question_eight : studentMarks ? studentMarks[7] : 0,
    question_eight_co :"kk",
    question_nine : studentMarks ? studentMarks[8] : 0,
    question_nine_co :"kk",
    question_ten : studentMarks ? studentMarks[9] : 0,
    question_ten_co :"kk",
  };
});

for (let i = 0; i < thedata.length; i++) {
  console.log(thedata[i]);
}


console.log(thedata)
// console.log(thedatas)
console.table(marks)
const lov = [[],[2,3,2]]
console.log(lov)

console.log(AllExams)
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/")
  };


 const addmark =()=>{
  dispatch(addMarks(thedata));
 }


  
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
        <p className='teachername1'>Shylaja KC</p>
        <p className='teachersubject1'>Computer Architecture</p>
       { !AllStudents ? <p className='studentsaddedtext1'>No students added yet!</p> :
      
        <div className='dropdownbox'>
        <FormControl style={{ width: '330px', marginTop: '25px',borderRadius: '4px 4px 0px 0px' }} >
      <InputLabel id="dropdown-label" >Select Exam</InputLabel>
      <Select
        labelId="dropdown-label"
        id="dropdown"
        value={exam}
        // onChange={handleChange}
        
        onChange={(e) => setexam(e.target.value)}
      >
        {AllExams.map((subject)=>
        <MenuItem value={subject.id}>{subject.name}</MenuItem>
       ) }
      </Select>
    </FormControl>
    </div> }
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
        <td colspan="10"><p className='tablefields'>CO Value</p></td>
    </tr>
    <tr>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td className='inputs_container'><input type="number"  className='inputs'/></td>
        <td>11</td>
        <td>12</td>
        <td>13</td>
        <td>14</td>
        <td>15</td>
        <td>16</td>
    </tr>
  

{
AllStudents.map((student, studentIndex) => (
  <tr key={student.id}>
    <td>{student.roll_number}</td>
    <td>{student.register_number}</td>
    <td>{student.name}</td>
    {Array.from({ length: 10 }, (_, markIndex) => (
      <td className='inputs_container' key={markIndex}>
        <input
          type="number"
          className='inputs'
          onChange={(e) => handleMarkChange(e.target.value, studentIndex, markIndex)}
        />
      </td>
    ))}
  </tr>
))

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
