import { useEffect, useState } from "react";

import ToyTable from "./ToyTable";


const Alltoy = () =>
{

    const [toys, setToys] = useState([]);


    useEffect(() =>
    {
        fetch("https://wonder-server.vercel.app/toyAll")
            .then((res) => res.json())
            .then((data) =>
            {
                setToys(data);
             
            });
    }, []);

    return (
        <div className="overflow-x-auto w-full p-5">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>

                        <th>Seller Name</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>View Details button</th>
                    </tr>
                </thead>
                <tbody>
                {toys.map((toy) => (
              <ToyTable

                key={toy._id}
                toy={toy}
                toys={toys}
                setToys={setToys}
              ></ToyTable>
            ))}
                </tbody>


            </table>
        </div>
    );
};

export default Alltoy;