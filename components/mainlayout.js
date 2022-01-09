import styles from '../styles/Layout.module.css'
import Nav from './nav'
import Header from './mainheader'
import CTA from './cta'
import Footer from './mainfooter'



const Layout = ({children}) => {
    return (
        <div className={styles.layoutgrid}>
            <Nav className={styles.Nav} />
            <Header className={styles.Header} />
            <main className={styles.main}>
                    
                
                {children}
            </main>
            
            <CTA className={styles.cta} />
            <Footer />
        </div>
    )


}

export default Layout