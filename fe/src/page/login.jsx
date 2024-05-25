import { Link } from "react-router-dom";
import Button from "../components/button"
import axios from "axios"

const FormLogin = () => {
    const olo = (event) => {
        event.preventDefault();
        const username = event.target.querySelector('input[name="username"]').value;
        const password = event.target.querySelector('input[name="password"]').value;
        console.log(username, password);

        axios.post("http://localhost:4000/api/login", {
            username: username,
            password: password
        }).then(function (response) {
            console.log(response.data);
            localStorage.setItem("token", response.data.token);
            window.location.href = "/home"
          })
          .catch(function (error) {
            console.log(error);
          });
        // fetch("http://localhost:4000/api/login", {
        //     method: "POST",
        //     body: JSON.stringify({
        //         username: username,
        //         password: password
        //     }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then((response) => response.json()).then((result)=>{
        //     console.log(result)
        //     window.location.href = "/profile"
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        // });
    }
return(
    <div className=" min-h-screen bg-sky-200">
    <div className="w-full h-36 border bg-red-200 flex justify-center items-center">
        <h1 className="text-5xl font-sedan uppercase text-white">Toko Jogja</h1>
    </div>
    <div className="flex justify-center h-full">
        <form className="m-48 sm:w-96" onSubmit={olo}>
        <div className="w-full">
        <label>Username</label><br/>
        <input className="w-full text-sm border rounded  py-2 px-3 text-slate-700 placeholder-opacity-50"
        placeholder="username" type="text" name="username" required>
        </input>
        </div>
        <div className="w-full">
        <label>Password</label><br/>
        <input className="w-full text-sm rounded border  py-2 px-3 text-slate-700 placeholder-opacity-50"
        placeholder="password" type="password" name="password" required>
        </input>
        </div>
        <div className="w-full my-5">
        <Button className=" px-4 border rounded-lg bg-white hover:bg-slate-300 hover:text-white w-full" text="login" type="submit"></Button>
        </div>  
        <div className="w-full my-5"><h3 className="text-center"><Link to={"/register"}>Register</Link></h3></div>
        </form>
       
    </div>
    </div>
)
}

export default FormLogin