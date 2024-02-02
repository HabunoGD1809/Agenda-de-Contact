// eslint-disable-next-line no-unused-vars
import React from 'react';

export const Navbar = () => {
   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
         <div className="container-fluid">
            <a className="navbar-brand" href="#">
               <i className="bi bi-phone-fill me-2"></i>
               <strong>Agenda telefonica</strong>
            </a>
            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarNav"
               aria-controls="navbarNav"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
         </div>
      </nav>
   );
};
