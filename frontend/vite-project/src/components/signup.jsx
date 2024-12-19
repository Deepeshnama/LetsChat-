import { useState } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

let Signup = () => {
  let [name, setName] = useState("");
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  async function HandleSubmit(e) {
    e.preventDefault();

    console.log("Form Data:", { name, userName, email, password });

    try {
      const response = await fetch(
        "https://login-signup-ndpt.onrender.com/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, userName, email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        alert("Success: " + (data.message || "User registered successfully"));

        // Clear form inputs
        setName("");
        setUserName("");
        setEmail("");
        setPassword("");
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to register");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Error: " + error.message);
    }
  }

  return (
    <div className="container">
      <form onSubmit={HandleSubmit}>
        <div className="login">
          <label>Name</label>
          <br />
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            width={360}
            style={{ borderColor: "black", border: "2px solid black" }}
          />{" "}
          <br />
          <label>User Name*</label>
          <br />
          <Input
            required
            placeholder="Email"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            width={360}
            style={{ borderColor: "black", border: "2px solid black" }}
          />
          <br />
          <label>Email*</label>
          <br />
          <Input
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            width={360}
            style={{ borderColor: "black", border: "2px solid black" }}
          />{" "}
          <br />
          <label>Password*</label> <br />
          <Input
            required
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            width={360}
            style={{ borderColor: "black", border: "2px solid black" }}
          />
        </div>
        <br />
        <Button
          type="submit"
          style={{ backgroundColor: "blue", color: "white" }}
        >
          SignUp
        </Button>
      </form>
    </div>
  );
};

export default Signup;

// let Signup=()=> {
//       let [name , setName] = useState("")
//       let [username, setUsername] = useState(null)
//       let [email, setEmail] = useState("")
//    let [password, setPassword] = useState("")

//    async function HandleSubmit(e) {
//      e.preventDefault()
//       try {
//          await axios.post("https://login-signup-ndpt.onrender.com/user/register", { name,username,email, password})
//          alert("success")
//       } catch (error) {
//          alert("error")
//       }
//       setName("")
//       setUsername("")
//       setEmail("")
//       setPassword("")
//       setpics("")

//    }

//     return(
//        <div className="container">
//          <form onSubmit={HandleSubmit}>
//                <div className="login">
//                      <label>Name</label><br/>
//                      <Input  placeholder="Name"  value={name}  onChange={(e)=>setName(e.target.value)}width={360} style={{borderColor:'black', border:'2px solid black'}}/> <br/>

//           <label>User Name*</label><br/>
//           <Input required placeholder="Email"  value={username}  onChange={(e)=>setUsername(e.target.value)}width={360} style={{borderColor:'black', border:'2px solid black'}}/>

//          <br />
//                      <label>Email*</label><br/>
//                      <Input required placeholder="Email"  value={email}  onChange={(e)=>setEmail(e.target.value)}width={360} style={{borderColor:'black', border:'2px solid black'}}/> <br/>
//                      <label>Password*</label> <br/>
//                      <Input required placeholder="password" value={password}  onChange={(e)=>setPassword(e.target.value)}width={360} style={{borderColor:'black', border:'2px solid black'}} />
//                    </div>
//                        <br />
//                   <Button type="submit" style={{backgroundColor:"blue", color:'white'}} >SignUp</Button>
//              </form>
//        </div>
//     )
// }

// export default Signup

// import { useState } from "react";
