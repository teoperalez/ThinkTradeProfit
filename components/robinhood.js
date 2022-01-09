import adStyles from '../styles/Ad.module.css'
import logo from '../public/robinhood.png'
import Image from 'next/image'

const Robinhood = () => {
    
    
    return(
        <a href="join.robinhood.com/teodorp30" >
       <h4>ThinkTradeProfit.com is support by:</h4>
       <div className={adStyles.ad}> 
          <div className={adStyles.adimg}>
            <Image src={logo} objectPosition="center"/>
            </div>
          
            
            <h1 
            
            className={adStyles.head}>
                <span>Everyone deserves free stock!</span><br />
                <span>Get your first share at Robinhood!</span>
            </h1>    
            <h3 className={adStyles.description}>
                Sign up for Robinhood here and get a free stock worth up to $225! 
            </h3>
        

       </div>
       </a>
    )
}

export default Robinhood