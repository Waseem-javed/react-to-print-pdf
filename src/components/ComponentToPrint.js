import React from 'react';

import {DUMMY_DATA} from './data';

//this component is used for reacttoprint library
class ComponentToPrint extends React.PureComponent {
 

  render() {
    return (
      <table
        className="table table-sm table-responsive text-justify table-striped table-bordered"
        styles={{ border: "1px solid black" }}>
        <thead className="border border-bottom border-success">
          <th>Strategy</th>
          <th>Image</th>
          <th>Category</th>
          <th>Description</th>
          <th>Effectiveness</th>
          <th>Mitigate Code Execution</th>
          <th>Mitigate Network Propogation</th>
          <th>Mitigate Data Exfiltration</th>
        </thead>
        <tbody>
          {DUMMY_DATA.map((data) => (
            <tr key={data.id}>
              <td>{data.strategy}</td>
              <td>
                <img src={data.imageUrl} className="img-thumbnail" alt="no-img" />
              </td>
              <td>{data.Category}</td>
              <td>{data.Description}</td>
              <td>{data.Effectiveness}</td>
              <td>
                {" "}
                <div className="badge badge-pill bg-success text-white ">
                  {data.MCE}
                </div>
              </td>
              <td>
                {" "}
                <div className="badge badge-pill bg-danger text-white ">
                  {data.MNP}
                </div>
              </td>
              <td>
                {" "}
                <div className="badge badge-pill bg-success text-white ">
                  {data.MDE}
                </div>
              </td>
              {/* <td className="page-break"></td> */}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <th>Strategy</th>
          <th>Image</th>
          <th>Category</th>
          <th>Description</th>
          <th>Effectiveness</th>
          <th>Mitigate Cide Execution</th>
          <th>Mitigate Network Propogation</th>
          <th>Mitigate Data Exfiltration</th>
        </tfoot>
      </table>
    );
  }
}

export default ComponentToPrint;