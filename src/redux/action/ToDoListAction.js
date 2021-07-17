import axios from "axios"
import { GET_TASK_API } from "../constants/ToDoListConstants"

export const getTaskListApi = () => {
    
    return  dispatch=>{
        return axios({
            url:"http://svcy.myclass.vn/api/ToDoList/GetAllTask",
            method:"GET",
        })
        .then((res)=>{
            dispatch({
                type:GET_TASK_API,
                taskList:res.data,
            })
        })
        .catch((err)=>{
            console.log(err.response?.data)
        });
    }
}

export const addTaskApi =(taskName)=>{
    return dispatch=>{
        return axios({
            url:"http://svcy.myclass.vn/api/ToDoList/AddTask",
            method:"POST",
            data:{taskName:taskName},
        })
        .then((res)=>{
          dispatch(getTaskListApi());
        })
        .catch((err)=>{
            alert(err.response?.data) 
         
        })
    }
}
export const delTaskApi =(taskName)=>{
    return dispatch=>{
        return axios({
            url:`http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
            method:"DELETE",
        
        })
        .then((res)=>{
        dispatch(getTaskListApi());
        })
        .catch((err)=>{
            console.log(err.response?.data) 
        
        })
    }
}
export const checkTaskApi =(taskName)=>{
    return dispatch=>{
        return axios({
            url:`http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
            method:"PUT",
        })
        .then((res)=>{
         dispatch(getTaskListApi());
        })
        .catch((err)=>{
            console.log(err.response?.data) 
        })
    }
}
export const recheckTaskApi =(taskName)=>{
    return dispatch=>{
        return axios({
            url:`http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
            method:"PUT",
           
        })
        .then((res)=>{
          dispatch(getTaskListApi());
        })
        .catch((err)=>{
            console.log(err.response?.data) 
         
        })
    }
}