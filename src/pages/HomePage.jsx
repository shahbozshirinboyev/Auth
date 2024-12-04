import { useNavigate } from "react-router-dom";

function HomePage({ token, setToken }) {
    let navigate = useNavigate()
    const handleLogout =  () => {
        sessionStorage.removeItem('token')
        setToken(false)
        navigate('/')
    }
  return (
    <div className="container grid grid-cols-2 gap-4 py-12">
      <div className="flex justify-start">
        <p>
          Welcome back, {token.user.user_metadata.full_name}
        </p>
      </div>
      <div className="flex justify-end">
        <button onClick={handleLogout} className="btn btn-sm w-[70px]">Logout</button>
      </div>
    </div>
  );
}

export default HomePage;
