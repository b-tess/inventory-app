import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

function Signup() {
    const name = useRef()
    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()

    async function createNewUser(userObj) {
        await fetch('https://inventory-app-izxl.onrender.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObj),
        })

        localStorage.clear()
    }

    const handleClick = () => {
        const userObj = {}
        if (
            name.current.value &&
            email.current.value &&
            password.current.value
        ) {
            userObj.name = name.current.value
            userObj.email = email.current.value
            userObj.password = password.current.value

            localStorage.setItem('name', name.current.value)
            localStorage.setItem('email', email.current.value)
            localStorage.setItem('password', password.current.value)
            localStorage.setItem('signup', email.current.value)

            const newUser = {
                ...userObj,
                isAdmin: false,
                isLoggedIn: false,
            }

            createNewUser(newUser)
            navigate('/login')
        }
    }

    return (
        <>
            <div className='login-box'>
                <div className='form-box'>
                    <h2 className='title'>sign up</h2>
                    <form action='push'>
                        <div className='input-group'>
                            <div
                                className='user-box'
                                id='nameField'
                            >
                                <input
                                    type='text'
                                    ref={name}
                                    placeholder='Name'
                                    name='name'
                                />
                            </div>
                            <div className='user-box'>
                                <input
                                    type='email'
                                    ref={email}
                                    placeholder='Email Address'
                                    name='email'
                                />
                                {/* <input type="email" placeholder="Email"> */}
                            </div>
                            <div className='user-box'>
                                <input
                                    type='password'
                                    ref={password}
                                    placeholder='Password'
                                />
                                {/* <input type="password" placeholder="Password"> */}
                            </div>
                        </div>
                        <div>
                            <button
                                type='button'
                                className='inputButton'
                                onClick={handleClick}
                            >
                                sign up
                            </button>
                            {/* <button type="button" className="loginBtn" >login</button> */}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup
