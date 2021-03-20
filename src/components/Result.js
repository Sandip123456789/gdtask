import React, { useState,useEffect } from 'react'
import {useLocation} from 'react-router-dom'

const Result = () => {
    const location = useLocation();
   
    const material = location.material;
    const size = location.size;
    const color = location.color;

    // useEffect(() => {
    //     setText(location.material)
    //     setText1(location.size)

    // })
    // console.log(name);
    return (
        <div>
            <div className="result">
                <h1 className="space2">SKU:</h1>
                <p>{material?material:'Leather'}</p>
                <p><b>-</b></p>
                <p>{size?size:'S'}</p>
                <p><b>-</b></p>
                <p>{color?color:'Red'}</p>
            </div>
        </div>
    )
}

export default Result
