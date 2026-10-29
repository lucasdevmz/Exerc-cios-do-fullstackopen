import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const App = () => {
  const course = {
name: 'Desenvolvimento de aplicação Half Stack',
parts: [
{
  name: 'Fundamentos da biblioteca React',
  exercises: 10
},

{
   name: 'Usando props para passar dados',
   exercises: 7 
},
{
  name: 'Estado de um componente',
  exercises: 14
}
]
}

  return (
    <div className="App">
      <Header course={course.name} />
      <Content part1={course.parts} />
      <Total exercises1={course.parts} />
    </div>
  );
}

export default App;