import React from 'react'

function localStorage() {
        const [input, setinput] = React.useState({
                name: " ",
                email: " ",
                password: " "
        });
        
        function handleInput(e) {
                setinput({...input, [e.target.name]: e.target.value})
        }

        const handleCilck = (e) => {

            
        }
    return (
        <div>
                <h1>Local Storage</h1>
                <form  onSubmit={handleCilck}>
                        <input type='name' placeholder='name' value={input.name} onClick={handleInput} /><br/>
                        <input type='email' placeholder='Email' value={input.email} onClick={handleInput} /><br/>
                        <input type='password' placeholder='password' value={input.password} onClick={handleInput} /><br/>
                </form>

        </div>
    )
}

export default localStorage