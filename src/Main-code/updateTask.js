import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import DivLabelInput from '../component/DivLabelInput';
import TextArea from '../component/TextArea';

function UpdateTask() {
    const {id}=useParams();
    const Navigate=useNavigate();
    // console.log("I am Here"+parseInt(d));


    
const formStyle={
    margin:"auto",
    width:"60%",
    alignItems: "center"
  }

  const[task_status, setStatus]=useState("");
  const[task, setTask]=useState("");
  const[assign, setAssign]=useState("");
  const[desc, setDesc]=useState("");

  useEffect(()=>{
    fetch("http://localhost:8000/posts/"+id).then((res)=>{
      return res.json();
    }).then((resp)=>{
      setTask(resp.task);
      setDesc(resp.desc);
      setAssign(resp.assign);
      console.log(resp);
    }).catch((err)=>{
      console.log(err.message)
    })
  },[]);

  const handleupdate=(event)=>{
    event.preventDefault();
    console.log("save");
  const data={id,task, assign, desc,task_status};
  fetch("http://localhost:8000/posts/"+id,{
    method:"PUT",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(data)
  }).then((res)=>{
    Navigate("/");
    alert("sucessfully update");
    console.log(res);
  }).catch((err)=>{
    console.log(err.message)
  })
    

}

const handleStatus=(e)=>{
  setStatus(e.target.value);
}

const optionList=[
  {task_status:"To-do"},
  {task_status:"Progress"},
  {task_status:"Done"}

];

  return (
    <>
    <h2 className='text-center text-decoration-underline'>Update Task</h2>
    
    <form className='bg-dark py-3 px-3' style={formStyle} onSubmit={handleupdate}>
     <DivLabelInput name="Task ID"  val={id} />
     <DivLabelInput name="Task Name" func={setTask} val={task} />
     <DivLabelInput name="Assinged To" func={setAssign} val={assign} />
     <TextArea name="Description" func={setDesc}  val={desc} />
     <select onChange={handleStatus}>
      {
        optionList.map((ele)=>{
          return <option value={ele.task_status}>{ele.task_status}</option>
        })
      }
     </select>
     <button type="submit" className='btn btn-primary mx-3'>Add Task</button>
     <Link to="/" className='btn btn-danger'>back</Link>
    
    </form>
        </>
  )
}

export default UpdateTask
