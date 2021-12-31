import headerStyles from '../styles/Header.module.css'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import fiverrLogo from '../public/fiverr-freelance-marketplace-review-pricing-finder-finland-765727.png'

const CTA = () => {
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
        exit: {
            x: "-100vh",
            opacity: 0, 
        }
      
      }
    
    return(
        
            <motion.div
            variants = {fadeIN}
            initial = "hidden"
            animate = "visible">
            <h1 
            
            className={headerStyles.description}>
                <span >Need a custom Indicator or Strategy?</span><br />
            </h1>    
            <p className={headerStyles.description}>
                Hire me on <br /> <a className={headerStyles.button} href="https://www.fiverr.com/teoperalez/code-any-thinkscript-indicator-alert-or-strategy?source=order_page_summary_gig_link_image&funnel=0938d61a77d1d602495d1a69a5da3c2d"><Image src={fiverrLogo} /></a> 
            </p>

            <h1 className={headerStyles.description}>...Or better yet, join me on Patreon for full access to all my indicators!</h1>

        </motion.div>
        
    )
}

export default CTA