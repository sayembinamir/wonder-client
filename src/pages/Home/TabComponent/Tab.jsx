const Tab = ({ category, activeTab, setActiveTab }) => {
    const handleClick = () => {
      setActiveTab(category);
    };
  
    return (
      <button onClick={handleClick} className={activeTab === category ? 'active px-3 py-2 bg-blue-400 rounded-xl' : 'px-3 py-2 border-2'}>
        {category}
      </button>
    );
  };
  
  export default Tab;