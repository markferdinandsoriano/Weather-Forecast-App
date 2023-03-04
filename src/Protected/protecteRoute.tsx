import { Navigate, Outlet } from "react-router-dom";

type Props = {
  user?: boolean;
  redirectPath?: string;
};

const ProtectedRoute = ({ user, redirectPath }: Props) => {
  if (!user) {
    return <Navigate to={redirectPath || "/"} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
