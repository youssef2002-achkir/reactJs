import React from 'react'

const Form = (props) => {
    return(
            <form onSubmit={props.weather}>
                <input type="text" placeholder='City...'  name='city'/><br/><br/>
                <input type="text" placeholder='Country... ' name='country'/><br/><br/>
                <button>Get Weather</button>
            </form>
    )    
}

export default Form