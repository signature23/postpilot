import React, { useEffect, useState } from "react";

const ApiHome = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {

            

            try {
                const res = await fetch(
                    "https://api.pewds.vercel.app/prothomalo/collection/politics?start_from=0&per_page=15"
                );
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const result = await res.json();
                console.log("Data:", result);

                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (error) return <p>Error: {error}</p>;
    if (loading) return <p>Loading...</p>;

    
    return (
        <div>
            <h1>Test Object Data</h1>
            {data&&
            <ul>
                <li>{data.name}</li>
            </ul>
           
            }

          
            
        </div>

    );
};

export default ApiHome;
