import React from "react";

const Error = () => {
  return (
    <div className="error">
      <div className="error__content">
        <p className="error__number">404</p>
        <p className="error__text">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>
      <a className="error__link" href="/">
        Retourner sur la page d'accueil
      </a>
    </div>
  );
};

export default Error;
