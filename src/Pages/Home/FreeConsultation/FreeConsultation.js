import React from 'react';
import { Link, useParams } from 'react-router-dom';

const FreeConsultation = () => {
    const {consultationId} = useParams();
    
    return (
        <div>
            <h2>This is consultation Area</h2>
            <h5>Service id: {consultationId}</h5>

        <div className='text-center'>
        <Link to="/consultation">
                <button className='btn btn-primary'>Premium Consultation</button>
            </Link>
        </div>

        </div>
    );
};

export default FreeConsultation;