import { useLoaderData } from "react-router-dom";


const Details = () => {
  const  detailsData = useLoaderData();

    return (
        <div>
        {console.log(detailsData)}
        </div>
    );
};

export default Details;