import React,{useState} from 'react'
import DivLabelInput from './DivLabelInput'
import TextArea from './TextArea'
import Button from './Button'

function FormDiv() {
    const tasklist=[{task:"Remove button", assign:"Rahul", desc:"remove left corner button present in signup page"}];

    const[Item,setItem]=useState(tasklist);
    const[task, setTask]=useState("");
    const[assign, setAssign]=useState("");
    const[desc, setDesc]=useState("");


    const handleInputTask=(event)=>{
           setTask(event.target.value);
           console.log(task);
           
    };
    const handleInputAssign=(event)=>{
        setAssign(event.target.value);
        console.log(assign);
        
 };
 const handleInputDesc=(event)=>{
    setDesc(event.target.value);
    console.log(desc);
    
};

    const handleAddInput=(event)=>{
        event.preventDefault();
       Item.task=task;
       Item.assign=assign;
       Item.desc=desc;
       
       if(Item!==''){
        setItem((prev)=>[...prev,Item]);
        setTask('');
        setAssign('');
        setDesc('');
      }
        console.log(Item);

    }
// const handledelete=(id)=>{
//     const newArray=Item.filter((ele,indx)=>{
//         console.log(ele);
//           return indx!==id;
//     })
//     setItem(newArray);

// }

  return (
    <>
<h2 className='text-center text-decoration-underline'>Project Task List</h2>

    <form className='bg-dark py-3 px-3'>
   <DivLabelInput name="Task Name" func={handleInputTask} val={task} />
   <DivLabelInput name="Assinged To" func={handleInputAssign} val={assign} />
   <TextArea name="Description" func={handleInputDesc}  val={desc} />
   <Button name="Add Task" func={handleAddInput} clss="btn btn-primary" />
</form>
    </>
  )
}

export default FormDiv
