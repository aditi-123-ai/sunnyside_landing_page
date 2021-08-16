import React from 'react'
import '../css/Main.css'

function Main() {
    return (
        <div className="main">
            <div className="main_div">
            <div className="header">
                <div className="header__top">
                    <h1>sunnyside</h1>
                    <div className="header__top--services">
                        <h4>About</h4>
                        <h4>Services</h4>
                        <h4>Project</h4>
                        <button>CONTACT</button>
                    </div>
                </div>
                <div className="header__bottom">
                
                    <h1>WE ARE CREATIVES</h1>
                    
                    <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="#FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15"/></g>
                    </svg>
                    <img className="header__bottom--img" src='/images/desktop/image-header.jpg' alt="sdf"/>
                </div>
            </div>
            <div className="details">
                <div className="details__card">
                    <div className="details__Text">
                        <h1>Transfrom your <br/> brand</h1>
                        <p>We are a full-service creative agency specializing in <br/> helping brands grow fast. Engage your clients through <br/> compelling visuals that do most of the marketing for you.</p>
                        <button className="details_transfrom">LEARN MORE</button>
                    </div>
                    <div className="details__img">
                        <img src="/images/desktop/image-transform.jpg" alt=""/>
                    </div>
                </div>
                <div className="details__card">
                    <div className="details__img">
                        <img src="/images/desktop/image-stand-out.jpg" alt=""/>
                    </div>
                    <div className="details__Text">
                        <h1>Stand out to the right<br/> audience</h1>
                        <p>Using a collaborative formula of designers, researchers,<br/> photographers, videographers, and copywrite we'll<br/> build and extend your brand in digital places.</p>
                        <button className="details_stand">LEARN MORE</button>
                    </div>
                </div>
                <div className="detail__vertical">
                    <div className="toptobottom">
                        <div className="toptobottom__section">
                        <img src="/images/desktop/image-graphic-design.jpg" alt=""/>
                            <div className="text__topbottom">
                                <h1>Graphic Design</h1>
                                <p>Great desing makes you memoraable. We deliver <br/> artwork that underscores your brand message <br/> ans captures potential client's attention</p>
                            </div>                    
                        </div>
                    </div>
                    <div className="toptobottom">
                        <div className="toptobottom__section">
                        <img src="/images/desktop/image-photography.jpg" alt=""/>
                            <div className="text__topbottom active">
                                <h1>Photography</h1>
                                <p>Increase your credibility by getting the most<br/>stunning, high-quality photos that improver your<br/>business image.</p>
                            </div>                    
                        </div>
                    </div>
                </div>
            </div>
            <div className="infoMember">
                <div className="header__title">
                    <h1>CLIENT TESTIMONIALS</h1>
                </div>
                <div className="header__infoMember">
                    <div className="info__cardm">
                    <div className="info__Card">
                        <img src="/images/image-emily.jpg" alt=""/>
                        <h5>We put our trust in Sunnyside and they<br/>delivered, making sure our needs were met<br/>and deadlines were always hit</h5>
                        <h1>Emily R.</h1>
                        <p>Marketing Director</p>
                    </div>
                    <div className="info__Card">
                        <img src="/images/image-thomas.jpg" alt=""/>
                        <h5>Sunnyside's enthusiasm coupled with their<br/>keen interest in our brand's success made it<br/>a satisfying and enjoyable experience.</h5>
                        <h1>Thomas S.</h1>
                        <p>Chief Operating Officer</p>
                    </div>
                    <div className="info__Card">
                        <img src="/images/image-jennie.jpg" alt=""/>
                        <h5>Incredible end result! Our sales increased<br/>over 400% when we worked with Sunnyside.<br/>Highly recommended!</h5>
                        <h1>Jennie F.</h1>
                        <p>Business Owner</p>
                    </div>
                    </div>
                    
                </div>
            </div>
            <div className="footer">
                <div className="footer__top">
                    <img src="images\desktop\image-gallery-milkbottles.jpg" alt="" />
                    <img src="images\desktop\image-gallery-orange.jpg" alt="" />
                    <img src="images\desktop\image-gallery-cone.jpg" alt="" />
                    <img src="images\desktop\image-gallery-sugarcubes.jpg" alt="" />
                </div>
                <div className="footer__bottom">
                   <h1>sunnyside</h1>
                   <div className="info">
                       <h4>About</h4>
                       <h4>Service</h4>
                       <h4>Projects</h4>
                   </div>
                   <div className="footer__icon">
                   <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z" fill="#2C7566" fill-rule="nonzero"/></svg>
                   <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.718-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.061 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" fill="#2C7566" fill-rule="nonzero"/></svg>
                   <svg width="20" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M20 2.172a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.805-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0013.847.248c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 011.392 1a4.109 4.109 0 001.27 5.478 4.086 4.086 0 01-1.858-.513c-.045 1.9 1.318 3.679 3.291 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.833 2.849A8.25 8.25 0 010 14.658a11.616 11.616 0 006.29 1.843c7.618 0 11.923-6.434 11.663-12.205A8.354 8.354 0 0020 2.172z" fill="#2C7566" fill-rule="nonzero"/></svg>
                   <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.477 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.176-4.068-2.845 0-4.516 2.135-4.516 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S15.523 0 10 0z" fill="#2C7566" fill-rule="nonzero"/></svg>
                   </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Main
