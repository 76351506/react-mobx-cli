import { observable, action, makeObservable } from 'mobx';


class App {
  constructor() {
    // 使用 makeObservable mobx6.0 才会更新视图
    makeObservable(this);
  }
  @observable namespace = "app";
  @observable count = 0;

  @action
  add = () => {
    this.count++;
    console.log(this.count)
  }
}

export default new App();