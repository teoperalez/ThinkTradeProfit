import ctaStyles from '../styles/CTA.module.css'
import Image from 'next/image'
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
            

            <h1 className={ctaStyles.patdes}>...Or better yet, join me on Patreon for full access to all my indicators!</h1>
            
                
                    <div className={ctaStyles.patlev1}>
                        <a href="https://www.patreon.com/user?u=67002473">
                        <h2>Beginner Scripter<br />$4.99</h2> 
                        <ul>
                            <li>Patron-only posts and messages</li>
                            <li>Basic Indicator Source Code</li>
                            <li>Weekly Forward-test Anaysis</li>
                        </ul>
                        </a>
                    </div>
                    <div className={ctaStyles.patlev2}>
                        <a href="https://www.patreon.com/user?u=67002473">
                        <h2>Script Boss<br />$12.99</h2> 
                        <ul>
                            <h3>Lower Tier Benefits PLUS:</h3>
                            <li>Patron-only voting power</li>
                            <li>Strategy Code with Stop Loss and Take Profit Settings</li>
                        </ul>
                        </a>
                    </div>
                    <div className={ctaStyles.patlev3}>
                        <a href="https://www.patreon.com/user?u=67002473">
                        <h2>Chart Master<br />$19.99</h2> 
                        <ul>
                        <h3>Lower Tier Benefits PLUS:</h3>
                            <li>Order Custom Indicators Strategies, Scanners or Alerts</li>
                            <li>Full library access</li>
                        </ul>
                        </a>
                    </div>
                

            
       </div>
        
    )
}

export default CTA