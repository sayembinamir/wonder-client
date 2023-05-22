import { Link } from 'react-router-dom';
import logo2 from '../../assets/images/login/login.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { updateProfile } from 'firebase/auth';

const SignUp = () =>
{

    const { createUser } = useContext(AuthContext);
    const handleSignUp = event =>
    {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const img = form.photoUrl.value;
        // console.log(name, email, password, img)

        createUser(email, password)
            .then(result =>
            {
                const user = result.user;
                updateProfile(user, {
                    displayName: name, photoURL: img
                  })
                // console.log(user)
            })
            .catch(error => console.log(error))
    }
    return (

        <div className='flex '>
            <div className='text-center lg:text-left w-1/2 '>
                <img className='w-full h-full' src={logo2} alt="" />
            </div>
            <div className="min-h-screen bg-gray-800 flex flex-col justify-center sm:py-12 w-1/2">
                <div className="p-10 xs:p-0 mx-auto md:w-full mt-4 md:max-w-md">
                    <h1 className="font-bold text-center text-3xl mb-5 text-white">Sign Up</h1>
                    <div className="bg-gray-100 shadow w-full rounded-lg divide-y divide-gray-300">
                        <form onSubmit={handleSignUp} className="px-5 py-7" action="#" method="POST">

                            <label className="font-semibold text-sm text-gray-700 pb-1 block">Name</label>
                            <input type="name" name="name" className="px-3 py-2 mt-1 mb-5 text-sm  input input-bordered input-secondary w-full max-w-xs" placeholder="Name" required />

                            <label className="font-semibold text-sm text-gray-700 pb-1 block">Email</label>
                            <input type="email" name="email" className="px-3 py-2 mt-1 mb-5 text-sm  input input-bordered input-secondary w-full max-w-xs" placeholder="Email" required />

                            <label className="font-semibold text-sm text-gray-700 pb-1 block">Password</label>
                            <input type="password" name="password" className="px-3 py-2 mt-1 mb-5 text-sm  input input-bordered input-secondary w-full max-w-xs" placeholder="Password" required />

                            <label className="font-semibold text-sm text-gray-700 pb-1 block">Confirm Password</label>
                            <input type="password" name="confirmPassword" className="px-3 py-2 mt-1 mb-5 text-sm  input input-bordered input-secondary w-full max-w-xs" placeholder="Confirm Password" required />

                            <label className="font-semibold text-sm text-gray-700 pb-1 block">Photo URL</label>
                            <input type="url" name="photoUrl" className="px-3 py-2 mt-1 mb-5 text-sm  input input-bordered input-secondary w-full max-w-xs" placeholder="Photo URL" required />

                            <button type="submit" className="transition duration-200 bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 focus:shadow-lg text-white font-bold py-2 px-4 rounded-lg w-full">
                                SIGN UP
                            </button>
                        </form>
                        <p className='text-center p-4'>Already Have an Account ? <Link className='text-orange-600 font-bold ' to='/login'>LOG IN</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;