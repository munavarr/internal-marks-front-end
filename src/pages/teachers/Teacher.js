import React, { useState } from 'react'
import { Navigate, useNavigate, Link } from "react-router-dom";
import "../teachers/Teacher.css";
import arrow from "../../assets/icon.png";
import avatar1 from "../../assets/avatar1.png";
import Button from '@mui/material/Button';





const Teacher = () => {

  const thedata = [{rolno : 1,regno:"ddd",name :'ssrr'},{rolno : 2,regno:"ee",name :'ssrr'},{rolno : 3,regno:"ttt",name :'ssrr'}]

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/")
  };

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
        <p className='studentsaddedtext1'>No students added yet!</p>

        <table>
    <tr>
        <td rowspan="4">no</td>
        <td rowspan="4">regno</td>
        <td rowspan="4">name</td>
        <td colspan="10">Question Number</td>
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
        <td colspan="10">CO Value</td>
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
</table>




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
