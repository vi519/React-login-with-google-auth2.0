import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import './Login.css'

const clientId ="159546437369-m54p9i17e32rfi91o0m13mjrbribgkak.apps.googleusercontent.com";



function Login() {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const[data,setData]=useState();
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
         setData(res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);

    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
        <div className="content">
            { showloginButton ?
                <GoogleLogin 
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess} >

                        
                </GoogleLogout> 

                
                : null
            }
{showlogoutButton ?
<h1> Hi {data.name}😀</h1>:null
}


        </div>
    );
}
export default Login;