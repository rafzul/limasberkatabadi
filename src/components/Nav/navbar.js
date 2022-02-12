import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Navbar = () => {
    const [showLink, setShowLink] = useState(false);

    const toggleLink = () => {
        setShowLink(!showLink);
    }

    return (
        <header className="stroke-helper flex flex-wrap flex-row justify-between md:items-center bg-gray-300 py-6 px-6 h-24">
            <a href='#' className='block w-24 h-24'>
                <img className='' src="https://user-images.githubusercontent.com/61845166/153700558-98e80452-24a1-42b3-89c8-9d70fb6e0798.png"></img>
            </a>
        </header>


    )
}

export default Navbar;