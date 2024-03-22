import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthView = () => {
     const user = useSelector((store) => store.user.user);
     if (user.first_name) {
          return <Navigate to="/" />;
        }
        return <Outlet />;
      };
    export default AuthView;