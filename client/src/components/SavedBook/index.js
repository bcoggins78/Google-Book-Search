import React from "react";
import "./style.css"

function SavedBook(props) {
    
    return (
        <div className="row w-100">

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <div className="card">
                            <div className="card-horizontal">
                                <div className="img-square-wrapper">
                                    <a href={props.link} target="_blank" rel="noopener noreferrer"><img className="" src={props.image} alt={props.title} title={props.title}/></a>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">{props.title}</h4>
                                    <p className="card-text">{props.description}</p>
                                </div>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Author: {props.authors ? props.authors.join(', '): 'n/a'}</small>
                                <button type="button" onClick={() => props.onSelect()} className="btn btn-danger float-right">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SavedBook;