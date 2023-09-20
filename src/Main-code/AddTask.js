import React,{useState} from 'react'
import DivLabelInput from '../component/DivLabelInput';
import TextArea from '../component/TextArea';
import { Link, Navigate, useNavigate } from 'react-router-dom';


const formStyle={
    margin:"auto",
    width:"60%",
    alignItems: "center"
  }
function AddTask() {
    
    const[task, setTask]=useState("");
    const[assign, setAssign]=useState("");
    const[desc, setDesc]=useState("");
    const Navigate=useNavigate();

    const handleAddInput=(event)=>{
        event.preventDefault();
       const task_status="To-do";
        const data={task, assign, desc,task_status};
    
        fetch("http://localhost:8000/posts",{
          method:"POST",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(data)
        }).then((res)=>{
          Navigate("/");
          alert("sucessfully save");
          console.log(res);
        }).catch((err)=>{
          console.log(err.message)
        })
        
      }
  



  return (
    <>
<h2 className='text-center text-decoration-underline'>Create New Task</h2>

<form className='bg-dark py-3 px-3' style={formStyle} onSubmit={handleAddInput}>
 <DivLabelInput name="Task Name" func={setTask} val={task} />
 <DivLabelInput name="Assinged To" func={setAssign} val={assign} />
 <TextArea name="Description" func={setDesc}  val={desc} />
 <button type="submit" className='btn btn-primary mx-3'>Add Task</button>
 <Link to="/" className='btn btn-danger'>back</Link>

</form>
    </>
  )
}

export default AddTask
