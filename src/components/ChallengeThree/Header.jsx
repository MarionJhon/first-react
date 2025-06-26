import GlobeLogo from '../../assets/ChallengeThree/planet-earth.png';

const Header = () => {
    return (
        <header className='header'>
            <img src={GlobeLogo} alt="Globe Logo" />
            <span className='header-title'>my travel journey.</span>
        </header>
    )
}

export default Header;