import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../utils/WithRouter';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      txtKeyword: ''
    };
  }
  render() {
    const cates = this.state.categories.map((item) => {
      return (
        
        <li key={item._id} className="menu"><Link to={'/product/category/' + item._id}>{item.name}</Link></li>

      );
    });
    return (
      <div className='body-menu'>
        <div className="border-bottom">
          <div className="float-left">
            <li className="menu1"><Link to='/'><img src='Home.png' alt="Logo" />Apple Store</Link></li>
            <ul className="menu">
                {cates}
            </ul>
          </div>
        <div className="float-right">
          <form className="search">
            <input id='search' type="search" placeholder="Nhập sản phần tìm kiếm " className="keyword" value={this.state.txtKeyword} onChange={(e) => { this.setState({ txtKeyword: e.target.value }) }} />
            <input id='submit' type="submit" value="SEARCH" onClick={(e) => this.btnSearchClick(e)} />
          </form>
        </div>
        <div className="float-clear" />
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.apiGetCategories();
  }
  // event-handlers
  btnSearchClick(e) {
    e.preventDefault();
    this.props.navigate('/product/search/' + this.state.txtKeyword);
  }
  // apis
  apiGetCategories() {
    axios.get('/api/customer/categories').then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    });
  }
}
export default withRouter(Menu);