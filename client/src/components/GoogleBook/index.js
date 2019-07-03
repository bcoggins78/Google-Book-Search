import React from "react";
// import "./style.css"

function GoogleBook(props) {
    return (
        <div className="row">

            <div className="card-group">


                <div className="card col-2">
                    <a href={props.link} target="_blank"><img className="card-image" src={props.thumbnail} alt={props.title} /></a>
                        
                        
                    
                </div>
                <div className="card col-10">
                    <div className="card-body">
                        <h4 className="card-title">{props.title}</h4>
                        <p className="card-text">{props.description}</p>
                    </div>
                    <div className="card-footer">
                        Author: {props.authors}
                    </div>
                    <div>
                    <button type="button" className="btn btn-primary">Save</button>
                    </div>
                </div>
                


            </div>
        </div>
    );
}

export default GoogleBook;