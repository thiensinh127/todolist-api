import axios from "axios"
import { GET_TASK_API } from "../constants/ToDoListConstants"

export const getTaskListApi = () => {
    
    return  dispatch=>{
        dispatch(showLoading())
        return axios({
            url:"http://svcy.myclass.vn/api/ToDoList/GetAllTask",
            method:"GET",
        })
        .then((res)=>{
            dispatch({
                type:GET_TASK_API,
                taskList:res.data,
            });
            dispatch(hideLoading());
        })
        .catch((err)=>{
            console.log(err.response?.data)
            dispatch(hideLoading())
        });
    }
}

export const addTaskApi =(taskName)=>{
    return dispatch=>{
        dispatch(showLoading())
        return axios({
            url:"http://svcy.myclass.vn/api/ToDoList/AddTask",
            method:"POST",
            data:{taskName:taskName},
        })
        .then((res)=>{
          dispatch(getTaskListApi());
          dispatch(hideLoading());
        })
        .catch((err)=>{
            alert(err.response?.data) 
            dispatch(hideLoading())
        })
    }
}
export const delTaskApi =(taskName)=>{
    return dispatch=>{
        dispatch(showLoading())
        return axios({
            url:`http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
            method:"DELETE",
        
        })
        .then((res)=>{
        dispatch(getTaskListApi());
        dispatch(hideLoading());
        })
        .catch((err)=>{
            console.log(err.response?.data) 
            dispatch(hideLoading())
        })
    }
}
export const checkTaskApi =(taskName)=>{
    return dispatch=>{
        dispatch(showLoading())
        return axios({
            url:`http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
            method:"PUT",
        })
        .then((res)=>{
         dispatch(getTaskListApi());
         dispatch(hideLoading())
        })
        .catch((err)=>{
            console.log(err.response?.data) 
            dispatch(hideLoading())
        })
    }
}
export const recheckTaskApi =(taskName)=>{
    return dispatch=>{
        dispatch(showLoading())
        return axios({
            url:`http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
            method:"PUT",
           
        })
        .then((res)=>{
          dispatch(getTaskListApi());
          dispatch(hideLoading())
        })
        .catch((err)=>{
            console.log(err.response?.data) 
            dispatch(hideLoading())
        })
    }
}

export const showLoading =()=>dispatch=>{
    dispatch({
        type:"SHOW_LOADING"
    });
}
export const hideLoading =()=>dispatch=>{
    dispatch({
        type:"HIDE_LOADING"
    });
}