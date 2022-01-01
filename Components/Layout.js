import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'
import CTA from './CTA'



const Layout = ({children}) => {
    return (
        <div className={styles.layoutgrid}>
        <Nav />
        <div className={styles.container}>
            <main className={styles.main}>
                <Header />
                
                {children}
            </main>
        </div>
        <CTA />
        </div>
    )


}

export default Layout