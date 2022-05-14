import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/header.css";

export const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="headerKanban"
      onClick={() => {
        navigate("/");
      }}
    >
      Kanban
    </div>
  );
};
