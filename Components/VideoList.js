import videoStyles from '../styles/Video.module.css'
import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';



const VideoList = () => {
    return (
        
        <div>
            <h1 className={videoStyles.title}>Thoughts</h1>
            <div className={videoStyles.contents}>
            
            <div id = "1" className={videoStyles.card} style={{ backgroundImage: `url(../public\How_to_backtest_a_trading_strategy.jpg)` }}>
            <div className={videoStyles.playbutton}>
                
            </div>
            <h2 className={videoStyles.cardtitle}>Backtesting Basics</h2>
        <div className={videoStyles.cardcontent}>
            
            
            <p className={videoStyles.cardbody}>Learn best practices for backtesting in TOS and code a custom backtest! Discover the many ways we can fully backtest before risking capital.</p>
            <Link href="/" >
                <a className={videoStyles.button}>Read More...</a>
            </Link>
        </div>
    </div>
    <div id = "2" className={`${videoStyles.card} ${videoStyles.hidden}`}>
    <h2 className={videoStyles.cardtitle}>Indicator Alerts</h2>
        <div className={videoStyles.cardcontent}>
            
            <p className={videoStyles.cardbody}>Want to hear a sound when your indicator gives a buy or sell?  Follow the simple tutorial to setup your first indicator alerts!</p>
            <Link href="/" >
                <a className={videoStyles.button}>Read More...</a>
            </Link>
        </div>
    </div>
    <div id = "3" className={`${videoStyles.card} ${videoStyles.hidden}`}>
    <h2 className={videoStyles.cardtitle}>Stoploss</h2>
        <div className={videoStyles.cardcontent}>

            
            <p className={videoStyles.cardbody}>"We win by not losing."  Let's dive in to stoplosses and profit-taking.   Can we make a simple code to automate this process?</p>
            <Link href="/" >
                <a className={videoStyles.button}>Read More...</a>
            </Link>
        </div>
    </div>
            </div>
        </div>
    )
}

export default VideoList
