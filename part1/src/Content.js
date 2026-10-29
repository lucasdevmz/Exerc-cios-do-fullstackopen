import Part from "./Part";

const Content = (props) => {
  
    return(
        <>
        {props.part1.map((part) => (
        <div key={part.name}>
            <Part content={part.name} exercise={part.exercises}/>
        </div>
         ))}    
        </>
    )
}

export default Content;