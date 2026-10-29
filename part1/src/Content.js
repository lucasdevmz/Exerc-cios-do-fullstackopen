import Part from "./Part";

const Content = (props) => {
    console.log(props);
  
    return(
        <div>
            <Part content={props.part1} exercise={props.exercises1}/>
             <Part content={props.part2} exercise={props.exercises2 }/>
            <Part content={props.part3} exercise={props.exercises3} />
        </div>
    )
}

export default Content;