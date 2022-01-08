import styles from '../styles/Disclaimer.module.css'
import LongDisclaimer from '../Components/longdisclaimer';

const Disclaimer = () => {

    return(
       <div className={styles.disclaimer}>
        <LongDisclaimer />    
       </div>
    );
}

export default Disclaimer