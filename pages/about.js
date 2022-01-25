import styles from '../styles/Disclaimer.module.css'

const About = () => {

    return ( 
        <div className = {styles.disclaimer}>
            <h1 className="mb-4 text-4xl lg:text-6xl leading-tight">About</h1>
                <br />
            <p className="mb-4 mr-6 text-3xl lg:text-3xl leading-tight">My name is Teo.   I am an American expat libing in Japan with my lovely wife.   I am a trader, specializing in options and equities on daily timeframes.   I am also  programmer and technical analysis nerd.  </p>
            <br /><p className="mb-4 mr-6 text-2xl lg:text-2xl leading-tight"> <br />I graduated with degrees in Corporate Finance and Economics from Colorado State University.  I have served in various roles, from a programmer of automated testing systems for the US Department of Commerce to a semi-professional online poker player to the top manager of a popular English school in Japan.   But trading has always been, and will always be my primary focus and passion.</p>
            <br /><p className="mb-4 mr-6 text-2xl lg:text-2xl leading-tight"><br />I only sell one product on this site, my own coding services.   However, I do not rely on these services for my living, and they are only really offered for projects that interest me and that I feel could help the community.   The primary focus here is on education and mproving the landscape of online trading education.</p>   
            
        </div>
    );
}

export default About