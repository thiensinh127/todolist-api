import React,{Component} from "react";
class DateTime extends Component {
    constructor() {
       super();
       this.state = {
         curTime : null
       }
     }
     componentDidMount() {
       setInterval( () => {
         this.setState({
           curTime : new Date().toLocaleString()
         })
       },1000)
     }
    render() {
         return(
           <div>
             <p>{this.state.curTime}</p>
           </div>
         );
       }
     }

export default DateTime