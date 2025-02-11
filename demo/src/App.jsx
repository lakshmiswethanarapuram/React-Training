// import Navbar from "./components?Navbar";
// import Main from "./components/Main"
// import Sidebar1 from "./componets/Sidebar1";
// import Sidebar2 from "./components/Sidebar2";
// import Footer from "./components/Footer";
// const App=()=>{
//     return (
//         <div className="app">
//             <Navbar/>
//             <Main></Main>

//             <div className="sidebar">
//                 <Sidebar1/>
//                 <Sidebar2/>
//             </div>
//             <Footer/>
//         </div>
//     )
// }
// export default App;

// import React, {Component } from 'react';
// import CBCPropsex1 from './propsexample/CBCPropsex1';

// class App extends Component {
//     render() {
//         return (
//             <div>App
//                 <hr/>
//                 <CBCPropsex1
//                 username="pooja"
//                 age={25}
//                 desig={["developer", "tester"]}
//                 userDetails={{city:"Hyd" ,area:"Maisammaguda"}}
//                 sendFun={function(){alert("Hi i m from parent component")}}
//                 />

//                  </div>
//         )
//     }
// }
// export default App;

// import React from 'react'
// import PropsChildren from './propsexample/PropsChildren'
// import ChildProps from './propsexample/ChildProps'

// const App =() => {
//     return(
//         <div> 
            
//             <PropsChildren username="pooja" company="meta">
//                 <h1>This data is passed as props children</h1>
//                 <ChildProps/>
//             </PropsChildren>
//         </div>

//     )
// }
// export default App

// import React, { useState } from 'react'
// const FBCState =() => {
//     const [value, setValue] =useState("MRU");
//     let changeName=()=>{
//         setValue("Mallareddy university");
//     }

//     return (
//       <div>FBCState
//       <h1>{value}</h1>
//       <button onClick={changeName}>change state</button>
//       </div>
//     )
//   }
// export default FBCState
// import React from 'react'
// import CBCStateEx from './components/propsexample/stateexamples/CBCStateEx'
// import FBCState from './components/propsexample/stateexamples/FBCStateEx'

// const App = () => {
//   return (
//     <div>
//       <CBCStateEx /><hr />
//       <FBCState />
//     </div>
//   )
// }

// export default App

import React from 'react'
// import UseEffect from './hooks/UseEffect'
import FBCStateEx from './stateexamples/FBCStateEx'
import RefExamples from './hooks/RefExamples'
// import MyForm from './components/MyForm'

const App = () => {
  return (
    <div>
      <RefExamples/>
      <FBCStateEx />
      {/* <MyForm/>
      <UseEffect/> */}
    </div>
  )
}

export default App


