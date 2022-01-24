import styles from '../styles/Disclaimer.module.css'

const Before = () => {

    return ( 
        <div className = {styles.disclaimer}>
            <h1 className="mb-4 text-4xl lg:text-6xl leading-tight"><strong>Before you place an order</strong></h1>
                <br />
            <p className="mb-4 mr-6 text-3xl lg:text-3xl leading-tight">There are a few things that I need to make absolutely clear.  If any of these conditions are not agreeable to you, please find a different seller.   <br /><br />Best regards, <br />Teo</p>
            <br />
            <h1 className="mb-4 text-4xl lg:text-6xl leading-tight"><strong>Conditions</strong></h1>
            <ul className = {styles.list}>
                <li>For Indicator orders:
            <ol className = {styles.numlist}>
                <li>
                    I do not sell my own ideas or systems.  The Buyer must specify in full the indicator logic to be coded (either providing existing indicators or laying out the logic of the indicator).    
                </li>
                <li>
                    Revisions apply to fixing issues in the delivered product, not re-writing a bad indicator idea from scratch.   If the output is the same as specified in the order, then any changes to the underlying logic require a new contract job.
                </li>
                <li>
                    Nothing is delivered with any guarantee of profitability.   You must use the ideas you provide at your own risk.  
                </li>
                
                <li>
                    I only code ideas that you provide as the customer.   This site is not about selling systems to you.   I do not recommend strategies to you, and I do not provide trading or financial advice. If you lose money, that is on you.   If you make money, I don't get any part of it either.          
                </li>
            </ol>
            </li>
            <li>For Backtester Orders:
                <ol className = {styles.numlist}>
                    <li>
                        Requiring a Profitable Backtest as a condition of the order will result in immediate refusal of the order.  There is no way to know the results of a backtest until it has been completed, and it's ultimately YOUR responsibility to come up with a profitable strategy, not mine. 
                    </li>
                    <li>
                        Payment for backtests is based on my time to perform the backtest, not the results.   Even if the backtest turns out to be unprofitable using the methods perscribed in the order as specified by the buyer, payment must still be made in full. 
                    </li>
                    <li>
                        The Buyer must specify the timeframes, stoploss and take profit levels, and strategy rules to be used in a backtest.   I will not make up my own rules for your system, or adjust settings to "make it more profitable."
                    </li>
                </ol>
            </li>
            </ul>
        </div>
    );
}

export default Before