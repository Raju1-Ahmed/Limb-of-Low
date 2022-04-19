import React from 'react';
import { useNavigate } from 'react-router-dom';

const Lowyer = ({lowyer}) => {
    const { id,name, img, description} = lowyer;
    const navigate = useNavigate()
    const navigateServiceDetails= id =>{
        navigate(`/consultation/${id}`)
    }
    return (
        <div className=' g-5 d-flex  col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description.substr(0, 90)}</p>
                    <button className='bg-primary' onClick={()=> navigateServiceDetails(id)}>FreeConsultation</button>
                </div>
            </div>
        </div>
    );
};

export default Lowyer;