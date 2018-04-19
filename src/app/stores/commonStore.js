import { observable, action } from 'mobx';

class CommonStore {

  @observable tabList = [
    {
      domain:'bus',
      value:4670,
      icon:'fa-bus',
      color:'orange',
      info:'bus sale'
    },{
      domain:'motorbike',
      value:5555,
      icon:'fa-motorcycle',
      color:'gold',
      info:'motorbike sale'
    },{
      domain:'car',
      value:6666,
      icon:'fa-cab',
      color:'green',
      info:'car sale'
    },{
      domain:'plane',
      value:999,
      icon:'fa-plane',
      color:'aqua',
      info:'plane sale'
    }
  ];

  @observable menuList = {
    general:[{
      route:'/',
      name:'Dashboard',
      icon:'fa-dashboard'
    },{
      route:'/',
      name:'Page Layouts',
      icon:'fa-television'
    },{
      route:'/',
      name:'Form Stuff',
      icon:'fa-wpforms'
    }],
    elements:[{
      route:'/',
      name:'UI Elements',
      icon:'fa-clone'
    },{
      route:'/',
      name:'Charts',
      icon:'fa-area-chart'
    },{
      route:'/',
      name:'Structures',
      icon:'fa-address-card'
    },{
      route:'/',
      name:'Widgets',
      icon:'fa-th'
    }], extra:[{
      route:'/',
      name:'Emails',
      icon:'fa-envelope'
    },{
      route:'/',
      name:'Chat',
      icon:'fa-wechat'
    }]
  };

  @observable sideBarOpened = false;

  @action loadTabList() {
    return this.tabList;
  }

  @action loadMenuList() {
    return this.menuList;
  }

  @action collapseSidebar() {
    this.sideBarOpened = !this.sideBarOpened;
  }

}

export default new CommonStore();
