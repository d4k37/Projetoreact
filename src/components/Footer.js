import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Se junte a caixa de Emails da Aventura para receber nossas melhores ofertas de Férias, vendendo a sua alma
                </p>
                <p className="footer-subscription-text">
                  Você pode comprar de novo a qualquer momento. A um preço justo. Para nós hehe
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" className="footer-input" placeholder="Seu Email"/>
                        <Button buttonStyle='btn--outline'>VENDER ALMA</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Sobre nós</h2>
                        <Link to='./login'>Como Funciona</Link>
                        <Link to='/'>Relatos de quem aderiu</Link>
                        <Link to='/'>Ofícios</Link>
                        <Link to='/'>Investidores</Link>
                        <Link to='/'>Termos de uso</Link>
                    </div>
                    
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Entre em contato</h2>
                        <Link to='./login'>Contato</Link>
                        <Link to='/'>Suporte</Link>
                        <Link to='/'>Destinos</Link>
                        <Link to='/'>Patrocinadores</Link>
                    </div>
                    
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to='/'>Upe um video</Link>
                        <Link to='/'>Embaixadores</Link>
                        <Link to='/'>Agencia</Link>
                        <Link to='/'>Influenciadores</Link>
                        
                    </div>
                    
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Redes Sociais</h2>
                        <Link to='/'>Tumblr</Link>
                        <Link to='/'>Orkut</Link>
                        <Link to='/'>Inkscape</Link>
                        <Link to='/'>Swarm</Link>
                    </div>
                    
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            SPOOKY <i className='fab fa-typo3'/>
                        </Link>
                    </div>
                    <small className="website-rights">SPOOKY™ 2021</small>
                    <div className="social-icons">
                       <Link className="social-icon-link Facebook" to="/" target="_blank" aria-label="Facebook">

                           <i className="fab fa-facebook-f"></i>
                       </Link>
                       <Link className="social-icon-link Instagram" to="/" target="_blank" aria-label="Instagram">

                           <i className="fab fa-instagram"></i>
                       </Link>
                       <Link className="social-icon-link Twitter" to="/" target="_blank" aria-label="Twitter">

                           <i className="fab fa-twitter"></i>
                       </Link>
                       <Link className="social-icon-link Linkedin" to="/" target="_blank" aria-label="Linkedin">

                           <i className="fab fa-linkedin"></i>
                       </Link>
                       <Link className="social-icon-link Youtube" to="/" target="_blank" aria-label="Youtube">

                           <i className="fab fa-youtube"></i>
                       </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
