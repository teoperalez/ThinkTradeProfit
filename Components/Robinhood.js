import Link from 'next/link'
import headerStyles from '../styles/Header.module.css'
import logo from '../public/robinhood.png'
import Image from 'next/image'

const Robinhood = () => {
    
    
    return(
        
          <div className={headerStyles.ad}> 
          <div className={headerStyles.description}>
            <Image src={logo} objectPosition="center"/>
            </div>
          <a href="join.robinhood.com/teodorp30" >
            
            <h1 
            
            className={headerStyles.description}>
                <span>Everyone likes free money!</span><br />
                <span>Robinhood gives free money</span>
            </h1>    
            <p className={headerStyles.description}>
                Sign up for Robinhood here and get a free stock worth up to $225! 
            </p>
        </a>

       </div>
        
    )
}

export default Robinhood