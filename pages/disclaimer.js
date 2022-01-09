import styles from '../styles/Disclaimer.module.css'
import LongDisclaimer from '../components/LongDisclaimer';

const Disclaimer = () => {

    return(
       <div className={styles.disclaimer}>
        <LongDisclaimer /> LEt's try   
       </div>
    );
}

export default Disclaimer