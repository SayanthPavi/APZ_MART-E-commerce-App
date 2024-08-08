
import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/Assets';
import '../../Styles/HeroSectionMain.css'



const HeroSectionMain = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      const getProducts = async () => {
    
        let url = "https://fakestoreapi.com/products/category/jewelery";
        const response = await fetch(url);
        const data = await response.json();

       
        setData(data);  
  
        console.log("datais ",data);
        
      };
      getProducts();
    }, []);
  
  return (
   <>
     
    <div className="row position-absolute top-50 m-2 HeroSectionMain-container" >
        {data.map((p) =>
    <div className="col-12 col-md-4 col-lg-3  mx-sm-auto " >
      <div className="bg-white HeroSectionMain-box ">
      <h5 className="ps-4 pt-3 pb-2"> Up to 65% off | Fashion Jewellery</h5>
      <div className="d-flex text-center justify-content-between  product-box  ">
       <div className='product-box-img me-3' >
       <img src={p.image} width={90} height={80}  alt="img" />
       <p className="product-font-size ">
       {p.title.substring(0, 20)} more..
        </p>
       </div>
        <div className='product-box-img '>
        <img src={p.image}  width={90} height={80}  alt="img" />
        <p className="product-font-size ">{p.title.substring(0, 20)} more..</p>
        </div>
      </div>

      <div className="d-flex text-center  mt-3 product-box   ">
       <div className='product-box-img me-3'>
       <img src={p.image}  width={90} height={80}  alt="img" />
       <p className="product-font-size">{p.title.substring(0, 20)} more..</p>
       </div>
        <div className='product-box-img '>
        <img src={p.image}  width={90} height={80}  alt="img" />
        <p className="product-font-size ">{p.title.substring(0, 20)} more..</p>
        </div>
      </div>
      </div>

    </div>
    )}
     
    </div>


   </>
    

    
    
  )
}

export default HeroSectionMain;