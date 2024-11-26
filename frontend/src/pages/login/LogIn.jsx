import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const LogIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shdow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-white'>
                    Log in to your
                    <span className='text-rose-400'> ChatApp</span>
                </h1>
                <h3>Can log in using the following credentials:</h3>
                <h3>Username and Password: joemama</h3>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            className="w-full input input-bordered bg-black bg-opacity-60 text-rose-400 h-10 placeholder:text-rose-400"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full input input-bordered bg-black bg-opacity-60 text-rose-400 h-10 placeholder:text-rose-400"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Link to="/signup" className="text-xs text-white hover:underline hover:text-rose-300 mt-2 inline-block">
                        {"Don't"} have an account yet?
                    </Link>
                    <div>
                        <button className="btn btn-block btn-sm mt-2 bg-black bg-opacity-60 text-rose-400" disabled={loading}>
                            {loading ? <span className="loading loading-spinner"></span> : "Log in"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn;



/*
STARTER CODE FOR LOG IN PAGE
const LogIn = () => {
    
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shdow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-white'>
                    Log in to your
                    <span className='text-rose-400'> ChatApp</span>
                </h1>

                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            className="w-full input input-bordered bg-black bg-opacity-60 text-rose-400 h-10 placeholder:text-rose-400"
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full input input-bordered bg-black bg-opacity-60 text-rose-400 h-10 placeholder:text-rose-400"
                        />
                    </div>
                    <a href="#" className="text-xs text-white hover:underline hover:text-rose-300 mt-2 inline-block">
                        {"Don't"} have an account yet?
                    </a>
                    <div>
                        <button className="btn btn-block btn-sm mt-2 bg-black bg-opacity-60 text-rose-400">Log in</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn;
*/