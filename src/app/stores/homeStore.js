import { observable, action } from 'mobx';

class HomeStore {

  @observable chartData = [23, 13, 21, 14, 37, 15, 18, 34, 30,  37, 15, 18, 34, 30,34, 30];
  @action getChartData() {
    return this.chartData;
  }
  
}

export default new HomeStore();
