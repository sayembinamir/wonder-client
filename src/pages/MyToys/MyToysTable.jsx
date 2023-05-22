
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToysTable = ({ myToy, myToys, setMyToys }) => {
  const {
    _id,
    photo,
    sellerName,
    sellerEmail,
    toyName,
    subCategory,
    price,
    rating,
    quantity,
    description,
  } = myToy;

  const handleEventDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://wonder-server.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        const remaining = myToys.filter((t) => t._id !== id);
        setMyToys(remaining);
      }
    });
  };

  return (
    <tr>
      <td>
        <img src={photo} alt="" />
      </td>
      <td>{toyName}</td>
      <td>{sellerName}</td>
      <td>{sellerEmail}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{rating}</td>
      <td>{quantity}</td>
      <td title={description}>
        {description.length > 20 ? description.slice(0, 20) : description}...
      </td>
      <td>
        <Link to={`/updatetoy/${_id}`}>
          <button className="px-3 py-2 text-lg text-yellow-600 bg-gray-300 rounded-sm hover:text-yellow-700">
            <FaPencilAlt></FaPencilAlt>
          </button>
        </Link>
        <button
          onClick={() => handleEventDelete(_id)}
          className="px-3 py-2 ml-2 text-lg text-yellow-600 bg-gray-300 rounded-sm hover:text-yellow-700"
        >
          <FaTrashAlt></FaTrashAlt>
        </button>
      </td>
    </tr>
  );
};
export default MyToysTable;