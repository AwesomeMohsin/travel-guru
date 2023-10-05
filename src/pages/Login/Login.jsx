import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {

    const { loginUser, googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // login user
        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate('/')
            })
            .catch(error => console.error(error)
        )
    }
    
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const credintial = GoogleAuthProvider.credentialFromResult(result);
                const token = credintial.accessToken;
                navigate('/')
            })
            .catch(error => {
            console.log(error);
            })
        
    }




    return (
        <div className="border">
            <h2 className="text-3xl my-10 text-center">Login</h2>

            <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>

            </form>
            <p className="text-center mt-4">Do not have an account? <Link className="text-blue-500 font-bold" to='/register'>Register</Link></p>
            <hr className="mt-10" />
            <p className="text-center">Or</p>
            <hr className="mb-10" />

            <div className="flex flex-col gap-4 w-1/2 mx-auto pb-10">

                <button onClick={handleGoogleLogin} className="btn">
                    <img className="w-7" src="/public/images/icons/google.png" alt="" />Continue with Google</button>

                <button className="btn">
                    <img className="w-7" src="/public/images/icons/fb.png" alt="" />Continue with Facebook</button>
            </div>

        </div>
    );
};

export default Login;