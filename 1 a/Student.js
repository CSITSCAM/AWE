//Student.js


import React from 'react';

function StudentData(props)
{
    return <>
                <h1>Student Name: {props.data.name}</h1>
                <h2>Branch: {props.data.branch}</h2>
            </>
}

export default StudentData;
