// src/App.jsx
import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'Writing code every day makes you better.',
    'Reading other people’s code teaches you a lot.',
    'Small commits are easier to understand and review.',
    'Clear names make code easier to read.',
    'Testing your code helps you find bugs early.',
    'Taking breaks can help you solve problems faster.',
    'Writing comments for tricky parts saves time later.',
    'Practice is the best way to learn programming.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const maxVotes = Math.max(...votes)
  const indexOfMax = votes.indexOf(maxVotes)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNextAnecdote}>next anecdote</button>

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[indexOfMax]}</p>
      <p>has {maxVotes} votes</p>
    </div>
  )
}

export default App
