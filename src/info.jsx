import React from "react";
import { randomS4 } from "./functions";

export default class Info extends React.Component {

  id = 'modal-' + randomS4();

  render() {
    let { label, id } = this.props;
    return <div className="clearfix">
      <button className="btn btn-sm btn-primary float-right" type="button" data-toggle="modal"
        data-target={'#' + this.id}>{id}: {label}</button>
      <div className="modal fade" id={this.id} >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" >{label}</h5>
              <button type="button" className="btn-close" data-dismiss="modal" ></button>
            </div>
            <div className="modal-body">
              <ul>
                {Object.keys(this.props).filter(k => k !== 'children').map((k, i) =>
                  <li key={i}>{k}:<pre>{JSON.stringify(this.props[k], null, 2)}</pre></li>
                )}
              </ul>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}