import React from 'react'
import Card from './Card'

function Admin({ applydata }) {
    return (
        <div className='Adminboard'>
            <div className='totalCount'>
                <h4>Total Count</h4>
                <h1>{applydata.length}</h1>
            </div>
            <div className='dataConatiner'>
                {applydata.map(el => <Card data={el} />)}
            </div>
        </div>
    )
}

export default Admin