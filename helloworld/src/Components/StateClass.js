import React ,{Component} from 'react';

class Stateclass extends React.Component{
    constructor(props){
       super(props)
       this.state = {
         message: "Welcome to React Js World",
       };
    }
    handleButton(){
        this.setState({
            message:"Thank you for coming"
        })
    }
      render(){
          return (
            <div>
              <h2>{this.state.message}</h2>
              <br />
              <br />
              <br />
              <br />
              <button onClick={()=>this.handleButton()}>Click Me</button>
            </div>
          );
      }
}
export default Stateclass; 