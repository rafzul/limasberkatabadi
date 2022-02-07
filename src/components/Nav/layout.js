import Navbar from './navbar.js';


export default function Layout({children}) {
    return (
        <>
            <Navbar></Navbar>
            <main>{children}</main>
        </>
    )
}