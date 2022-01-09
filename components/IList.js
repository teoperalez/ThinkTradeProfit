import indiStyles from '../styles/IndiList.module.css'
import Link from 'next/link'
import Image from 'next/image'


const IList = ({indicators}) => {
    
    return (
        <div className={indiStyles.sectiontop}>
            
        </div>
    );
};

export default IList

export const getServerSideProps = async () => {
    const response = await fetch("https://www.thinktradeprofit.com/api/indicator");
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
      
  
    const indicators = await response.json();
    return {
      props: {
        indicators
      }
    };
  }
