import React, {useState} from "react";
import axios from "axios";

function CreatManager() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPasword] = useState('');   

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            let jwt ="eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJib3NzQG0uZGsiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJNYW5hZ2VyIiwiTW9kZWxJZCI6Ii0xIiwibmJmIjoiMTY4MzEyMzMzOCIsImV4cCI6IjE2ODMyMDk3MzgifQ.CKiNoaLnoIOtjH_2-Kq-LJ6T9CPpB7AtjysC5-FbHb8";
            const config = {
                headers:{
                  'Authorization': 'bearer '+ jwt,
                
                }
            }
            const response = await axios.post('https://localhost:7181/api/Managers', {
                firstName,
                lastName,
                Email:mail,
                password
            }, config);
            console.log(response.data);
        } 
        catch (error){
            console.error(error);
    }
}

return(
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
);

}

export default CreatManager;