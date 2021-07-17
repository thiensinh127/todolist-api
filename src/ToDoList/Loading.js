import React from 'react';
import { useSelector } from 'react-redux';
import anhloading from "../assets/img/Spinner-1s-200px (1).gif";
import "./style.css";

export default function Loading() {
    const {loading}=useSelector(state=>state.ToDoListReducer);
 
    if (!loading) return null;
    return (
        <div className="container">
            <img className="imgLoading" src={anhloading} alt="loading"/>
        </div>
    )
}
