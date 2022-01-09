import styles from '../styles/Disclaimer.module.css'
import LongDisclaimer from './longdisclaimer';


const Disclaimer = () => {

    return(
       <div className={styles.disclaimer}>
         <LongDisclaimer /> 
       </div>
    );
}

export default Disclaimer