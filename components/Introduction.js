import styles from '../styles/Disclaimer.module.css'

const Introduction = () => {

    return ( 
        <div className = {styles.disclaimer}>
            <h1 className="mb-4 text-4xl lg:text-6xl leading-tight">Welcome to ThinkTradeProfit.com</h1>
                <br />
            <p className="mb-4 mr-6 text-3xl lg:text-3xl leading-tight">This website is all about Technical Trading indicators - how to write them and how to test them.<br /><br />We make automated backtests, check indicators across a variety of timeframes and assets, and provide content to help you become a better trader.</p>
            <br /><p className="mb-4 mr-6 text-2xl lg:text-2xl leading-tight"><strong>This is not a typical indicator site.</strong>   <br /><br />I am not just here to sell you indicators or tell you how to trade.  Instead, I want to help you by providing tools, methods, and insights that help you filter out the noise, become a better tester of ideas, and in the end make the markets more understandable and navigable..</p>
            <br /><p className="mb-4 mr-6 text-2xl lg:text-2xl leading-tight"><strong>Most of the trading education market is filled with half-truths, opinions presented as facts, and sometimes outright SCAMS!</strong><br /><br />What we need are tools and systems for testing the ideas that are shared widely, a vetting process to see what actually works and what doesn't.   This is where coded strategies and backtesters in ThinkScript come in.</p>   
                   

            <br /><p className="mb-4 mr-6 text-2xl lg:text-2xl leading-tight">Ultimately, I have two objectives:
                    <ul className={styles.list}> 
                        <li>Provide high-quality indicators and backtests to help inform and educate my visitors.</li>
                        <li>Push back against those in the trading industry that make outlandish claims, post unverifiable result, and ultimately cost YOU money!</li>
                    </ul> 
                </p>
                <br /><p className="mb-4 mr-6 text-2xl lg:text-2xl leading-tight">If that sounds interesting to you, check some of the free articles in the Thoughts Blog, some of my free indicators, and the video contents below.  
                </p>
                <br /><p className="mb-4 mr-8 text-xs lg:text-xs leading-tight">***I am not endorsed by or in any way affiliated with ThinkOrSwim (other than having a personal balance in my account with them).   I use ThinkScript simply because it is the language whih I understand best and feel most somfortable coding projects in.</p>
        </div>
    );
}

export default Introduction