import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { supabase } from "../services/supabase";
function SignUp() {
  let navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {data: { full_name: formData.fullName },}
      });
      if (error) throw error;
      console.log(data);
      navigate('/')
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
            <p className="text-center text-2xl py-4">SignUp</p>
            <form
              onSubmit={handleSubmit}
              action=""
              className="w-[400px] grid grid-cols-1 gap-3 mx-auto"
            >
              <label className="input input-bordered flex items-center gap-2">
                <i className="bi bi-person-fill w-4 h-4"></i>
                <input
                  type="text"
                  name="fullName"
                  className="grow"
                  placeholder="Fullname"
                  onChange={handleChange}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <i className="bi bi-envelope-at-fill w-4 h-4"></i>
                <input
                  type="text"
                  name="email"
                  className="grow"
                  placeholder="Email"
                  autoComplete="email"
                  onChange={handleChange}
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
              Already have an account?{" "}
              <NavLink className="text-red-800 hover:text-white transition-all duration-300" to="/">
                LogIn
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
