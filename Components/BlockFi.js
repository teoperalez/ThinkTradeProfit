import Link from 'next/link'
import headerStyles from '../styles/Header.module.css'
import BFlogo from '../public/Blockfi.png'
import Image from 'next/image'

const BlockFi = () => {
    
    
    return(
        <div className={headerStyles.container} >
          <div className={headerStyles.ad}> 
          <div className={headerStyles.adimg}>
            <Image src={BFlogo} objectPosition="center"/>
          </div>
          <a href="https://blockfi.com/?ref=98c6891b" >
            
            <h1 
            
            className={headerStyles.description}>
                <span>Earn up to 9% on your stablecoins!</span><br />
                <span>Better return than the S&P without fluctuations!</span>
            </h1>    
            <p className={headerStyles.description}>
                Sign up for BlockFi here and get $10 bonus for your first $100 deposit! < br />
                Then withdraw anytime!   Interest paid daily! 
            </p>
        </a>

       </div>
    </div>
    )
}

export default BlockFi