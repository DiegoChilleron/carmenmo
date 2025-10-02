import { useState, useCallback, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoMo from '../../assets/icons/logo_mo.svg';
import homeIcon from '../../assets/icons/home_icon.svg';

export const Navbar = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
    const closeMenu = useCallback(() => setIsMenuOpen(false), []);

    const handleNavigation = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        closeMenu();

        if (location.pathname === '/') {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate(`/#${id}`);
        }
    }, [location.pathname, navigate, closeMenu]);

    const navItems = useMemo(() => [
        { id: 'home', label: t('navbar.home'), isIcon: true },
        { id: 'about', label: t('navbar.about') },
        { id: 'projects', label: t('navbar.projects') },
    ], [t]);

    const handleContactClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        closeMenu();
        
        if (location.pathname === '/') {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/#contact');
        }
    }, [location.pathname, navigate, closeMenu]);

    return (
        <header className="navbar">
            <nav aria-label='Main Navigation' className="navbar__container">
                <div className="navbar__content">
                    {/* Logo - Left Section */}
                    <div className="navbar__logo">
                        <Link to="/" aria-label="Inicio" className="navbar__logo-link">
                            <img 
                                src={logoMo} 
                                alt="Carmen Moreno Logo" 
                                className="navbar__logo-img"
                            />
                        </Link>
                    </div>

                    {/* Menu - Center Section (Desktop) */}
                    <ul className="navbar__menu">
                        {navItems.map(({ id: itemId, label, isIcon }) => (
                            <li key={itemId} className="navbar__menu-item">
                                <Link 
                                    to={`/#${itemId}`} 
                                    onClick={(e) => handleNavigation(e, itemId)} 
                                    aria-label={label}
                                    className="navbar__menu-link"
                                >
                                    {isIcon ? (
                                        <img src={homeIcon} alt={label} className="navbar__menu-icon" />
                                    ) : (
                                        label
                                    )}
                                </Link>
                            </li>
                        ))}
                        <li className="navbar__menu-item">
                            <a
                                href="/cv.pdf"
                                download="Carmen_Moreno_CV.pdf"
                                className="navbar__menu-link--download"
                            >
                                {t('navbar.downloadCV')}
                            </a>
                        </li>
                    </ul>

                    {/* Contact Button - Right Section (Desktop) */}
                    <div className="navbar__contact">
                        <button
                            onClick={handleContactClick}
                            className="navbar__contact-btn button-gradient"
                        >
                            {t('navbar.contact')}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="navbar__mobile-toggle">
                        <button
                            className="navbar__mobile-toggle-btn"
                            onClick={toggleMenu}
                            aria-label='Toggle menu'
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            <svg
                                fill='none' 
                                stroke='currentColor' 
                                strokeLinecap='round' 
                                strokeLinejoin='round' 
                                strokeWidth='2' 
                                viewBox='0 0 24 24' 
                                className="navbar__mobile-toggle-icon"
                                aria-hidden="true"
                            >
                                {isMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12"></path>
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div 
                    className={`navbar__mobile-menu ${isMenuOpen ? 'navbar__mobile-menu--open' : 'navbar__mobile-menu--closed'}`}
                    id="mobile-menu"
                >
                    <ul className="navbar__mobile-list">
                        {navItems.map(({ id: itemId, label, isIcon }) => (
                            <li key={itemId} className="navbar__mobile-item">
                                <Link 
                                    to={`/#${itemId}`} 
                                    onClick={(e) => handleNavigation(e, itemId)} 
                                    aria-label={label}
                                    className="navbar__mobile-link"
                                >
                                    {isIcon ? (
                                        <img src={homeIcon} alt={label} className="navbar__mobile-icon" />
                                    ) : null}
                                    {label}
                                </Link>
                            </li>
                        ))}
                        <li className="navbar__mobile-item">
                            <a
                                href="/cv.pdf"
                                download="Carmen_Moreno_CV.pdf"
                                className="navbar__mobile-link--download"
                                onClick={closeMenu}
                            >
                                {t('navbar.downloadCV')}
                            </a>
                        </li>
                        <li className="navbar__mobile-item">
                            <button
                                onClick={handleContactClick}
                                className="navbar__mobile-contact-btn button-gradient"
                            >
                                {t('navbar.contact')}
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
