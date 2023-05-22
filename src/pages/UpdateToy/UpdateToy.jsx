import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateToy = () =>{

    const toy = useLoaderData();
   
 
      const { _id, price, quantity, description } = toy;
    //   const pageTitle = "My Toys - update";
    
      const handleEventUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = parseInt(form.price.value);
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updateObj = { price, quantity, description };
        console.log(updateObj);
    
        fetch(`https://wonder-server.vercel.app/toys/${_id}`,{
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateObj),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("updated Event", data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "Toy Update successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          });
      };




    return (
        <div className="p-10 xs:p-0 mx-auto md:w-full mt-4 md:max-w-md">
            <h1 className="font-bold text-center text-3xl mb-5 text-white">ADD A TOY</h1>
            <div className="bg-gray-100 shadow w-full rounded-lg divide-y divide-gray-300">
                <form onSubmit={handleEventUpdate} className="px-5 py-7" action="#" method="POST">

                    <label className="font-semibold text-sm text-gray-700 pb-1 block">Price</label>
                    <input type="name" name="price" defaultValue={price} className="px-3 py-2 mt-1 mb-5 text-sm  input input-bordered input-secondary w-full max-w-xs" placeholder="price" required />


                    <label className="font-semibold text-sm text-gray-700 pb-1 block">Available Quantity</label>
                    <input type="name" name="quantity" defaultValue={quantity} className="px-3 py-2 mt-1 mb-5 text-sm  input input-bordered input-secondary w-full max-w-xs" placeholder="quantity" required />




                    <label className="font-semibold text-sm text-gray-700 pb-1 block">Details Description</label>
                    <input type="name" name="description" defaultValue={description} className="px-3 py-2 mt-1 mb-5 text-sm  input input-bordered input-secondary w-full max-w-xs" placeholder="description" required />





                    <button type="submit" className="transition duration-200 bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 focus:shadow-lg text-white font-bold py-2 px-4 rounded-lg w-full">
                        ADD A TOY
                    </button>
                </form>

            </div>
        </div>
    );
};

export default UpdateToy;