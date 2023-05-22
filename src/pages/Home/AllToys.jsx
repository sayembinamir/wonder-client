import { useEffect, useState } from "react";
import AllToysCard from "./AllToysCard";


const AllToys = () =>
{

    const [toyAll, setAllToys] = useState([]);

    useEffect(() =>
    {
        fetch('AllToys.json')
            .then(res => res.json())
            .then(data =>
            {
                setAllToys(data)
                console.log(data)
            }
            );


    }, [])
    return (
        <div className="mt-8">
            <div className="text-center">
                <h3 className="text-3xl text-orange-600 font-bold"> All Animals Toys</h3>
                <h2 className="font-bold">Toys Description</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                   toyAll.map(allToys =>
                    {
                         console.log(AllToys)
                        return <AllToysCard

                            key={allToys._id}
                            allToys={allToys}
                        ></AllToysCard>

                    }
                    )
                }

            </div>
        </div>

    );
};

export default AllToys;