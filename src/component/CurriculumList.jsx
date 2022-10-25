import React from 'react';

const CurriculumList = ({curriculum}) => {
    const {id, tittle, description, img ,profile, price , rating} = curriculum
    return (
<div className="card card-compact bg-base-100 shadow-xl">
<figure><img src={img} alt={tittle} /></figure>
<div className="card-body">
<h2 className="card-title">{tittle}</h2>
<p>{price}</p>
          <p>{rating}</p>
  <div className="card-actions justify-end">
    <button className="btn btn-primary">Buy Now</button>
  </div>
</div>
</div>
    );
};

export default CurriculumList;