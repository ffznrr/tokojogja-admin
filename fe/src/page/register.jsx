import { Link } from "react-router-dom";
import axios from "axios";
import Button from "../components/button"

const Register = () => {
    // const token = localStorage.getItem('token')
    // if (!token) {
    //     window.location.replace("/login")
    // }
    const reg = (e) => {
        e.preventDefault();
        const username = e.target.querySelector('input[name="username"]').value;
        const password = e.target.querySelector('input[name="password"]').value;

        axios.post("http://localhost:4000/api/adminbaru",{
            username: username,
            password: password
        }).then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return(
        <div className="container flex justify-center items-center m-auto h-full min-h-screen">
        <form  onSubmit={reg}>
        <div className="w-full mx-auto">
        <label>Username</label><br/>
        <input className="w-72 text-sm border rounded  py-2 px-3 text-slate-700 placeholder-opacity-50"
        placeholder="username" type="text" name="username" >
        </input>
        </div>
        <div className="w-full mx-auto">
        <label>Password</label><br/>
        <input className="w-72 text-sm rounded border  py-2 px-3 text-slate-700 placeholder-opacity-50"
        placeholder="password" type="password" name="password" >
        </input>
        </div>
        <div className="w-full flex justify-center my-6">
        <Button className="border py-2 px-4 rounded-xl bg-white hover:bg-slate-300 hover:text-white w-full" text="Register" type="submit"></Button>
        </div> 
        <div className="w-full my-5"><h3 className="text-center"><Link to={"/Login"}>Login</Link></h3></div> 
        </form>
        </div>
    )
}

export default Register