

import React, {useEffect, useState} from "react";

const Hakeminen = () => {

const [searchQuery, setSearchQuery] = useState('');

const [data, setData] = useState([])

const [filteredData, setFilteredData] = useState([])

useEffect(() => { 

const fetchData = async () => {

try {
    const response = await fetch('solinavintage/data.js')
    const kuvaData = await response
    setData(kuvaData)

} catch (error) {
console.error('Error in fetch', error)
}

};

fetchData();
},

[]);




const handleInputChange = (event) => {

const query = event.target.value;
setSearchQuery(query)

}

const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
);

    setFilteredData(filtered);





return (
    <div>
        <label htmlFor="searchInput">Search:</label>
        <input
            type="text"
            id="searchInput"
            name="searchInput"
            value={searchQuery}
            onChange={handleInputChange}
        />

        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>
                    {item.title} - {item.category}
                </li>
            ))}
        </ul>
    </div>

);
};



export default Hakeminen;






