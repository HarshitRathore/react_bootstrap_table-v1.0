import React, { Component } from 'react';
import logo from './logo.svg';
import './TopBar.css';

class TopBar extends React.Component {
    render() {
        return(
            <div id="top_bar" className="row mb-2 mt-2">
                <div className="align-self-left col-sm-6">
                  <button type="button" className="btn btn-light">Open Incidents</button>
                  <button type="button" className="btn btn-light">Closed Incidents</button>
                </div>
                <div className="input-group sm-3 col-sm-6">
                  <input type="text" className="form-control form-rounded" placeholder="Search Incident box" aria-label="Search" aria-describedby="basic-addon2"/>
                </div>
            </div>
        );
    }
}

export default TopBar;
