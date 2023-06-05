import { useState } from 'react';

export const NavBar = () => {

    const [ verticalIcon, setVerticalIcon ] = useState(true)

    const handleIconPosition = () => {
        setVerticalIcon(!verticalIcon)
    }

    return (
        <nav class="menu">
            <ul>
                <li>
                    <img 
                        onClick={ handleIconPosition }
                        className={ verticalIcon && 'vertical' } 
                        src="menu.png" 
                        alt="menu" 
                    />
                </li>
            </ul>
        </nav>
    )
}
