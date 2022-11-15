//RegistrationForm.js

import {React, useState} from 'react';
import {initializeApp} from 'firebase/app';
import {getDatabase, ref, set} from 'firebase/database';

function FormDisplay()
{
    const[name, setName]=useState("");
    const[pwd, setPwd]=useState("");
    const[email, setEmail]=useState("");
    const[mobile, setMobile]=useState("");
    const firebaseConfig={
        apiKey: "AIzaSyB1hbNuzKBLk2514WSkJALy6H0IuPgBydw",
        authDomain: "awe-lab-b1572.firebaseapp.com",
        databaseURL: "https://awe-lab-b1572-default-rtdb.firebaseio.com",
        projectId: "awe-lab-b1572",
        storageBucket: "awe-lab-b1572.appspot.com",
        messagingSenderId: "366838870579",
        appId: "1:366838870579:web:8bef7a65a6f5206b142946",
        measurementId: "G-T1RJV1TWWP"
    };

    let handle=(Event)=>{
        let n=Event.target.name;
        let val=Event.target.value;
        if(n=="name")
            setName(val);
        if(n=="email")
            setEmail(val);
        if(n=="mobile")
            setMobile(val);
        if(n=="pwd")
            setPwd(val);
    };
    
    let insert=(Event)=>{
        Event.preventDefault();
        const app=initializeApp(firebaseConfig);
        const db=getDatabase();
        set(ref(db, 'Users/'+name), {name, email, mobile, pwd});
        console.log('Data stored in firebase');
    };

    let resetForm=(Event)=>{
        setName("");
        setPwd("");
        setEmail("");
        setMobile("");
    };

    return <>
            <form action="" name="registration" onSubmit={insert}>
                <table border="0" cellSpacing="10" align="center">
                    <body>
                        <tr>
                            <td><label>Name: </label></td>
                            <td><input type="text" name="name" value={name} onChange={handle}/></td>
                        </tr>
                        <tr>
                            <td><label>Email: </label></td>
                            <td><input type="email" name="email" value={email} onChange={handle}/></td>
                        </tr>
                        <tr>
                            <td><label>Mobile: </label></td>
                            <td><input type="text" name="mobile" value={mobile} onChange={handle}/></td>
                        </tr>
                        <tr>
                            <td><label>Password: </label></td>
                            <td><input type="password" name="pwd" value={pwd} onChange={handle}/></td>
                        </tr>
                        <tr>
                            <td><input type="submit" value="Submit"/></td>
                            <td><input type="reset" value="Clear" onClick="resetForm"/></td>
                        </tr>
                    </body>
                </table>
            </form>
        </>;
}
export default FormDisplay;
