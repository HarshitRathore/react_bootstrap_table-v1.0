import React, { Component } from 'react';
import logo from './logo.svg';
import TableRows from './TableRows.js';
import './CompleteTable.css';

class CompleteTable extends React.Component {
    render() {
        const table1data = {
          data : 
          [
            {
              "serial_no" : "1001",
              "reference_no" : "22009",
              "created_time" : "13:05 27/11/2018",
              "updated_time" : "19:12 27/11/2018",
              "subject" : "This is a long paragraph.",
              "source" : "Incident Editor",
            },
            {
              "serial_no" : "1002",
              "reference_no" : "22009",
              "created_time" : "13:05 27/11/2018",
              "updated_time" : "19:12 27/11/2018",
              "subject" : "This is a long paragraph.",
              "source" : "Incident Editor",
            },
            {
              "serial_no" : "1003",
              "reference_no" : "22009",
              "created_time" : "13:05 27/11/2018",
              "updated_time" : "19:12 27/11/2018",
              "subject" : "This is a long paragraph.",
              "source" : "Incident Editor",
            },
          ]
        };
        const table2data = {
          data : 
          [
            {
              "serial_no" : "1001",
              "reference_no" : "22009",
              "created_time" : "13:05 27/11/2018",
              "updated_time" : "19:12 27/11/2018",
              "subject" : "This is a long paragraph.",
              "source" : "Incident Editor",
            },
            {
              "serial_no" : "1002",
              "reference_no" : "22009",
              "created_time" : "13:05 27/11/2018",
              "updated_time" : "19:12 27/11/2018",
              "subject" : "This is a long paragraph.",
              "source" : "Incident Editor",
            },
            {
              "serial_no" : "1003",
              "reference_no" : "22009",
              "created_time" : "13:05 27/11/2018",
              "updated_time" : "19:12 27/11/2018",
              "subject" : "This is a long paragraph.",
              "source" : "Incident Editor",
            },
            {
              "serial_no" : "1004",
              "reference_no" : "22009",
              "created_time" : "13:05 27/11/2018",
              "updated_time" : "19:12 27/11/2018",
              "subject" : "This is a long paragraph.",
              "source" : "Incident Editor",
            },
          ]
        };
        return(
            <div className="table-responsive-sm mt-2 mb-2">
                <table className="table">
                  <thead>
                    <tr>
                      <td scope="col">Serial No.</td>
                      <td scope="col">Reference No.</td>
                      <td scope="col">Created Time</td>
                      <td scope="col">Updated Time</td>
                      <td scope="col">Subject</td>
                      <td scope="col">Source</td>
                    </tr>
                  </thead>
                  <thead>
                    <td colspan="6">
                        <div className="collapsible-divider col-sm-12">
                            <button type="button" class="btn btn-outline-light btn-sm">
                                <i class="fa fa-caret-down" aria-hidden="true"></i> Date: Today
                            </button>                    
                          </div>
                    </td>
                  </thead>                  
                  <tbody>
                    {table1data.data.map((person, i) => <TableRows key = {i} data = {person} />)}
                  </tbody>
                  <thead>
                    <td colspan="6">
                        <div className="collapsible-divider col-sm-12">
                            <button type="button" class="btn btn-outline-light btn-sm">
                                <i class="fa fa-caret-down" aria-hidden="true"></i> Date: Yesterday
                            </button>                    
                          </div>
                    </td>
                  </thead>                  
                  <tbody>
                    {table2data.data.map((person, i) => <TableRows key = {i} data = {person} />)}
                  </tbody>
                </table>
            </div>
        );
    }
}

export default CompleteTable;
