import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'
import CTA from './CTA'



const Layout = ({children}) => {
    return (
        <div className={styles.layoutgrid}>
            <Nav className={styles.Nav} />
            <Header className={styles.Header} />
            <main className={styles.main}>
                    
                
                {children}
            </main>
            
            <CTA className={styles.cta} />
            <div className={styles.footer}></div>
        </div>
    )


}

export default Layout