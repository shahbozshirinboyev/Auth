import { useState } from "react";
import { NavLink } from "react-router-dom";
import { supabase } from "../services/supabase";
function SignUp() {
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" })
  const handleChange = (e) => { setFormData({...formData, [e.target.name]: e.target.value}) }
  const handleSubmit = () => {
    
  }
  console.log(formData)
  return (
    <>
      <div className="container h-screen items-center justify-center">
        <div className="h-full w-full flex justify-center items-center">
          <div>
            <p className="text-center text-2xl py-4">Sign Up</p>
            <form
            onSubmit={handleSubmit}
              action=""
              className="w-[400px] grid grid-cols-1 gap-3 mx-auto"
            >
              <label className="input input-bordered flex items-center gap-2">
                <i className="bi bi-person-fill w-4 h-4"></i>
                <input type="text" name="fullName" className="grow" placeholder="Fullname" onChange={handleChange} />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <i className="bi bi-envelope-at-fill w-4 h-4"></i>
                <input type="text" name="email" className="grow" placeholder="Email" onChange={handleChange} />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <i className="bi bi-key-fill w-4 h-4"></i>
                <input
                  type="password"
                  name="password"
                  className="grow"
                  placeholder="* * * * * * * *"
                  onChange={handleChange}
                />
              </label>
              <button className="btn w-full">Submit</button>
            </form>
            <p className="text-center py-4"> Do you have <NavLink className="text-red-800">account</NavLink>?</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
