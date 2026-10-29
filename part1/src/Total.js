const Total = (props) => {
    console.log(props.exercises3);
    return(
<>
   <p><strong>Total de exercícios: {props.exercises1 + props.exercises2 + props.exercises3}</strong></p> 
</>
    );
}

export default Total;