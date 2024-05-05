const PersonDetails = ({persons, handleDelete}) => {
    return (
<>
              {persons.map((person, index) => {
              return (
        <li key={index} style={{listStyleType: "none"}}>
          <span>{person.name}</span>
          <span>{person.number}</span>
          <button onClick={handleDelete} id={person.id} name={person.name}>Delete</button>
        </li>
      )})}
</>
    )
}

export default PersonDetails;