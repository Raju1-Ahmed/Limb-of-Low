import React, { useEffect, useState } from 'react';
import Lowyer from '../Lowyer/Lowyer';

const Lowyers = () => {
    const [lowyers, setLowyers] = useState([]);

    useEffect(() => {
        fetch('loyersData.json')
            .then(res => res.json())
            .then(data => setLowyers(data));
    }, [])

    return (

        <div id="loeyers" className='container'>
            <h2 className='text-primary text-center mt-5'>Our Case</h2>
            <div className="row">
                {
                    lowyers.map(lowyer => <Lowyer
                        key={lowyer.id}
                        lowyer={lowyer}
                    />)
                }
            </div>
        </div>
    );
};

export default Lowyers;