
import { Link } from 'react-router-dom';
import notFound from '../../assets/images/not-found/notfound.jpg';

const NotFoundPage = () =>
{
    return (
        <div className='my-container mt-10 text-center mb-5'>
            <img className='mb-3 w-1/2 h-1/2 mx-auto ' src={notFound} alt="" />
            <label className="swap text-6xl">

                <div className="toast ">
                    <div className="alert alert-info">
                        <div>
                            <Link className='  p-1 rounded-md' to='/'>  <button className="btn btn-sm m-5">PLEASE GO BACK</button></Link>
                        </div>
                    </div>
                </div>


            </label>

        </div>
    );
};

export default NotFoundPage;