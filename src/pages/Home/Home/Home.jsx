// import { Tab } from "react-tabs";
import AllToys from "../AllToys";
import Banner from "../Banner/Banner";
import Photo from "./Photo/Photo";
import TabContent from "../TabComponent/TabContent";
import { useState } from "react";
import Tab from "../TabComponent/Tab"


const Home = () => {


    const [activeTab, setActiveTab] = useState("Lion"); 
    return (
        <div>
            <Banner></Banner>
            <AllToys></AllToys>
            <Photo></Photo>
           
{/* Shop Category Section */}
      <div className="px-4 mt-12 md:px-0">
        <h1 className="mb-8 text-2xl  font-bold text-center md:text-4xl">
          Shop By Category
        </h1>
        <div>
          <div className="flex justify-center gap-6">
            <Tab
              category="Lion"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              // defaultIndex={1}
            />
            <Tab
              category="Elephant"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            
            />
            <Tab
              category="Kangaroo"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
          <TabContent activeTab={activeTab} />
        </div>
      </div>
       
        </div>
    );
};

export default Home;