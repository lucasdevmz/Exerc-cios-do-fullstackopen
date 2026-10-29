const Content = (props) => {
    console.log(props.part1);
    console.log(props.part2);
    console.log(props.part3);
    return(
        <div>
            <p>{props.part1}</p>
            <p>{props.exercises1}</p> 
            <p>{props.part2}</p>
            <p>{props.exercises2}</p> 
            <p>{props.part3}</p>
            <p>{props.exercises3}</p> 
        </div>
    )
}

export default Content;