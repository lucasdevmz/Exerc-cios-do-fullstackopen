const Total = (props) => {
    console.log(props.exercises1);
    const totalExercises = props.exercises1.reduce((sum, part) => sum + part.exercises, 0);
    console.log(totalExercises)
    return(
<>
<p><strong>Total: {totalExercises}</strong></p>
</>
    );
}

export default Total;