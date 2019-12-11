// import exoduslogo from "../assets/exoduslogo.png"
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// import { useSide } from "../hooks"
// import Icon from "../lib/Icon"
// import React from "react"
// import Header from "./Admin"

// export default props => {
//   const { visible, toggle } = useSide()
//   return (
//     <div>
//       <Header>
//         <div className="logo">
//           <img className="logoa" src={exoduslogo} />
//         </div>

//         <div className={visible ? "Side open" : "Side"}>
//           <div className="toggle" onClick={e => toggle()}>
//             <Icon icon="bars" />
//           </div>
//           <div className="Form-links">
//             <Link to="/">
//               <p>Home</p>
//             </Link>
//             <Link to="/Assets">
//               <p>Assets</p>
//             </Link>
//             <Link to="/CareTaker">
//               <p>CareTaker</p>
//             </Link>
//             <Link to="/Gifts">
//               <p>Gifts</p>
//             </Link>
//             <Link to="/Thoughts">
//               <p>Thoughts</p>
//             </Link>
//           </div>
//         </div>
//       </Header>
//     </div>
//   )
// }
