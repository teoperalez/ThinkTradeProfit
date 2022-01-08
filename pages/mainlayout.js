import styles from '../styles/Layout.module.css'
import Nav from './nav'
import Header from './MainHeader'
import CTA from './CTA'
import Footer from './MainFooter'



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