// import React, { useEffect } from "react";
// import { createRoot } from "react-dom/client";
// import DivBoxElement from "../components/htmlElements/DivBoxElement";
// import cssConstants from "../config/system/constants/uiConstants/cssConstants";
// import InputComponent from "./inputComponent";
// import removeLoader from "../components/loader/removeLoader";
// import ButtonComponent from "./buttonComponent";

// export default function App() {
//   const [ inputValue, setInputValue ] = React.useState("");

//   useEffect(() => {
//     setInputValue("cos(2(1+(2*6)-3))");
//     removeLoader();
//   }, []);

//   // console.log(uiValues.inputControlButtons);

//   return (
//     <>
//       <InputComponent defaultValue={inputValue}/>
//       {
//         <div className={cssConstants.divWithAllButtons}>
//           <div className={cssConstants.divWithAllBasicButtons}>
//             <div className={cssConstants.divForGroupingAdditionalAndNumbersButtons}>
//               <div className={cssConstants.divWithAdditionalControlButtons}>
// <ButtonComponent />
//               </div>
//               <div className={cssConstants.divWithNumbersButtons}>

//               </div>
//             </div>
//             <div className={cssConstants.divWithKeyControlButtons}>

//             </div>
//           </div>
//           <div className={cssConstants.divWithExtendedOperands}>

//           </div>
//         </div>
//       }
      
//     </>
//   );
// }

// const rootDiv = new DivBoxElement(cssConstants.root);

// const root = createRoot(rootDiv.element);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// document.body.appendChild(rootDiv.element);

// // ReactDOM.render(<App />, root.element);
