import { Navigate, Outlet } from "react-router-dom";

type Props = {
  isAuthenticated?: boolean;
  redirectPath?: string;
};

const ProtectedRoute = ({ isAuthenticated, redirectPath }: Props) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath || "/"} replace />;
  } else {
    return <Outlet />;
  }
};

export default ProtectedRoute;
