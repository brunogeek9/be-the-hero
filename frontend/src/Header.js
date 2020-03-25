import React, { useState } from 'react';

function Header(props) {
    const [cont, setCont] = useState(0);
    function increment() {
        setCont(cont + 1);
        console.log(cont);
    }
    return (
        <header>
            <div>
                <h1>{props.title} - {cont}</h1>
                <button onClick={increment}>Incrementar</button>
            </div>
        </header>
    )
}
export default Header;