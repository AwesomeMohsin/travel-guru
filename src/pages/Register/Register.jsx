import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

    const { createUser } = useContext(AuthContext)


    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // register user
        createUser(email, password)
            .then(result => {
            console.log(result.user);
            })
            .catch(error => console.error(error))
        
    }



    return (
        <div className="border">
            <h2 className="text-3xl my-10 text-center">Register</h2>

            <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">

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
                    <button className="btn btn-primary">Register</button>
                </div>

            </form>
            <p className="text-center mt-4">Already have an account? <Link className="text-blue-500 font-bold" to='/login'>Login</Link></p>
            <hr className="mt-10" />
            <p className="text-center">Or</p>
            <hr className="mb-10" />

            <div className="flex flex-col gap-4 w-1/2 mx-auto pb-10">

                <button className="btn">
                    <img className="w-7" src="/public/images/icons/google.png" alt="" />Continue with Google</button>

                <button className="btn">
                    <img className="w-7" src="/public/images/icons/fb.png" alt="" />Continue with Facebook</button>
            </div>

        </div>
    );
};

export default Register;