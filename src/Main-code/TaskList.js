import React, {useState,useEffect} from 'react'
import ThTag from '../component/ThTag';
import Button from '../component/Button';
import { Link, Navigate, useNavigate } from "react-router-dom";



function TaskList() {
 

  const[Item,setItem]=useState(null);
  const Navigate=useNavigate();

 


  useEffect(()=>{
    fetch("http://localhost:8000/posts").then((res)=>{
      console.log("data loaded");
      return res.json(); // convert data into json
    }).then((resp)=>{
      setItem(resp);
      console.log(resp);
    }).catch((err)=>{
      console.log(err);
    })
  },[])

 


//   const handleInputTask=(event)=>{
//          setTask(event.target.value);
//          console.log(task);
         
//   };
//   const handleInputAssign=(event)=>{
//       setAssign(event.target.value);
//       console.log(assign);
      
// };
// const handleInputDesc=(event)=>{
//   setDesc(event.target.value);
//   console.log(desc);
  
// };

  // const handleAddInput=(event)=>{
  //     event.preventDefault();
  //    Item.task=task;
  //    Item.assign=assign;
  //    Item.desc=desc;
     
  //    if(Item!==''){
  //     setItem((prev)=>[...prev,Item]);
  //     setTask('');
  //     setAssign('');
  //     setDesc('');
  //   }
  //     console.log(Item);

  // }

//   const handleAddInput=(event)=>{
//     event.preventDefault();
  
//     const data={task, assign, desc};

//     fetch("http://localhost:8000/posts",{
//       method:"POST",
//       headers:{"content-type":"application/json"},
//       body:JSON.stringify(data)
//     }).then((res)=>{
//       Navigate("/");
//       // alert("sucessfully save");
//       console.log(res);
//     }).catch((err)=>{
//       console.log(err.message)
//     })
    
//   }
const handledelete=(id)=>{
  if(window.confirm("Do you Want to delete? id:"+id)){
  fetch("http://localhost:8000/posts/"+id,{
    method:"DELETE"  
  }).then((res)=>{
    alert("Remove sucessfully");
   window.location.reload();
  }).catch((err)=>{
    console.log(err.message)
  })

}

}


const handleupdate=(taskId)=>{
Navigate("/task/"+taskId);
}

//Form Style css
const formStyle={
  margin:"auto",
  width:"60%",
  alignItems: "center"
}

const tableStyle={
  margin:"auto",
  width:"90%",
  alignItems: "center"
}

const statusColor=[
  {task_status:"To-do",colr:"bg-warning"},
  {task_status:"progress",colr:"bg-danger"},
  {task_status:"Done",colr:"bg-primary"},
]

return (
<>

<div style={formStyle}>
<h2 className='text-center text-decoration-underline'>Project Task List</h2>
<Link to="task" className='btn btn-primary'>Add Task (+)</Link>
</div>



<table className="table my-3" style={tableStyle}>
<thead className='bg-info'>
  <tr >
  <ThTag name="id" clss="bg-info"/>
  <ThTag name="Task" clss="bg-info"/>
  <ThTag name="Assinged To" clss="bg-info"/>
  <ThTag name="Description" clss="bg-info"/>
  <ThTag name="Status" clss="bg-info"/>
  <ThTag name="Delete" clss="bg-info"/>
  <ThTag name="update" clss="bg-info"/>
  </tr>
</thead>

   {Item && Item.map((ele)=>{
          return(
          <tr  key={ele.id}>
          <ThTag name={ele.id} />
          <ThTag name={ele.task}/>
          <ThTag name={ele.assign} />
          <ThTag name={ele.desc} />
          <ThTag name={ele.task_status}  />
          
           
          <ThTag name={<Button name="Delete" func={()=>handledelete(ele.id)} clss="badge bg-danger text-light "  />} />
          <ThTag name={<Button name="Update" func={()=>handleupdate(ele.id)} clss="badge bg-primary text-light "  />} />            
          </tr>
          )
      })}
  </table> 

</>
)}

export default TaskList