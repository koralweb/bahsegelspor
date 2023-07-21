import {action, makeObservable, observable} from 'mobx';
import foodList from '../data/foodList';

class Products {
  list = foodList;

  constructor() {
    makeObservable(this, {
      list: observable,
      addProduct: action,
      removeProduct: action,
      clearCart: action,
    });
  }

  addProduct(id, cnt) {
    this.list.find(el => el.id === id).count = cnt;
    this.list.find(el => el.id === id).added = true;
  }

  removeProduct(id) {
    this.list.find(el => el.id === id).added = false;
  }

  clearCart() {
    this.list = [...this.list].map(el => ({
      ...el,
      added: false,
      count: 1,
    }));
  }
}

const products = new Products();

export default products;
