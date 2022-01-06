import styles from '../styles/Disclaimer.module.css'
import Link from 'next/link';

const ShortDisclaimer = () => {

    return ( 
        <div className = {styles.smalldisclaimer}>
            <p>Risk Warning: Before deciding to participate in the financial markets, you should carefully consider your investment objectives, level of experience and risk appetite. Most importantly, do not invest money you cannot afford to lose.  All technical indicators purchased from ThinkTradeProfit.com are used at the buyers discretion and risk.  No guarantees are made of profitability, and all trading strategies are used at your own risk.  Read the full risk disclaimer <Link href = "/disclaimer" ><a>here</a></Link> prior to purchasing an indicator. By completing a purchase, you agree to release ThinkTradeProfit.com from any liability related to potential trading losses while using the purchased indicator.</p>
        </div>
    );
}

export default ShortDisclaimer