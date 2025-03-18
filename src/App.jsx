// import React from "react";
// import EmailForm from "./components/EmailForm";
// import ServiceCards from "./components/ServiceCards";
// import "./index.css";

// function App() {
//   return (
//     <div className="container">
//       <header className="header">
//         <h1>
//           <span className="logo">EZ</span> Works
//         </h1>
//         <p className="subtitle">Suite Of Business Support Services</p>
//         <p className="description">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
//         </p>

//         {/* Email Form Component */}
//         <EmailForm />
//       </header>

//       {/* Service Cards */}
//       <ServiceCards />
//     </div>
//   );
// }

// export default App;

import React from "react";
import EmailForm from "./components/EmailForm";
import ServiceCards from "./components/ServiceCards";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="left-section">
        <h1>
          <span className="logo">EZ</span> Works
        </h1>
        <p className="subtitle">Suite Of Business Support Services</p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
        <EmailForm />
      </div>

      <div className="right-section">
        <ServiceCards />
      </div>
    </div>
  );
}

export default App;
