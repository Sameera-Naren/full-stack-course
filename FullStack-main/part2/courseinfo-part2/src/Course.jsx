// src/Course.jsx
const Header = ({ name }) => <h1>{name}</h1>

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Content = ({ parts }) => (
  <div>
    {parts.map(part => (
      <Part key={part.id} part={part} />
    ))}
  </div>
)

const Course = ({ course }) => {
  const total = course.parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  )

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <p>Total of {total} exercises</p>
    </div>
  )
}

export default Course
