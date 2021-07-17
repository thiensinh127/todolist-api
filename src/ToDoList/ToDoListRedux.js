import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskApi, checkTaskApi, delTaskApi, getTaskListApi, recheckTaskApi } from '../redux/action/ToDoListAction';
import "./style.css";
import hinh from "./X2oObC4.png";
import DateTime from "./DateTime"
import Loading from './Loading';
export default function ToDoListRedux(props) {
    const{taskList}=useSelector(state =>state.ToDoListReducer);
    const dispatch = useDispatch();
    const [state, setstate] = useState({
        errors:{
            taskName:''
        },
        values:{
            taskName:''
        },
        isValid:false
    });
  
    const handleChange=(e)=>{
        let isValid=true
        let {name,value}=e.target;
        let newValues={...state.values};
        newValues={...newValues, [name]:value};
        let newErrors={...state.errors};
        let regexString = /^[a-z A-Z]+$/;
        if(!regexString.test(value) || value.trim()=== "" ){
            newErrors[name]=name + " invalid !";
            isValid=false;
        }else{
            newErrors[name]="";
        }
        setstate({
            ...state,
            values:newValues,
            errors:newErrors,
            isValid:isValid,

        });
      }
    
    const getTaskList =()=>{
       dispatch(getTaskListApi());

    };

    useEffect(() => {
        getTaskList()
          
    }, []);
    const getTaskToDo =()=>{
        return taskList.filter(item=>!item.status).map((task,index)=>{
             return (
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
             )
         })
     };
    const getTaskToDoDone =()=>{
         return taskList.filter(item=>item.status).map((task,index)=>{
              return (
                      <li key={index}>
                          <span>{task.taskName}</span>
                          <div className="buttons">
                              <button type="button" className="remove" onClick={()=>{
                                  delTask(task.taskName)
                              }}>
                                  <i className="fa fa-trash-alt"/>
                              </button>
                              <button type="button" className="complete" onClick={()=>{
                                  reCheckTask(task.taskName)
                              }} >
                                  <i className="far fa-undo"/>
                                  <i className="fas fa-undo"/>
                              </button>
                          </div>
                      </li>
              )
          })
    };
    const reCheckTask =(taskName)=>{
      dispatch(recheckTaskApi(taskName))
    };

    const checkTask =(taskName)=>{
      dispatch(checkTaskApi(taskName));
    };

    const delTask =(taskName)=>{
      dispatch(delTaskApi(taskName))
    };
  
    const addTask=(e)=>{
        e.preventDefault();
        console.log(state.values.taskName);
        console.log(state.isValid)
        if(state.isValid){
            dispatch(addTaskApi(state.values.taskName));
            state.values.taskName="";
        };
      
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
                            <p><DateTime/></p>
                        </div>
                        <div className="card__add">
                            <input name="taskName" onChange={handleChange} value={state.values.taskName} id="newTask"  type="text" placeholder="Enter an activity..." />
                            <button type="submit" id="addItem" onClick={addTask}><i className="fa fa-plus" /></button>
                        </div>
                     
                        <div className="error"> {state.errors.taskName}</div>
                        <div id="notiInput" className="alert-danger" style={{display: 'none'}}/>
                        <div className="card__todo">
                            <ul className="todo" id="todo">{getTaskToDo()}</ul>
                            <ul className="todo" id="completed"> {getTaskToDoDone()}</ul>
                        </div>
                    </div>
                </div>
                <Loading/>
            </form>
            
    )
}

