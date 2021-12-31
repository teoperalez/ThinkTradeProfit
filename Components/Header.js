import headerStyles from '../styles/Header.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import headerImg from '../public/Banner.jpg'
import backgroundImg from '../public/Banner.jpg'

const Header = () => {
    const fadeIN = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 2,
                type: "linear",
            }
        },
        
      
      }
    
    return(
        <div className={headerStyles.title}>
            <motion.div
            variants = {fadeIN}
            initial = "hidden"
            animate = "visible"
            
            >
            
            <div className={headerStyles.titleback}>              
                <Image src={headerImg} className={headerStyles.img} layout="fixed" width ="1200"height="500" objectFit="cover" />
            
            <h1 className={headerStyles.description}>
            
                Technical Indicators for the intelligent investor
            </h1>
            </div>
            

        </motion.div>
    </div>    
    )
}

export default Header