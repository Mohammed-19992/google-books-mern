import React from 'react'
import "./style.css";

export function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    )
}

export function Submit(props) {
    return (
        <button {...props} className="btn Submit" style={{backgroundColor: "white", color: "dark", marginBottom: "10px"}}>Search</button>
    )
}
