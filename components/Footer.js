import footerStyles from '../styles/Footer.module.css'

const Header = () => {
    return (
        <div className={footerStyles.footer}>
            <div className={footerStyles.footerGrid}>
                <div className={footerStyles.footerCard}>
                    <p>sbfrank@wpi.edu</p>
                </div>
                <div className={footerStyles.footerCard}>
                    <p>(860) 515-6950</p>
                </div>
                <div className={footerStyles.footerCard}>
                    <a href="https://www.linkedin.com/in/seth-frank/">
                        <u>linkedin.com/in/seth-frank</u>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header