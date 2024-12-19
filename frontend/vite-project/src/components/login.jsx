import { useState } from "react"
import { Button } from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"
// import useHistory from 'react-router-dom'
import { useNavigate } from "react-router-dom"



import axios from "axios"

const Loginpage=()=> {
    let [email , setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState('')

    let navigate= useNavigate()
    
    
    async function HandleSubmit(e) { 
        e.preventDefault()
        console.log( "Email: " , email)
        console.log("Password: ",password)
        try {
            setLoading(true)
            setError("")
            
            let response = await axios.post("https://login-signup-ndpt.onrender.com/user/login", { email, password })    
               console.log(response)
            if (response.status == 200) {
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("user", JSON.stringify(response.data.user))
                navigate("/dashboard")
                alert("sucessful logged in")
              
            } 
                       
            alert("Data saved successfully")
        } catch (error) {
            setError( "Inavlid" )
            
            alert("error while logging in")
        } finally { 
            setLoading(false)
        }
        setEmail("")
        setPassword("")

    }
   
 


    return(
       <div className="container">
        
            <form onSubmit={HandleSubmit}>
                    <div className="login">
                        <label>Email*</label> <br/>
                        <Input required placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} width={360} style={{borderColor:'black', border:'2px solid black'}} />
                        <br/>
                        <label>Password*</label> <br/>
                        <Input required placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} width={360} style={{borderColor:'black', border:'2px solid black'}}/>
                        
                        
                       
                        
                     </div>
                        <br />
                       <Button type="submit"  
                    disabled={loading} style={{ backgroundColor: "blue", color: 'white' }} >{loading ? "Loading..." : "Login"}</Button>
                     
                {error && <p style={{color:"red" , margintop:"20px"}}>{ error }</p> }

                    
            </form>
       </div>
    )
}

export default Loginpage






// import { useState } from "react";
// import { Button } from "@chakra-ui/react";
// import { Input } from "@chakra-ui/react";
// import axios from "axios";
// import { useHistory } from "react-router-dom"; // To handle redirection after login

// const Loginpage = () => {
//     let [email, setEmail] = useState("");
//     let [password, setPassword] = useState("");
//     let [error, setError] = useState(""); // State to hold error message
//     let [loading, setLoading] = useState(false); // State for loading
//     let history = useHistory(); // To handle page redirection

//     // Handle the form submission
//     async function HandleSubmit(e) {
//         e.preventDefault();
//         console.log("Email:", email);
//         console.log("Password:", password);

//         try {
//             setLoading(true); // Set loading state when starting the request
//             setError(""); // Reset any previous error messages

//             // Send POST request to the backend
//             const response = await axios.post("https://login-signup-ndpt.onrender.com/user/login", { email, password });

//             // If login is successful
//             if (response.status === 200) {
//                 // Save the token (if login is successful)
//                 localStorage.setItem("token", response.data.token);

//                 // Optionally: Save other user data like role, name etc. if needed
//                 localStorage.setItem("user", JSON.stringify(response.data.user));

//                 alert("Login successful!");

//                 // Redirect to the dashboard after successful login
//                 history.push("/dashboard");
//             }
//         } catch (error) {
//             setError(error.response?.data?.msg || "An error occurred. Please try again."); // Handle errors
//         } finally {
//             setLoading(false); // Stop loading after the request is finished
//         }

//         // Clear form fields after submit
//         setEmail("");
//         setPassword("");
//     }

//     return (
//         <div className="container">
//             <form onSubmit={HandleSubmit}>
//                 <div className="login">
//                     <label>Email*</label> <br />
//                     <Input
//                         required
//                         placeholder="Enter your email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         width={360}
//                         style={{ borderColor: "black", border: "2px solid black" }}
//                     />
//                     <br />
//                     <label>Password*</label> <br />
//                     <Input
//                         required
//                         placeholder="Enter your password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         width={360}
//                         style={{ borderColor: "black", border: "2px solid black" }}
//                     />
//                 </div>
//                 <br />
//                 <Button
//                     type="submit"
//                     style={{ backgroundColor: "blue", color: "white" }}
//                     disabled={loading} // Disable button when loading
//                 >
//                     {loading ? "Logging in..." : "Login"}
//                 </Button>

//                 {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>} {/* Display error message if any */}
//             </form>
//         </div>
//     );
// };

// export default Loginpage;