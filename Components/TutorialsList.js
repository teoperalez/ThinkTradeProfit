import videoStyles from '../styles/Video.module.css'


const TutorialsList = ( ) => {

    return (
        
        <div className={videoStyles.sectiontop}>
            <h1 className={videoStyles.title}>ThinkScript Tutorials</h1>
            <div className={videoStyles.contents}>
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
        </div>
    )
}

export default TutorialsList
