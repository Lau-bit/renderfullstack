const PhoneBookForm = ({handleSubmit, handleNewName, handleNewPhoneNumber}) => {

    return (
        <>

<form onSubmit={handleSubmit}>
  <div>
    name: <input onChange={handleNewName}/>
  </div>
  <div>
    number: <input onChange={handleNewPhoneNumber}></input>
  </div>
  <div>
    <button type="submit">add</button>
  </div>
</form>
        </>
    )
}

export default PhoneBookForm;