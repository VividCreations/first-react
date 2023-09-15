export default function Tools(props) {
    return(
        <>
            <p>My name is {props.myName}</p>
            <p>My Skillsets include: </p>
            <ul>
                <li>{props.skill1}</li>
                <li>{props.skill2}</li>
                <li>{props.skill3}</li>
                <li>{props.skill4}</li>
                <li>{props.skill5}</li>
            </ul>
        </>
    )
}