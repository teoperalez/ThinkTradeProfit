import headerStyles from '../styles/Header.module.css'
import Image from 'next/image'
import headerImg from '../public/Banner.jpg'


const Header = () => {
   
    
    return(
        <div id = "top" className={headerStyles.container} >
            <div className={headerStyles.title}>
            
            
            <div className={headerStyles.titleback}>              
                <Image src={headerImg} className={headerStyles.img} layout="responsive" objectFit="cover"/>
            </div>
            <h1 className={headerStyles.description}>
            
                Technical Indicators for the intelligent investor
            </h1>
            
            

        </div>
    </div>    
    )
}

export default Header