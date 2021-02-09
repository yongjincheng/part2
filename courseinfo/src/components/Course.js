import React from 'react'

const Header = (props) => <h1>{props.course}</h1> 

const Total = (props) => <p>Number of exercises {props.count}</p>

const Content = (props) =>{
  return(
  <div>
    {props.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
  </div>
  )
}

const Course = ({course})=>{
  let sum = course.parts.map(e => e.exercises).reduce((accumulator,currentValue)=>
  accumulator+currentValue,0
  )
  //console.log(sum)
  return (
    <div>
      <Header course={course.name} />
      <Content 
          parts={course.parts}
      /> 
      <Total count={sum} />
    </div>
  )

}
export default Course;