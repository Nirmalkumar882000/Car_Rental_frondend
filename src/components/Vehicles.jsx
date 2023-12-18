import React, { useState } from 'react'
import jaguar from "../images/jaguar.png";
import masserti from "../images/masserati.png";
import aston from "../images/aston.png";
import bugatti from "../images/bugati.png"
import ferrari from "../images/ferrari.png"
import lamborgini from "../images/lamborgini.png"
import mclaren from "../images/mclaren.png";
import rollsroyce from "../images/rollsroyce.png"
import "../styles/CarChoose.css"

function Vehicles() {
    const [name,setName]=useState({
        model:"Lamborgini",
        mark:"Aventador",
        year:2021,
        engine:"6.5",
        power:"740km",
        max:"350km/h",
        gear:"Auto",
        img:lamborgini,
        price:2000,
    })

    const handleClick =(a,b,c,d,e,f,g,h,i)=>{
        setName({
            model:a,
            mark:b,
            year:c,
            engine:d,
            power:e,
            max:f,
            gear:g,
            img:h,
            price:i
        })
    }



  return (
    <div className='car-choose'>
        <div className='title'>
            <h2>Our Rental Fleet</h2>
            <span>
                Choose from a varirty of oue exclusive vehicles to rent for your next trip
            </span>
        </div>
        <div className='car-selector'>
            <ul>
                <li
                onClick={()=>handleClick(
                    "Jaguar",
                    "f_TYRE R",
                     2022,
                    "5.0 V8",
                    "575 KM",
                    "300km/h",
                    "Auto",
                    jaguar,
                    1200
                )} 
                >
                    Jaguar F-TYPR R
                </li>

                <li onClick={()=>handleClick(
                     " Maserati ",
                     "GranTurismo",
                      2022,
                     "5.2 V8",
                     "610 KM",
                     "300km/h",
                     "Auto",
                     masserti,
                     800
                    
                )}>
                Maserati GranTurismo
                </li>

                <li
               onClick={() =>
                handleClick(
                  "Aston Martin",
                  "DB11",
                  2022,
                  "5.2",
                  "608 KM",
                  "322km/h",
                  "Auto",
                  aston,
                  900
                )
              }
                >
                Aston Martin DB11
                </li>

                <li
                 onClick={() =>
                    handleClick(
                      "Bugatti",
                      "Veyron",
                      2021,
                      "8.0 V8",
                      "1500 KM",
                      "420km/h",
                      "Auto",
                      bugatti,
                      10000
                    )
                  }

                >
                Bugatti Veyron
                </li>

                <li
                onClick={() =>
                    handleClick(
                      "Ferrari",
                      "Portofino",
                      2022,
                      "3.9",
                      "600 KM",
                      "320km/h",
                      "Auto",
                      ferrari,
                      1200
                    )
                  } 
                
                >
                Ferrari Portofino  
                </li>

                <li
                onClick={() =>
                    handleClick(
                      "Lamborgini",
                      "Aventador",
                      2021,
                      "6.5",
                      "740 KM",
                      "350km/h",
                      "Auto",
                      lamborgini,
                      2000
                    )
                  }

                >
                Lamborgini Aventador 
                </li>

                <li
                 onClick={() =>
                    handleClick(
                      "McLaren",
                      "P1",
                      2022,
                      "3.8",
                      "1000 KM",
                      "370km/h",
                      "Auto",
                      mclaren,
                      12000
                    )
                  }
                >
                McLaren P1 
                </li>

                <li 
                 onClick={() =>
                    handleClick(
                      "Rolls Royce",
                      "Phantom",
                      2019,
                      "6.0 V12",
                      "571 KM",
                      "300km/h",
                      "Auto",
                      rollsroyce,
                      1100
                    )
                  }
                >
                Rolls Royce Phantom  
                </li>

                </ul>

            <img src={name.img}  alt='car image'/>
            <table>
                <tr>
                    <td colSpan={2}>Rental Price from {name.price}$ /per day</td>
                </tr>
                <tr>
                    <td>Model</td>
                    <td>{name.model}</td>
                </tr>
                <tr>
                    <td>Mark</td>
                    <td>{name.mark}</td>
                </tr>
                <tr>
                    <td>Year</td>
                    <td>{name.year}</td>
                </tr>
                <tr>
                    <td>Engine</td>
                    <td>{name.engine}</td>
                </tr>
                <tr>
                    <td>Power</td>
                    <td>{name.power}</td>
                </tr>
                <tr>
                    <td>Max Speed</td>
                    <td>{name.max}</td>
                </tr>
                <tr>
                    <td>Gear</td>
                    <td>{name.gear}</td>
                </tr>

            </table>

        </div>

    </div>
  )
}

export default Vehicles
