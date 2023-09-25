'use client';
import Link from 'next/link'
import { AuthContext } from '@/providers/AuthProviders';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';

const LoginPage = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Login !</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
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
                            <button className="btn btn-primary text-white bg-primary capitalize">Login</button>
                        </div>
                    </form>
                    <p className='mb-4 ml-8'>
                        <Link href="/signUp" className="label-text-alt link link-hover">
                            New to RENTAL RIDE? <span className='font-bold'>Please Register</span>
                        </Link>
                    </p>
                    <div className='text-center'>
                    <button onClick={handleGoogleSignIn} className="btn btn-primary btn-sm rounded-full border-2 border-deepNavy mb-2 text-center text-white bg-primary capitalize"><FaGoogle /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;