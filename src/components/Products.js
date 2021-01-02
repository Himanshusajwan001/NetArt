import React from 'react'
import photo3 from '../Images/3.png';
import './Products.css'
function Products() {
    return (
        <>
            <div className="product__container">
                <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
                <figure>
                    <img src={photo3} id = "photo3" alt="products"></img>
                    <figcaption> Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</figcaption>
                </figure>
                <hr class="solid"></hr>
                <div id="segments">
                    <h5>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h5>
                    <p>CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS | PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE |</p>
                    <p>PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL</p>
                </div>
            </div>
        </>
    )
}

export default Products
