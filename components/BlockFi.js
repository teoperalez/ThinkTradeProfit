import adStyles from '../styles/Ad.module.css'
import BFlogo from '../public/Blockfi.png'
import Image from 'next/image'

const BlockFi = () => {
    
    
    return(
        <div>
          <h4>ThinkTradeProfit.com is support by:</h4>
          <a className = {adStyles.a}href="https://blockfi.com/?ref=98c6891b" >
            
            <div className={adStyles.ad}> 
              <div className={adStyles.adimg}>
                <Image src={BFlogo} objectPosition="center"/>
              </div>
              <h1 
                 className={adStyles.head}>
                <span>Earn up to 9% on your stablecoins!</span><br />
                <span>Better returns with lower volatility!</span>
              </h1>    
              <h3 className={adStyles.description}>
                Sign up for BlockFi here and get $10 bonus for your first $100 deposit! Then withdraw anytime! Interest paid daily! 
              </h3>
            </div>
        </a>
      </div>
    )
}

export default BlockFi