import { Navigate } from "react-router-dom";
import Loader from "../components/Shared/Loader";
import useRole from "../hooks/useRole";

const HostRoute = ({ children }) => {
  const [role, loading] = useRole();

  if (loading) return <Loader></Loader>;
  if (role === "host") return children;
  return <Navigate to="/dashboard"></Navigate>;
};

export default HostRoute;
