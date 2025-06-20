import reactLogo from '../../assets/react.svg'

function Navbar() {
    return (
        <>
            <header className='header'>
                <nav className='nav'>
                    <img src={reactLogo} alt="ReactLogo" />
                    <span className='nav-title'>ReactFacts</span>
                </nav>
            </header>
        </>
    )
}

export default Navbar;