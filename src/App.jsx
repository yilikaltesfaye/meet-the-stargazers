/* eslint-disable react/prop-types */
import React from "react";

class Welcome extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return <h1>Meet the { this.props.name} </h1>
  }
}
const Hello = (props) => {
  // eslint-disable-next-line react/prop-types
  return <h1>Meet the <i>{props.name}</i></h1>
}
function App() {
  const name = 'StarGazers'
  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
          <Welcome name={name}/>
          <Hello name={name}/>
          <p>Members of an <b>intergalactic alliance</b><br /> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <button className="outline" onClick={() => alert('Hi There')}>Click Me</button>
        </hgroup>
      </article>
    </div>
  )
}

export default App
