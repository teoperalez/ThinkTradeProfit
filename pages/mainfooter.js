import headerStyles from '../styles/Header.module.css'
import Link from 'next/link'

const Footer = () => {
    const todaysDate = new Date()
    const currentYear = todaysDate.getFullYear()
    
    return(
        <div className={headerStyles.container} >
            
            
            
            <p className={headerStyles.description}>
                © Copyright {currentYear} ThinkTradeProfit.com · All Rights Reserved
            </p>
            <div className={headerStyles.footernav} >
                <ul>
                    <li>
                        <Link href="/disclaimer" >
                            <a>Risk Disclaimer</a>
                        </Link>
                    </li>
                    <li>
                        <Link href = "/about">
                            <a>About</a>
                        </Link>
                    </li>
                </ul>
            </div>      
    </div>    
    )
}

export default Footer