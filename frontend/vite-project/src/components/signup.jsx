import { useState } from "react"
import axios from "axios"


let Signup=()=> {
      let [name , setName] = useState("")
      let [username, setUsername] = useState("")
      let [email, setEmail] = useState("")
   let [password, setPassword] = useState("")
   

   async function HandleSubmit(e) { 
     e.preventDefault()
      try {
         await axios.post("https://firebasse-32aeb-default-rtdb.asia-southeast1.firebasedatabase.app/userDetails.json", { name, username,email, password})
         alert("sucess")
      } catch (error) {
         alert("error")
      }
      setName("")
      setUsername("")
      setEmail("")
      setPassword("")
      
   }

    return(
       <div className="container">
         <form onSubmit={HandleSubmit}>
               <div className="login">
                     <label>Name</label><br/>
                     <input type="text" required placeholder="name"  value={name}  onChange={(e)=>setName(e.target.value)}/> <br/>

                     <label>Username</label> <br/>
                     <input type="text"  required placeholder="Username"  value={username}  onChange={(e)=>setUsername(e.target.value)}/> <br />

                     <label>Email</label><br/>
                     <input type="email" required placeholder="Email"  value={email}  onChange={(e)=>setEmail(e.target.value)}/> <br/>

                     <label>Password</label> <br/>
                     <input type="password"  required placeholder="password" value={password}  onChange={(e)=>setPassword(e.target.value)} />
                   </div>
                       <br />
                  <button type="submit">SignUp</button>
             </form> 
       </div>
    )
}

export default Signup