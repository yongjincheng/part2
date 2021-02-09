import React, { useState,useEffect } from 'react'

const PersonForm = ({addPerson, newName, handleNameChange, newNumber, handleNumberChange}) => {
  return(
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange}/>
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange}/>
      </div>
        <button type="submit">add</button>
    </form>
  )
}

const FilterForm = ({filterText, handleFilterChange}) => {
  return(
    <div>
      filter shown with <input value={filterText} onChange={handleFilterChange}/>
    </div>
  )
}

const Person = ({person}) => {
  return(
    <p>
      {person.name} {person.number}
    </p>
  )
}

const Persons = ({persons, filterText}) => {
  const showPersons = persons.filter(person => 
    person.name.toLowerCase().includes(filterText.toLowerCase()))
  return(
  <p>
    {showPersons.map(person => <Person person = {person} key={person.name}/>)}
  </p>
)}

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterText, setFilterT] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const existingNames = persons.map(person => person.name)
    const personObject = {
      name: newName,
      number: newNumber
    }

    if(existingNames.includes(newName)){
      window.alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(personObject))
    }
    setNewNumber('')
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilterT(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm
        filterText = {filterText} 
        handleFilterChange= {handleFilterChange}
      />
      <h3>add a new</h3>
      <PersonForm 
        addPerson={addPerson} 
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons = {persons} filterText={filterText}/>
    </div>
  )
}

export default App