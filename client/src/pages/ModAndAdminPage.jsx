import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import React from "react";

const ModAndAdminPage = ({ children }) => {
  // ดึง user จาก context
  const { user } = useAuthContext();

  // ถ้าไม่ล็อกอิน ให้ไปหน้า login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // ถ้า user มีบทบาท moderator หรือ admin
  if (
    user?.authorities.includes("ROLE_MODERATOR") ||
    user?.authorities.includes("ROLE_ADMIN")
  ) {
    return children;
  }

  // ถ้า user ไม่มีสิทธิ์
  return <Navigate to="/notallowed" replace />;
};

export default ModAndAdminPage;
