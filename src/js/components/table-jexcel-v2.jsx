import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import jexcel from "jexcel";
import eventEmitter from "../event-emitter";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

/**
 * version de la tabla con su ruta de consulta de cada fila inmersa
 */

export default class TableJexcel extends React.Component {

  static defaultProps = {
    options: {
      url: 'https://my.api.mockaroo.com/products.json?key=30283510',
      //data: [],
      nestedHeaders: [
        [
          { title: 'Descripción del Producto o Servicio', colspan: 5 },
          { title: 'Datos de venta', colspan: 7 },
        ],
      ],
      columns: [
        {
          name: 'name',
          title: 'Nombre',
          type: 'text',
          width: 250
        },
        {
          name: 'gallery',
          title: 'Galería',
          type: 'text',
          width: 120
        },
        {
          name: 'description',
          title: 'Descripción',
          type: 'text',
          width: 400
        },
        {
          name: 'category',
          title: 'Categoría',
          type: 'text',
          width: 120
        },
        {
          name: 'tags',
          title: 'Etiquetas',
          type: 'text',
          width: 120
        },
        {
          name: 'price',
          title: 'Precio',
          type: 'numeric',
          width: 80
        },
        {
          name: 'priceSale',
          title: 'Oferta',
          type: 'numeric',
          width: 80
        },
        {
          name: 'unit',
          title: 'Unidad',
          type: 'text',
          width: 80
        },
        {
          name: 'min',
          title: 'Mínimo',
          type: 'numeric',
          width: 80
        },
        {
          name: 'max',
          title: 'Máximo',
          type: 'numeric',
          width: 80
        },
        {
          name: 'step',
          title: 'Incremento',
          type: 'numeric',
          width: 100
        },
        {
          name: 'discounts',
          title: 'Descuentos',
          type: 'text',
          width: 100
        },
        {
          name: 'document',
          type: 'hidden'
        },
      ]
    },
  }

  constructor(props) {
    super(props);
  }

  addRow = () => {
    this.el.insertRow();
  }

  updateTable = (instance, cell, col, row, val, id) => {
    if (col === 0) {
      let el = this.editRow(row);
      cell.appendChild(el);
    }
    if (col === 1) {
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
    this.props.history.push('/catalogo/' + e.target.dataset.id);
  }

  loadTable = (ref) => {
    if (!ref) {
      eventEmitter.unsubscribe('resize', 'TableJexcel');
      return;
    }
    this.table = ref;
    let w = ref.offsetWidth - 2;
    let opts = Object.assign({}, this.props.options,
      {
        freezeColumns: 1,
        tableOverflow: true,
        updateTable: this.updateTable,
        tableWidth: w + 'px',
        lazyLoading: true
      });
    this.el = jexcel(ref, opts);
    eventEmitter.subscribe('resize', this.onResize, 'TableJexcel');
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    eventEmitter.unsubscribe('resize', 'TableJexcel');
  }

  editRow(id) {
    let el = document.createElement('p');
    let anchor = document.createElement('a');
    anchor.innerHTML = 'ver elemento';
    anchor.addEventListener('click', this.nav);
    anchor.href = '#';
    anchor.dataset.id = id;
    el.appendChild(anchor);
    return el;
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path={'/catalogo/'} exact={true}>
            <div ref={this.loadTable}></div>
            <br /><br />
            <input type='button' value='Add new row' onClick={() => this.addRow()}></input>
          </Route>
          <Route path={'/catalogo/:id'}> una ruta muy alocada!!!!</Route>
        </Switch>
      </div>
    );
  }
}
