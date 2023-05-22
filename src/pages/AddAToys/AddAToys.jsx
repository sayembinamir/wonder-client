import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";


const AddAToys = () =>{
    const {user} = useContext(AuthContext);


    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = parseInt(form.price.value);
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const addObj = {
          photo,
          toyName,
          sellerName,
          sellerEmail,
          subCategory,
          price,
          rating,
          quantity,
          description,
        };
        console.log(addObj);

        

fetch("https://wonder-server.vercel.app/animals", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy Added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

    return (
       
                <div className="p-10 xs:p-0 mx-auto md:w-full mt-4 md:max-w-md">
                    <h1 className="font-bold text-center text-3xl mb-5 text-white">ADD A TOY</h1>
                    <div className="bg-gray-100 shadow w-full rounded-lg divide-y divide-gray-300">
                        <form  onSubmit={handleAddToy} className="px-5 py-7" action="#" method="POST">

                            <label className="font-semibold text-sm text-gray-700 pb-1 block">Photo URL</label>
                            <input type="url" name="photo" className="px-3 py-2 mt-1 mb-5 text-sm  input input-bordered input-secondary w-full max-w-xs" placeholder="Photo URL" required />


                            <label className="font-semibold text-sm text-gray-700 pb-1 block"> TOY Name</label>
                            <input type="name" name="toyName" className="px-3 py-2 mt-1 mb-5 text-sm  input input-bordered input-secondary w-full max-w-xs" placeholder="ToyName" required />

                            <label className="font-semibold text-sm text-gray-700 pb-1 block">SELLER Name</label>
                            <input type="name" name="sellerName" 
                            defaultValue={user?.displayName}
                            className="px-3 py-2 mt-1 mb-5 text-sm  input input-bordered input-secondary w-full max-w-xs" placeholder="SellerName" required />



                            <label className="font-semibold text-sm text-gray-700 pb-1 block">SELLER Email</label>
                            <input type="email" name="sellerEmail" 
                            defaultValue={user?.email}
                            className="px-3 py-2 mt-1 mb-5 text-sm  input input-bordered input-secondary w-full max-w-xs" placeholder="SellerEmail" required />

                            <div className="flex flex-col">
                                <label htmlFor="subCategory">SubCategory</label>
                                <select
                                    className="py-3 border-2 rounded-lg"
                                    name="subCategory"
                                    id=""
                                >
                                    <option value="Lion">Lion  </option>
                                    <option value="Elephant">Elephant</option>
                                    <option value="Kangaroo">Kangaroo</option>
                                </select>
                            </div>



                            <label className="font-semibold text-sm text-gray-700 pb-1 block">Price</label>
                            <input type="name" name="price" className="px-3 py-2 mt-1 mb-5 text-sm  input input-bordered input-secondary w-full max-w-xs" placeholder="price" required />

                            <label className="font-semibold text-sm text-gray-700 pb-1 block">Rating</label>
                            <input type="name" name="rating" className="px-3 py-2 mt-1 mb-5 text-sm  input input-bordered input-secondary w-full max-w-xs" placeholder="rating" required />

                            <label className="font-semibold text-sm text-gray-700 pb-1 block">Available Quantity</label>
                            <input type="name" name="quantity" className="px-3 py-2 mt-1 mb-5 text-sm  input input-bordered input-secondary w-full max-w-xs" placeholder="quantity" required />




                            <label className="font-semibold text-sm text-gray-700 pb-1 block">Details Description</label>
                            <input type="name" name="description" className="px-3 py-2 mt-1 mb-5 text-sm  input input-bordered input-secondary w-full max-w-xs" placeholder="description" required />

                



                            <button type="submit" className="transition duration-200 bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 focus:shadow-lg text-white font-bold py-2 px-4 rounded-lg w-full">
                               ADD A TOY
                            </button>
                        </form>
                     
                    </div>
                </div>
        //     </div>
        // </div>
    );
};

export default AddAToys;