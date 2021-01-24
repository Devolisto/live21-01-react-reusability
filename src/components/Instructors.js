const Instructor = (props) => {
    const instructor = props.instructor;
    return (
        <div>
            <span className="Emoji">{instructor.emoji}</span>
            <span className="Name">{instructor.name}</span>
            <span className="GoToGithub">{instructor.goToGithub}</span>
        </div>
    )
}

export default Instructor;