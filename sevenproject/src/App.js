
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import { useState } from 'react';
import {Routes, Route} from "react-router-dom";

function App() {
  const company = "DevTown";
  const [name, setName] = useState("rohan");


  return (
    <Routes>
      <Route path='/' element={<ClassComponent/>}/>
      <Route path='/functional-comp' element={<FunctionalComponent />} />
      <Route path='/functional-comp' element={<FunctionalComponent />} />
    </Routes>
    // <div className="App">
    //   <h2>hello world!</h2>
    //   <ClassComponent />
    //   <FunctionalComponent name={name} age={12} company={company} setName={setName}/>
    //   {/* <FunctionalComponent /> */}
    // </div>
  );
}

export default App;
