import { useState, useRef, useEffect } from "react";

function App() {

  const [formState, setFormState] = useState({
    name: "",
    email: ""
  })  

  const handleInputs = e => {

    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })

  }

  // const inputs = useRef([])

  // const addCheck = el => {
  //   if(el && !inputs.current.includes(el)){
  //     inputs.current.push(el);
  //   }
  // }

 const handleSubmit = e => {
   e.preventDefault();

   setFormState({
     name: "",
     email: ""
   })
   // Trigger auth
  //  console.log(inputs.current, inputs.current[0].value, inputs.current[1].value);

  //  inputs.current.forEach(inp => {
  //    inp.value = "";
  //  })
 }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your name</label>
        <input 
        // ref={addCheck}
        onChange={handleInputs}
        value={formState.name}
        type="text" 
        id="name" 
        name="name" 
        />

        <label htmlFor="email">Your email</label>
        <input 
        // ref={addCheck}
        onChange={handleInputs}
        value={formState.email}
        type="email" 
        id="email" 
        name="email" 
        />

        <button>Submit</button>
      </form>

      <div className="results">
        <span>Name: {formState.name}</span>
        <span>Email: {formState.email}</span>
      </div>
    </>
  );
}

export default App;
