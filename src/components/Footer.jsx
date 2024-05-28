
import './CSS/Footer.css';
function Footer() {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>JANAKK</h1>
                    <p>Dil Se SWADESH .. apna UTTAR PRADESH</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                        <i className="fa-brands fa-instagram-square"></i>
                        <i className="fa-brands fa-youtube-square"></i>
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Projects</h4>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">Github</a>
                    <a href="/">Discord</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">TroubleShooting</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy</a>
                    <a href="/">Lincense</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;