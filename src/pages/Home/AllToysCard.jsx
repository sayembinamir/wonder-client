import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AllToysCard = ({allToys}) => {


  const {rating,picture,price,name}=allToys;

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation only once
      easing: 'ease-in-out', // Easing function
    });
  }, []);


    
  
    return (
        <div data-aos="zoom-in-up" className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={picture} alt="Shoes" className="rounded-xl w-full h-36" />
  </figure>
  <div className="card-body items-center ">
    <h2 className="card-title">{rating}</h2>
    <p className="text-xl text-orange-500">Price:${price}</p>
    <p className="text-xl text-orange-500">{name}</p>

    {console.log(allToys)}
  </div>
</div>


    );
};

export default AllToysCard;
