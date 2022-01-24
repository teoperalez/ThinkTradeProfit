import ctaStyles from '../styles/CTA.module.css'
import Image from 'next/image'
import Link from 'next/link'
import fiverrLogo from '../public/fiverr-freelance-marketplace-review-pricing-finder-finland-765727.png'

const CTA = () => {
    
    
    return(
        
          <div className={ctaStyles.container}> 
            <h1 
            
            className={ctaStyles.head}>
                <span >Need a custom Indicator or Strategy?</span><br />
            </h1>    
            <h2 className={ctaStyles.fivdes}>
                Hire me on
            </h2> 
            <a className={ctaStyles.fivbutton} href="https://www.fiverr.com/teoperalez/code-any-thinkscript-indicator-alert-or-strategy?source=order_page_summary_gig_link_image&funnel=0938d61a77d1d602495d1a69a5da3c2d"><Image src={fiverrLogo} layout={"intrinsic"} /></a> 
            <p className={ctaStyles.patdes}><Link href="/beforeyouorder" >
                All orders are subject to my conditions.   Check the "Before You Order" page for more details.</Link></p>
               

            
       </div>
        
    )
}

export default CTA