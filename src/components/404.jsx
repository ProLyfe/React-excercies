import React from 'react';
import { useLocation } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

function NoMatch() {
    let location = useLocation();
  
    return (
      <div>
       <h1>Page introuvable</h1>
       
        <Link to="/" title="Revenir sur la page principale">
           Retour sur la page d'accueil
        </Link>
            
        <br/>
        <code>Page : {location.pathname}</code>
      </div>
    );
  }

export default NoMatch  