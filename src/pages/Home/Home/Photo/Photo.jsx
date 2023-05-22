import img6 from '../../../../assets/images/banner/6.jpg';
import img7 from '../../../../assets/images/banner/7.jpg';
import img8 from '../../../../assets/images/banner/8.jpg';
import img9 from '../../../../assets/images/banner/9.jpg';
import img10 from '../../../../assets/images/banner/10.jpg';
import img11 from '../../../../assets/images/banner/11.jpg';


const Photo = () => {
    return (
        <div className="mt-8 p-2 ">

      <div className="text-center  mb-3">
        <h3 className="text-3xl text-blue-600 font-bold">  Animal toys Features</h3>
    
         </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
  <div className="relative overflow-hidden group">
    <img src={img6} className="w-full h-60 object-cover transition duration-500 transform group-hover:scale-110"/>
    <div className="absolute inset-0 bg-black opacity-50 transition duration-500 group-hover:opacity-0"></div>
    <div className="absolute inset-0 flex items-center justify-center transition duration-500 group-hover:opacity-100">
      
    </div>
  </div>
  <div className="relative overflow-hidden group">
    <img src={img7}  className="w-full h-60 object-cover transition duration-500 transform group-hover:scale-110"/>
    <div className="absolute inset-0 bg-black opacity-50 transition duration-500 group-hover:opacity-0"></div>
    <div className="absolute inset-0 flex items-center justify-center transition duration-500 group-hover:opacity-100">
      
    </div>
  </div>
  <div className="relative overflow-hidden group">
    <img src={img8}  className="w-full h-60 object-cover transition duration-500 transform group-hover:scale-110"/>
    <div className="absolute inset-0 bg-black opacity-50 transition duration-500 group-hover:opacity-0"></div>
    <div className="absolute inset-0 flex items-center justify-center transition duration-500 group-hover:opacity-100">
     
    </div>
  </div>
  <div className="relative overflow-hidden group">
    <img src={img9}  className="w-full h-60 object-cover transition duration-500 transform group-hover:scale-110"/>
    <div className="absolute inset-0 bg-black opacity-50 transition duration-500 group-hover:opacity-0"></div>
    <div className="absolute inset-0 flex items-center justify-center transition duration-500 group-hover:opacity-100">
 
    </div>
  </div>
  <div className="relative overflow-hidden group">
    <img src={img10} className="w-full h-60 object-cover transition duration-500 transform group-hover:scale-110"/>
    <div className="absolute inset-0 bg-black opacity-50 transition duration-500 group-hover:opacity-0"></div>
    <div className="absolute inset-0 flex items-center justify-center transition duration-500 group-hover:opacity-100">
  
    </div>
  </div>
  <div className="relative overflow-hidden group">
    <img src={img11}  className="w-full h-60 object-cover transition duration-500 transform group-hover:scale-110"/>
    <div className="absolute inset-0 bg-black opacity-50 transition duration-500 group-hover:opacity-0"></div>
    <div className="absolute inset-0 flex items-center justify-center transition duration-500 group-hover:opacity-100">
      
    </div>
  </div>
</div>


      
      </div>
    );
};

export default Photo;