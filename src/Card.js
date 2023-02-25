import React, { useState } from 'react'

function Card({ data }) {
    const [detail, setdetail] = useState(false)
    return (
        <div onClick={() => { setdetail(!detail) }} className='cardConatiner'>
            <p><span className='printedSpan'>Name: </span>{data.name}</p>
            <p><span className='printedSpan'>Last Semester:</span>{data.lastSem}</p>
            {detail && <> <p><span className='printedSpan'>Reg No: </span>{data.regNo}</p>
                <p><span className='printedSpan'>Phone:</span>{data.phone}</p>
                <p><span className='printedSpan'>Email:</span>{data.email}</p>
                <p><span className='printedSpan'>GPA:</span>{data.gpa}</p>
                <p><span className='printedSpan'>Field of Interest:</span>{data.field}</p></>}
        </div>
    )
}

export default Card