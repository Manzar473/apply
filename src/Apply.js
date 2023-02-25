import React, { useEffect } from 'react'
import { useState } from 'react'

function Apply(props) {
    const [data, setdata] = useState({
        name: '',
        regNo: '',
        phone: '',
        email: '',
        lastSem: '',
        gpa: '',
        field: '',
    })
    useEffect(() => {
        if (data.name === 'Kumail' && data.regNo === 'ranger80') {
            props.setShowAdmin(true)
        }
    }, [data])

    const submit = () => {
        if (data.name && data.regNo && data.phone && data.email && data.lastSem && data.gpa && data.field) {
            setdata({
                name: '',
                regNo: '',
                phone: '',
                email: '',
                lastSem: '',
                gpa: '',
                field: '',
            })
            props.addData(data)
            alert("Submit Successfully!")
        } else {
            alert("Error!: Fill all fields")
        }


    }
    return (
        <div>
            <h1>Hi! Welcome to <span>paid internship portal</span></h1>
            <h3>An Employment program through job fair</h3>
            <div className='form'>
                <h3>Please put your necessarily information</h3>
                <input value={data.name} type='text' placeholder='Name..' onChange={(e) => setdata({ ...data, name: e.target.value })}></input>
                <input value={data.regNo} type='text' placeholder='Reg No..' onChange={(e) => setdata({ ...data, regNo: e.target.value })}></input>
                <input value={data.phone} type='number' placeholder='Phone no..' onChange={(e) => setdata({ ...data, phone: e.target.value })}></input>
                <input value={data.email} type='email' placeholder='Email..' onChange={(e) => setdata({ ...data, email: e.target.value })}></input>
                <input value={data.lastSem} type='text' placeholder='Last semester passed..' onChange={(e) => setdata({ ...data, lastSem: e.target.value })}></input>
                <input value={data.gpa} type='number' placeholder='Last semester GPA..' onChange={(e) => setdata({ ...data, gpa: e.target.value })}></input>
                <select value={data.field} name="field" id="field" onChange={(e) => setdata({ ...data, field: e.target.value })}>
                    <option value="" disabled selected>Field of Interest</option>
                    <option value="Poultry Form">Poultry Form</option>
                    <option value="Nutritons (poultry + animal)">Nutritons (poultry + animal)</option>
                    <option value="Dairy Farms">Dairy Farms</option>
                    <option value="Reproduction">Reproduction</option>
                    <option value="Pharmaceutical companies">Pharmaceutical companies</option>
                    <option value="Pet Centers">Pet Centers</option>
                    <option value="Pathological Laboratories">Pathological Laboratories</option>
                    <option value="Public Health">Public Health</option>
                </select>
                <button onClick={submit}>Submit</button>
            </div>
        </div>
    )
}

export default Apply