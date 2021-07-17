import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios"
import hinh from "./X2oObC4.png";
import "./style.css";
export default function ToDoList() {
    const [state, setstate] = useState({
        taskList:[],
        errors:{
            taskName:''
        },
        values:{
            taskName:''
        },
      
    });
  
    const handleChange=(e)=>{
        let {name,value}=e.target;

        let newValues={...state.values};
        newValues={...newValues, [name]:value};

        let newErrors={...state.errors};
        let regexString = /^[a-z A-Z]+$/;
        if(!regexString.test(value) || value.trim()=== "" ){
            newErrors[name]=name + " invalid !";
        }else{
            newErrors[name]="";
        }
        setstate({
            ...state,
            values:newValues,
            errors:newErrors,
        })
      }
  
    const getTaskList =()=>{
        return axios({
            url:"http://svcy.myclass.vn/api/ToDoList/GetAllTask",
            method:"GET",
        })
        .then((res)=>{
            setstate({
                ...state,
                taskList:res.data
            });
        })
        .catch((err)=>{
            console.log(err.response?.data)
        })
    };

    useEffect(() => {
        getTaskList()
          
    }, []);
    const getTaskToDo =()=>{
        return state.taskList.filter(item=>!item.status).map((task,index)=>{
             return (
                 <>
                     <li key={index}>
                         <span>{task.taskName}</span>
                         <div className="buttons">
                         <button type="button" className="remove" onClick={()=>{
                                  delTask(task.taskName)
                              }}>
                                 <i className="fa fa-trash-alt"/>
                             </button>
                             <button type="button" className="complete"onClick={()=>{
                                  checkTask(task.taskName)
                              }}>
                                 <i className="far fa-check-circle"/>
                                 <i className="fas fa-check-circle"/>
                             </button>
                         </div>
                     </li>
                 </>
             )
         })
     };
    const getTaskToDoDone =()=>{
         return state.taskList.filter(item=>item.status).map((task,index)=>{
              return (
                  <>
                      <li key={index}>
                          <span>{task.taskName}</span>
                          <div className="buttons">
                              <button type="button" className="remove" onClick={()=>{
                                  delTask(task.taskName)
                              }}>
                                  <i className="fa fa-trash-alt"/>
                              </button>
                              <button className="complete" onClick={()=>{
                                  reCheckTask(task.taskName)
                              }} >
                                  <i className="far fa-undo"/>
                                  <i className="fas fa-undo"/>
                              </button>
                          </div>
                      </li>
                  </>
              )
          })
    };
    const reCheckTask =(taskName)=>{
        return axios({
            url:`http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
            method:"PUT",
           
        })
        .then((res)=>{
          alert(res.data)
          getTaskList()
        })
        .catch((err)=>{
            console.log(err.response?.data) 
         
        })
    };

    const checkTask =(taskName)=>{
        return axios({
            url:`http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
            method:"PUT",
        })
        .then((res)=>{
          alert(res.data)
          getTaskList()
        })
        .catch((err)=>{
            console.log(err.response?.data) 
        })
    };

    const delTask =(taskName)=>{
        return axios({
            url:`http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
            method:"DELETE",
           
        })
        .then((res)=>{
          alert(res.data)
          getTaskList()
        })
        .catch((err)=>{
            console.log(err.response?.data) 
         
        })
    };
    
    const addTask=(e)=>{
        e.preventDefault();
        console.log(state.values.taskName)
        return axios({
            url:"http://svcy.myclass.vn/api/ToDoList/AddTask",
            method:"POST",
            data:{taskName:state.values.taskName},
        })
        .then((res)=>{
          getTaskList()
          alert("add task success!")
        })
        .catch((err)=>{
            console.log(err.response?.data) 
         
        })
     };
   
    return (
          <form onSubmit={addTask} className="card">
                <div className="card__header">
                    <img src={hinh} alt="anhBia" />
                </div>
                {/* <h2>hello!</h2> */}
                <div className="card__body">
                    <div className="card__content">
                        <div className="card__title">
                            <h2>My Tasks</h2>
                            <p>September 9,2020</p>
                        </div>
                        <div className="card__add">
                            <input name="taskName" onChange={handleChange} id="newTask"  type="text" placeholder="Enter an activity..." />
                            <button type="submit" id="addItem" onClick={addTask}>
                            <i className="fa fa-plus" />
                            </button>
                        </div>
                        <div className="error"> {state.errors.taskName}</div>
                        <div id="notiInput" className="alert-danger" style={{display: 'none'}}/>
                        <div className="card__todo">
                            <ul className="todo" id="todo">{getTaskToDo()}</ul>
                            <ul className="todo" id="completed"> {getTaskToDoDone()}</ul>
                        </div>
                    </div>
                </div>
            </form>
    )
}
