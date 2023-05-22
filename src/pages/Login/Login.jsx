import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import logo2 from '../../assets/images/login/login.jpg';
import { AuthContext } from '../../providers/AuthProviders';
import { useContext } from 'react';

const Login = () =>{
    const { googleSignIn, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

   
const handleGoogleSignIn = () => {

    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
   
    const from =location?.state?.from?.pathname || "/";
    
  
 
    const handleLogin = event =>
    {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
        signIn(email,password)
        .then(result =>{
            const user =result.user;
            console.log(user);
            navigate(from,{replace : true})
      

        })
        .catch(error =>console.log(error));

    }
    return (
        <div className='flex'>
            <div className='text-center lg:text-left w-1/2 '>
                <img className='w-full h-full' src={logo2} alt="" />
            </div>
            <div className="min-h-screen bg-gray-800 flex flex-col justify-center sm:py-12 w-1/2">
                <div className="p-10 xs:p-0 mx-auto md:w-full mt-4 md:max-w-md">
                    <h1 className="font-bold text-center text-3xl mb-5 text-white">Login</h1>
                    <div className="bg-gray-100 shadow w-full rounded-lg divide-y divide-gray-300">
                        <form onSubmit={handleLogin} className="px-5 py-7" action="#" method="POST">
                            <label className="font-semibold text-sm text-gray-700 pb-1 block">Email</label>
                            <input type="email" name="email" className=" px-3 py-2 mt-1 mb-5 text-sm  input input-bordered input-secondary w-full max-w-xs " placeholder="Email" required />

                        


                            <label className="font-semibold text-sm text-gray-700 pb-1 block">Password</label>
                            <input type="password" name="password" className=" px-3 py-2 mt-1 mb-5 text-sm  input input-bordered input-secondary w-full max-w-xs" placeholder="Password" required />

                          



                            <button type="submit" className="transition duration-200 bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 focus:shadow-lg text-white font-bold py-2 px-4 rounded-lg w-full">
                                LOGIN
                            </button>
                        </form>
                        <p className='text-center p-4'>New to Wonder World Toy <Link className='text-orange-600 font-bold' to='/signup'>Sign up</Link></p>
                       <div className='text-center'>
                        <button onClick={handleGoogleSignIn} className=' p-3 py-2 rounded-xl text-green-600 border-2 w-40 mb-4 mt-4'
                       >
                            Google Sign In
                        </button>
                       </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Login;