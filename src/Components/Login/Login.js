import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UseContext';
import { GithubAuthProvider } from 'firebase/auth';

const Login = () => {

    const { signIn,signInWithGoogle,signInWithGitHub } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                navigate('/');
            })
            .catch(error => console.error(error))

    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then( result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error));
      }
      //github
      const handelGitHubLogin =()=>{
        signInWithGitHub()
        .then((result) => {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
        
            // The signed-in user info.
            const user = result.user;
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GithubAuthProvider.credentialFromError(error);
            // ...
          });
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success">Google</button>
                    <button onClick={handelGitHubLogin} className="btn btn-outline btn-success">Github</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;