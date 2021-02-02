import React, { useState, useEffect } from 'react';

const StateExemple = () => {

    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Vous avez cliqué ${count} fois`
    });

    return (
        <div>
            <p>Nombre de clics : <span>{count}</span></p>
            <button onClick={() => setCount(count + 1)}>Ajouter</button>
            <button onClick={() => setCount(count - 1)}>Soustraire</button>
        </div>
    );
};

export default StateExemple;