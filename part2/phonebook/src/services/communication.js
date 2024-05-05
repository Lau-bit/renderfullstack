import  axios  from "axios";
const baseUrl = "http://localhost:3001/persons";

const getNames = () => {
    return axios.get(baseUrl);
}

const createName = (newName, newPhoneNumber) => {
    return axios.post(baseUrl, {
        name: newName,
        number: newPhoneNumber
    });
}

const deleteName = (target) => {
    return axios.get(baseUrl)
    .then((users) => {
        // console.log(users.data);  
        const userFound = users.data.find(user => user.id === target.id);
        // console.log(userFound);
        window.confirm(`Delete ${target.name}?`)
        // console.log("before delete")
        return axios.delete(`${baseUrl}/${userFound.id}`)
        
    });
}

export default {
    getNames: getNames,
    createName: createName,
    deleteName: deleteName
}