import logo from './logo.svg';
import { useEffect, useState } from 'react'
import './App.css';
import Apply from './Apply';
import Admin from './Admin';
import { db } from './firebaseConfig';
import { collection, getDocs, addDoc, updateDoc, doc, onSnapshot } from "firebase/firestore"


function App() {
  const [showAdmin, setShowAdmin] = useState(false)
  const [applydata, setapplydata] = useState([])
  const usersCollectionRef = collection(db, "apply")

  const getUsers = async () => {
    await onSnapshot(usersCollectionRef, (data) => {
      setapplydata(data.docs[0].data().record);
    })
  };

  useEffect(() => {
    getUsers()
  }, [])


  const addData = async (data, other) => {
    const id = "sauI6TejgAmR2njNZYqN"
    const userDoc = doc(db, "apply", id)
    const newData = {
      record: [...applydata,
      {
        name: data.name,
        regNo: data.regNo,
        phone: data.phone,
        email: data.email,
        lastSem: data.lastSem,
        gpa: data.gpa,
        field: data.field === 'Other' ? other : data.field,
      }
      ]
    }
    await updateDoc(userDoc, newData)
    // getUsers();
  }

  return (
    <div className="App">

      {showAdmin ? <Admin applydata={applydata} /> : <Apply addData={addData} setShowAdmin={setShowAdmin} />}
    </div>
  );
}

export default App;
