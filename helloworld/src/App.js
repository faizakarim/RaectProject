import logo from './logo.svg';
import './App.css';
import Classcomponent from'./Components/Classcomponent'
// import FunctionalC from'./Components/FunctionalC'
import Button from './Components/FunctionalC'
import Inline from './Inline'
import Infile from './InFile'
import External from './External'
import StyledC from './'
import PropsClass from './PropsClass'
import Propsfunction from './PropsFunction'
import Stateclass from './Components/StateClass'
let text='welcome to Reactjs Framework';
let object={
one:'First one',
two:'Second one'
}
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <h1 style={{color:'green'}}>Hello World , Welcome to react js</h1>
        <h1 style={{backgroundColor:"red",fontsize:"24px"}}>styling</h1>
        <button>{text}</button>
        <h2>{object.one}</h2> */}
      {/* <Classcomponent></Classcomponent> */}
      {/* <FunctionalC/> */}
      {/* < Button/> */}
      <div>
        <div>
          {/* <img src={logo} width='200'/> */}
          {/* <Inline/>
            <Infile/> */}
          {/* <External/> */}
          {/* <PropsClass name="Faiza Karim" number="0346556865" gmail="faizakarim@gmail.com" />
          <br />
          <PropsClass name="Hira Abbas" number="0310384746" gmail="abbashira@gmail.com"/>
          <br />
          <PropsClass name="Norina Akhtar" number="0357567356" email="norinaakhar@gmail.com" /> */}
          {/* <Propsfunction lang="Javascript" teach="web Development" />
          <br />
          <Propsfunction lang="Andriod Development" teach="Java" />
          <br />
          <Propsfunction lang="C#" teach="web Development " />
          <br /> */}
          <Stateclass/>
        </div>
      </div>

      {/* </header> */}
    </div>
  ); 
} 

export default App;
