import React,{Component} from 'react'

class PropsClass extends React.Component{

    render(){
        // console.log(this.props)
        return <div>
            <h2>1.Name:{this.props.name}</h2>
            <h2>2.Coctact Number:{this.props.number}</h2>
            <h2>3.Email address:{this.props.email}</h2>
        </div>
    }

}
export default PropsClass;