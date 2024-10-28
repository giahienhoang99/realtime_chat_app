import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";

const SignUp = () => {

    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-white">Sign Up for your
                    <span className="text-rose-400"> ChatApp</span>
                </h1>
                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-base text-white label-text">Full name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Joe Mama"
                            className="w-full text-rose-400 input input-bordered h-8 placeholder:text-rose-400"
                            value={inputs.fullName}
                            // e = change event
                            // e.target = refers to the element that triggered the event (in this case, the input field)
                            // e.target.value = value of the input field
                            // ... is the spread operator in js => ...inputs means to copy all fields in inputs into a new obj
                            onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                            // this line means => on the event that input field is changed, set or update the input to a new obj
                            // with fields copied from the predefined inputs but the fullName is overrided with the newly entered val in the field
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base text-white label-text">Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="joemama"
                            className="w-full bg-black bg-opacity-60 text-rose-400 input input-bordered h-8 placeholder:text-rose-400"
                            value={inputs.username}
                            onChange={(e) => setInputs({...inputs, username: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base text-white label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full bg-black bg-opacity-60 text-rose-400 input input-bordered h-8 placeholder:text-rose-400"
                            value={inputs.password}
                            onChange={(e) => setInputs({...inputs, password: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base text-white label-text">Confirm password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Re-enter your password"
                            className="w-full bg-black bg-opacity-60 text-rose-400 input input-bordered h-8 placeholder:text-rose-400"
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                        />
                    </div>

                    <GenderCheckbox />

                    <Link to="/login" className="text-xs text-white hover:underline hover:text-rose-200 inline-block">
                        Already have an account?
                    </Link>
                    <div>
                        <button className="bg-black bg-opacity-60 text-rose-400 h-8 btn btn-block btn-sm mt-2 border border-slate-700">Gimme my new account :D</button>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default SignUp;

/*
STARTER CODE FOR SIGN UP PAGE

import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-white">Sign Up for your
                    <span className="text-rose-400"> ChatApp</span>
                </h1>
                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-base text-white label-text">Full name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Joe Mama"
                            className="w-full text-rose-400 input input-bordered h-8 placeholder:text-rose-400"
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base text-white label-text">Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="joemama"
                            className="w-full bg-black bg-opacity-60 text-rose-400 input input-bordered h-8 placeholder:text-rose-400"
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base text-white label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full bg-black bg-opacity-60 text-rose-400 input input-bordered h-8 placeholder:text-rose-400"
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base text-white label-text">Confirm password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Re-enter your password"
                            className="w-full bg-black bg-opacity-60 text-rose-400 input input-bordered h-8 placeholder:text-rose-400"
                        />
                    </div>

                    <GenderCheckbox />

                    <a className="text-xs text-white hover:underline hover:text-rose-200 inline-block" href="#">
                        Already have an account?
                    </a>
                    <div>
                        <button className="bg-black bg-opacity-60 text-rose-400 h-8 btn btn-block btn-sm mt-2 border border-slate-700">Gimme my new account :D</button>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default SignUp;

*/