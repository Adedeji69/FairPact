import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NotFoundPage.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="errorPage">
      <div className="errorContent">
        <h1>404</h1>

        <h2>Oops, This Page Not Found!</h2>

        <p className="errorSubText">
          This page might have been removed or doesn't exist.
        </p>

        <button
          onClick={() => {
            if (window.history.length > 1) {
              navigate(-1);
            } else {
              navigate("/");
            }
          }}
        >
          GO BACK
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
