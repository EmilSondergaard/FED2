import React, {useState} from "react";
import axios from "axios";
import './GeneralStyle.css';
import { NavigationBar } from "./NavigationBar";

function CreatManager() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPasword] = useState('');   

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const config = {
                headers:{
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                }
            }
            const response = await axios.post('https://localhost:7181/api/Managers', {
                firstName,
                lastName,
                Email:mail,
                password
            }, config);
            console.log(response.data);
            setFirstName("");
            setLastName("");
            setMail("");
            setPasword("");

        } 
        catch (error){
            console.error(error);
    }
}

return(
    <div>
        <NavigationBar />
        <form onSubmit={handleSubmit}> 
        <label> Firstname:  <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} /> </label>
        <br/>
        <label> Lastname:  <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} /> </label>
        <br/>
        <label> Mail:  <input type="text" value={mail} onChange={(e) => setMail(e.target.value)} /> </label>
        <br/>
        <label> Password:  <input type="text" value={password} onChange={(e) => setPasword(e.target.value)} /> </label>
        <br/>
        <button type="submit" onChange={handleSubmit}> Create Manager </button>
        </form>
    </div>
);

}

export default CreatManager;