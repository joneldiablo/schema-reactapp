import React from "react";
import ReactDom from "react-dom";
import jexcel from "jexcel";
import eventEmitter from "../event-emitter";
import Icons from "../icons";

export default class TableJexcel extends React.Component {

  static defaultProps = {
    url: '',
    nestedHeaders: null,
    columns: null
  }

  constructor(props) {
    super(props);
    this.tableRef = new React.createRef();
    let { pathname } = props.location;
    this.instance = pathname + this.constructor.name;
  }

  addRow = () => {
    this.jexcel.insertRow();
  }

  updateTable = (tableInstance, cell, col, row, val, id) => {
    if (col === 0) {
      let buttons = this.editRow(this.jexcel.getRowData(row));
      cell.appendChild(buttons);
    }
    if (col === 2) {
      if (!val) return;
      let img = (`<img src=${val} style="height: 40px; width: 100%; object-fit: cover" />`);
      cell.innerHTML = img;
    }
  }

  onResize = ({ width, height }) => {
    if (!this.table) return;
    let [j] = this.table.getElementsByClassName('jexcel_content');
    if (!j) return;
    j.style.width = width + 'px';
    //j.style.maxHeight = height + 'px';
  }

  nav = (e) => {
    e.preventDefault();
    let a = e.target;
    if (e.target.tagName != 'a') a = e.target.closest('a');
    this.props.history.push('/catalogo/' + a.dataset.id);
  }

  loadTable() {
    let w = this.table.offsetWidth - 2;
    let opts = {
      url: this.props.url,
      nestedHeaders: this.props.nestedHeaders,
      columns: this.props.columns,
      freezeColumns: 2,
      tableOverflow: true,
      updateTable: this.updateTable,
      tableWidth: w + 'px',
      lazyLoading: true
    };
    this.jexcel = jexcel(this.table, opts);
  }

  componentDidMount() {
    this.table = this.tableRef.current;
    this.loadTable();
    eventEmitter.subscribe('resize', this.onResize, this.instance);
  }

  componentWillUnmount() {
    eventEmitter.unsubscribe('resize', this.instance);
  }

  editRow(row) {
    let p = document.createElement('div');
    ReactDom.render(<div className="my-2">
      <a href="#" data-id={row[0]} onClick={this.nav} className="link-info">
        <Icons icon="eye" className="mr-2" />
      </a>
      <a href="#" data-id={row[0]} onClick={this.nav}>
        <Icons icon="pencil-square-o" className="mr-2" />
      </a>
      <a href="#" data-id={row[0]} onClick={this.nav} className="link-danger">
        <Icons icon="trash" />
      </a>
    </div>, p);
    return p;
  }

  render() {
    return (
      <div>
        <div ref={this.tableRef}></div>
        <br /><br />
        <input type='button' value='Add new row' onClick={() => this.addRow()}></input>
      </div>
    );
  }
}
