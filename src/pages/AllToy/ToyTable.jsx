import { Link } from 'react-router-dom';

const ToyTable = ({ toy }) => {
  const { _id, sellerName, toyName, subCategory, price, quantity } = toy;

  return (
    <tr>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/toy/${_id}`}>
          <button className="px-3 py-2 text-blue-600 hover:text-yellow-700 border-blue-600 border rounded-lg">
            View Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default ToyTable;