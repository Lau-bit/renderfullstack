import { useState, useEffect } from 'react';
import Search from './Components/Search';
import PhoneBookForm from './Components/PhoneBookForm';
import PersonDetails from './Components/PersonDetails';
import communication from './services/communication';
import Notification from './Components/Notification'

const App = () => {
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [search, setSearch] = useState("");
  const [persons, setPersons] = useState([]);
  const [post, setPost] = useState(null); 
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const fetchNames = () => {
    communication
    .getNames()
    .then(response => {
      setPersons(response.data);
    })
  }

  useEffect(() => {
    fetchNames();

  }, [])

  const createPost = () => {
    communication
    .createName(newName, newPhoneNumber)
    .then((response) => {
      setPost(response.data);
      setIsError(false)
      setMessage(`Added ${newName}`);
      setTimeout(() => {
        setMessage("");
      }, 5000)
      fetchNames();
    })
  }

  const searchResult = persons.filter(person => 
  Object.values(person).some(value => value.toLowerCase().includes(search.toLowerCase()))
);  

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredPersons = persons.filter(name => name.name.toLowerCase() === newName.toLowerCase());
    if (filteredPersons.length === 0)
    {
      setIsError(false);
    setPersons([...persons, {name: newName, number: newPhoneNumber}]);
    createPost()
    }
  else {
    setMessage(`${newName} already exists in the phonebook`);
    setIsError(true);
    setTimeout(() => {
      setMessage("");
    }, 5000)
  }
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const handleNewPhoneNumber = (e) => {
    setNewPhoneNumber(e.target.value);
  }

  const handleDelete = (e) => {
  console.log(e.target);
  communication.deleteName(e.target)
  .then(() => {
    fetchNames();
    setMessage(`${e.target.name} deleted`);
    setTimeout(() => {
      setMessage("");
    }, 5000)
  });
}

  return (
    <div>
      <h1>Phonebook</h1>
      <Search handleSearch={handleSearch}/>

      <PhoneBookForm handleSubmit={handleSubmit} handleNewName={handleNewName} handleNewPhoneNumber={handleNewPhoneNumber}/>

      {
      message.length > 0 && (
      isError ? <Notification message={message} classReference={"error"}/> : <Notification message={message} classReference={"success"}/>
      )
}
      <h2>Numbers</h2>

      {search.length > 0 ?
            <PersonDetails persons={searchResult} handleDelete={handleDelete}/> :
      <div>
            <PersonDetails persons={persons} handleDelete={handleDelete}/>
      </div>}

    </div>
  )
}

export default App