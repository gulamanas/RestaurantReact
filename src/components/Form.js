import React from 'react'
import './Form.css'

function Form() {
    const formSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='form'>
            <form onSubmit={formSubmit} className="form_container">
                <h3>Reservation</h3>
                <div action="" className="form_wrapper">
                    <input type="text" placeholder='Full Name' />
                    <input type="text" placeholder='Contact No.' />
                    <input type="email" placeholder='Email ID' />
                    <input type="date" />
                    <input type="number" placeholder='0' />
                </div>
                <input className='form_btn' type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form
