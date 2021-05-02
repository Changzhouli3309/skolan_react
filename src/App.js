import React, { useEffect, useState } from 'react';
import './App.css';
import StudentsList from './StudentsList';
import EditStudent from './EditStudent';

function App() {
  const [students, setStudents] = useState([])
  const [viewSwitch, setViewSwitch] = useState(true)

  function switchView() {
    setViewSwitch(!viewSwitch);
  }

  useEffect(() => {
    async function fetchStudents() {
      const resp = await fetch('http://localhost:8080/api/students')

      if (resp.status === 204) {
        setStudents([]);
      } else {
        const students = await resp.json()
        setStudents(students);
      }

    }
    fetchStudents();
    console.log(students);
  }, []);

  function addStudent(name, lastName, age, present) {
    async function fetchAdd() {
      const resp = await fetch('http://localhost:8080/api/student', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name,
          last_name: lastName,
          age: age,
          present: present
        })
      })
      if (resp.status === 201) {

      } else {
        alert("Fail to add, check your input")
      }
    }
    fetchAdd();
  }

  function updateStudent(i, name, lastName, age, present) {
    async function fetchUpdate() {
      const resp = await fetch(`http://localhost:8080/api/student/${students[i].student_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name,
          last_name: lastName,
          age: age,
          present: present
        })
      })
      if (resp.status === 200) {

      } else {
        alert("Fail to update, check your input")
      }
    }
    fetchUpdate();
  }

  function removePokemon(i) {
    async function fetchDel() {
      const resp = await fetch(`http://localhost:8080/api/student/${students[i].student_id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })
      if (resp.ok) {

      }
    }
    fetchDel();
  }

  return (
    <>
    {
      viewSwitch?
      <StudentsList switchView={switchView}/>:
      <EditStudent switchView={switchView}/>
    }
    </>
  )
}

export default App;

