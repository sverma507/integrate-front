import { useState } from "react";
import axios from 'axios'
function App() {
  const [data,setData]= useState({
    email:'',
    name:'',
    number:'',
    salary:''
  })

  const go_get=(e)=>{
    // console.log("e=>",e.target);
    const {name,value}=e.target;
    setData((prev)=>{
      return({
        ...prev,
        [name]:value
      })
    })

  }

  const submit =(e)=>{
    e.preventDefault();
    console.log("data=>", data)
      axios.post('http://localhost:4000/adduser', data)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        })
    
  
  }
  return (
    <div className="App">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={data.email} onChange={(e)=>{go_get(e)}} />
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='name' value={data.name} onChange={(e)=>{go_get(e)}} />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Number</label>
          <input type="number" class="form-control" id="exampleInputPassword1"  name='number' value={data.number} onChange={(e)=>{go_get(e)}} />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Salary</label>
          <input type="number" class="form-control" id="exampleInputPassword1" name='salary' value={data.salary} onChange={(e)=>{go_get(e)}} />
        </div>
       
        <button type="submit" class="btn btn-primary" onClick={(e)=>{submit(e)}}>Submit</button>
      </form>
    </div>
  );
}

export default App;
