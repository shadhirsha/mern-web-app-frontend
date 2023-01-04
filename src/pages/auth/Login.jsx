import React, {useState} from 'react'
import Jumbotron from '../../components/cards/Jumbotron'
import Axios from "axios"
import Toast from "react-hot-toast"
import { useAuth } from '../../context/auth'

export default function Register() {

  const [email, setEmail] = useState("shadhirshaz@gmail.com");
  const [password, setPassword] = useState("rrrrrrr");
  //hook
  const [auth, setAuth] = useAuth();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await Axios.post(`${process.env.REACT_APP_API}/login`, {
        email,
        password,
      });

      console.log(data);

      if(data?.error) {
        Toast.error(data.error);
      } else {
        localStorage.setItem( "auth", JSON.stringify(data));
        setAuth({...auth, token: data.token, user: data.user});
        Toast.success("User Logged in Sucessfully");
      }
    } catch (err) {
      console.log(err);
      Toast.error("User Log In Failed Try Again");
      
    }
  }
  return (
    <div>
        <Jumbotron
          title="Ecommerce Login Page"
        />
        <div className='container mt-5'>
          <div className='row'>
            <div className='col md-6 offser-md-3'>
              <form onSubmit={handleSubmit}>
                <input
                  type = "email"
                  className = "form-control mb-4 p-2"
                  placeholder = "Enter Your Email"
                  value = {email}
                  onChange = {(e) => setEmail(e.target.value)}
                />
                <input
                  type = "password"
                  className = "form-control mb-4 p-2"
                  placeholder = "Enter Your Password"
                  value = {password}
                  onChange = {(e) => setPassword(e.target.value)}
                />
                <button className = 'btn btn-primary' type = 'submit'>
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}
