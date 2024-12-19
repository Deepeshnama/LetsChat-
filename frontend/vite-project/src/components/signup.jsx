import { useState } from "react"
import axios from "axios"
import { Button } from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"


let Signup=()=> {
      let [name , setName] = useState("")
      let [pics, setpics] = useState(null)
      let [email, setEmail] = useState("")
   let [password, setPassword] = useState("")
   

   async function HandleSubmit(e) { 
     e.preventDefault()
      try {
         await axios.post("https://firebasse-32aeb-default-rtdb.asia-southeast1.firebasedatabase.app/userDetails.json", { name,pics,email, password})
         alert("sucess")
      } catch (error) {
         alert("error")
      }
      setName("")
      // setUsername("")
      setEmail("")
      setPassword("")
      setpics("")
      
     
   }
   // const handlePictureUpload = (pics) => {
   //    setpics(pics)
   //    console.log("Picture Selected:", pics);

   //  };


    return(
       <div className="container">
         <form onSubmit={HandleSubmit}>
               <div className="login">
                     <label>Name</label><br/>
                     <Input  placeholder="Name"  value={name}  onChange={(e)=>setName(e.target.value)}width={360} style={{borderColor:'black', border:'2px solid black'}}/> <br/>
                     
         <label>Upload Profile Pic</label>

         
          <label>Upload your Picture</label>
          <Input
            type="file"
            p={1.5}
            accept="image/*"
            onChange={(e) =>setpics(e.target.files)}
          />
        
          {/* <Input
            type="file"
            p={1.5}
            accept="image/*"
            onChange={(e) => setPic(e.target.files)} value={pic} style={{borderColor:'black', border:'2px solid black'}}
          /> */}
         <br />
                     <label>Email*</label><br/>
                     <Input required placeholder="Email"  value={email}  onChange={(e)=>setEmail(e.target.value)}width={360} style={{borderColor:'black', border:'2px solid black'}}/> <br/>
                     <label>Password*</label> <br/>
                     <Input required placeholder="password" value={password}  onChange={(e)=>setPassword(e.target.value)}width={360} style={{borderColor:'black', border:'2px solid black'}} />  
                   </div>
                       <br />
                  <Button type="submit" style={{backgroundColor:"blue", color:'white'}} >SignUp</Button>
             </form> 
       </div>
    )
}

export default Signup