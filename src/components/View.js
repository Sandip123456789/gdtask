import React from 'react'
import {useHistory} from 'react-router-dom'

const View = () => {

    const history = useHistory();

    return (
        <div className="view">
            <div className="material">
                <h1>Materials:</h1>
                <button className="button1" onClick={() => history.push({
                    material:'Leather'
                })}>Leather</button>

                <button className="button1" onClick={() => history.push({
                    material:'Suede'
                })}>Suede</button>
                <button className="button1" onClick={() => history.push({
                    material:'Denim'
                })}>Denim</button>
            </div>
            <div className="size">
                <h1 className="space">Size:</h1>
                <button className="button2" onClick={() => history.push({
                    size:'S'
                })}>S</button>
                <button className="button2" onClick={() => history.push({
                    size:'M'
                })}>M</button>
                <button className="button2" onClick={() => history.push({
                    size:'L'
                })}>L</button>
                <button className="button2" onClick={() => history.push({
                    size:'XL'
                })}>XL</button>
            </div>
            <div className="color">
                <h1 className="space1">Colors:</h1>
                <p onClick={() => history.push({
                    color:'Red'
                })}>Red</p>
                <p onClick={() => history.push({
                    color:'White'
                })}>White</p>
                <p onClick={() => history.push({
                    color:'Black'
                })}>Black</p>
                <p onClick={() => history.push({
                    color:'Brown'
                })}>Brown</p>
            </div>
            

        </div>
    )
}

export default View
