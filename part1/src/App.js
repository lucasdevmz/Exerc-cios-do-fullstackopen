import { useState } from "react";
import Button from "./Button";
import Title from "./Title";
import Statistics from "./Statistics";

const App = () => {
const anecdotes = [
  'Se fazer algo dói, faça isso com mais frequência.',
  'Contratar mão de obra para um projeto de software que está atrasado, faz com que se atrase mais ainda.',
  'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
  'Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
  'Otimização prematura é a raís de todo mal.',
  'Antes de mais nada, depurar é duas vezes mais difícil do que escrever código. portanto, se você escrever código de forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.',
  'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.', 
  'A única maneira de ir rápido é ir bem.'
];
const [anecdote, setAnecdote] = useState({selected: 0, vote: 0, voted: []});
const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);
const handleClickGood = () => setGood(good +1);
const handleClickNeutral = () => setNeutral(neutral + 1);
const handleClickBad = () => setBad(bad +1);
const sum = (good, neutral, bad) => good + neutral + bad;
const total = sum(good, neutral, bad);
const HandleAvarage = () => total / 3;
const handlePositive = () => (good / total) * 100;
const getNextRandomAnecdote =(min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const selectAnedote = () => {
const aleatoryAnecdote =  getNextRandomAnecdote(0, anecdotes.length - 1);
const select = {  
  ...anecdote, 
  selected: aleatoryAnecdote};
    setAnecdote(select);
};  
const voteAnecdote = () => {
const copyVoted = [...anecdote.voted];
  copyVoted[anecdote.selected] = (copyVoted[anecdote.selected] || 0) + 1;
  const anedoteVoted = {
    ...anecdote,
    vote: copyVoted[anecdote.selected],
    voted: copyVoted
  }
 setAnecdote(anedoteVoted);
};

const copySelectedAnecdote = {...anecdote.voted};
const mostVotedAnecdote = (object) => {
  let highestVote = 0;
  let mostVoted = {vote: 0, key: null};
  let key;
  for(key in object) {
    let vote = object[key];
    if(vote > highestVote) {
      highestVote = vote;
      mostVoted = {vote: vote, key: key};
    }
  }
 return mostVoted;
}
const mostVote = mostVotedAnecdote(copySelectedAnecdote);
return ( 
     <div>
      <Title text = 'Give Feedback' />
        <Button onClick = {handleClickGood} text = 'Good'/> 
        <Button onClick = {handleClickNeutral} text = 'Neutral'/>
        <Button onClick={handleClickBad} text = 'Bad'/>
      { (good || good && neutral || good && bad || neutral && bad || bad || neutral )? (
      <div>
        <Title text= 'Statistics'/>
      <table>
      <tbody>
        <tr><Statistics text='good' value = {good} /></tr>
        <tr><Statistics text='neutral' value = {neutral} /></tr>
        <tr><Statistics text='bad' value = {bad} /></tr>
        <tr><Statistics text= 'all' value={total} /></tr>
        <tr><Statistics text='avarage' value={HandleAvarage()} /></tr>
        <tr><Statistics text='positive' value={handlePositive()} percent='%' /></tr>
      </tbody>
      </table>
      </div>
      ) : (
  <div>
  <Title text='Statistics' />
  <p>No feedback given</p>
  </div>
  )}
  <div>
    <p>{anecdotes[anecdote.selected]}</p>
    <p>has {copySelectedAnecdote[anecdote.selected]} votes</p>
    <Button text='vote' onClick={voteAnecdote} />
    <Button text='Next anecdote' onClick={selectAnedote} />
  </div>
  <div>
    <Title  text = 'Anedocte with most votes'/>
    <p>{anecdotes[mostVote.key]}</p>
     <p>Tem {mostVote.vote} votos</p>
  </div>
</div>
  );
}
export default App;