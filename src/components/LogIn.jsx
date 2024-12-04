import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";
function LogIn({setToken}) {
  let navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;
      console.log(data);
      setToken(data)
      navigate('/homepage')
    } catch (error) {
      console.log(error);
    }
  };
  console.log(formData);
  return (
    <>
      <div className="container h-screen items-center justify-center">
        <div className="h-full w-full flex justify-center items-center">
          <div>
            <p className="text-center text-2xl py-4">LogIn</p>
            <form
              onSubmit={handleSubmit}
              action=""
              className="w-[400px] grid grid-cols-1 gap-3 mx-auto"
            >
              <label className="input input-bordered flex items-center gap-2">
                <i className="bi bi-envelope-at-fill w-4 h-4"></i>
                <input
                  type="text"
                  name="email"
                  className="grow"
                  placeholder="Email"
                  onChange={handleChange}
                  autoComplete="email"
                />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <i className="bi bi-key-fill w-4 h-4"></i>
                <input
                  type="password"
                  name="password"
                  className="grow"
                  placeholder="* * * * * * * *"
                  autoComplete="current-password"
                  onChange={handleChange}
                />
              </label>
              <button className="btn w-full">Submit</button>
            </form>
            <p className="text-center py-4">
              Don't have an account?{" "}
              <NavLink className="text-red-800 hover:text-white transition-all duration-300"  to="/signup">
                SignUp
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
