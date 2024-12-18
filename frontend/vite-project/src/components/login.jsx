import { useState } from "react"
import { Button } from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"



import axios from "axios"

const Loginpage=()=> {
    let [email , setEmail] = useState("")
    let [password, setPassword] = useState("")
    
    async function HandleSubmit(e) { 
        e.preventDefault()
        console.log( "Email: " , email)
        console.log("Password: ",password)
        try {
            await axios.post("https://firebasse-32aeb-default-rtdb.asia-southeast1.firebasedatabase.app/userDetails.json", {email, password}) 
                   alert("Data saved successfully")
        } catch (error) {
              alert("error")
        }
        setEmail("")
        setPassword("")

    }
   
 


    return(
       <div className="container">
            <form onSubmit={HandleSubmit}>
                    <div className="login">
                        <label>Email*</label> <br/>
                        <Input required placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <br/>
                        <label>Password*</label> <br/>
                        <Input required placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        
                        
                       
                        
                     </div>
                        <br />
                        <Button type="submit"  >Login</Button>

                    
            </form>
       </div>
    )
}

export default Loginpage

//git init             --for frst time only



//git checkout -b SheikhFaizan                      ==for branch creation
//git checkout SheikhFaizan                          == to enter branch
// git add .                                       == to push code //assigning it // for specific folder
//git commit -m "first"                             == first is commit
 
// git push --set-upstream origin SheikhFaizan   // final step

