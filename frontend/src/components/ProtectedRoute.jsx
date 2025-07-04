import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    // If no token, redirect to sign-in page
    return <Navigate to="/signin" replace />;
  }
  // If token exists, render the protected route
  return children;
};
