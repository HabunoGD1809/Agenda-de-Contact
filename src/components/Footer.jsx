// eslint-disable-next-line no-unused-vars
import React from 'react';

export const Footer = () => {
   return (
      <footer className="navbar fixed-bottom text-black footer">
         <div className="container d-flex justify-content-center">
            <span>
               Franklin Joel Valdez <b>{new Date().getFullYear()}</b>
            </span>
         </div>
      </footer>
   );
};
