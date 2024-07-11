/* eslint-disable react/prop-types */
import React, { Component , useState} from "react";
import ListCst from "./Components/ListCst";
import Modals from "./Components/Modals";

function App() {
  let [memberInfo, setMemberInfo] = useState(null)
  return (
    <div className="container">
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
          <h1>Meet the <i>StarGazers</i> </h1>
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <ListCst onChoice={ (info) => {setMemberInfo(info)}}/>
          { memberInfo && <Modals member={memberInfo}  handleClose={() => {setMemberInfo(null)}}/> }
        </hgroup>
    </div>
  )
}

export default App
