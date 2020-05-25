const STORAGE_KEY = "mall";

export default {
  // 获取module_name下的key
  getItem(key, module_name) {
    if (module_name) {
      let val = this.getItem(module_name);
      if (val) return val[key];
    }
    return this.getStorage()[key];
  },
  // 设置
  setItem(key, value, module_name) {
    if (module_name) {
      // let val = this.getStorage();
      // val[module_name][key] = value;
      let _val = this.getItem(module_name);
      _val[key] = value;
      this.setItem(module_name, _val);
    } else {
      let val = this.getStorage();
      val[key] = value;
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
  },
  // 清空
  clear(key, module_name) {
    let _val = this.getStorage();
    if (module_name) {
      if (!_val[module_name]) {
        return;
      }
      delete _val[module_name][key];
    } else {
      delete _val[key];
    }
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(_val));
  },
  // 获取最外层的sessionStorage
  getStorage() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}');
  },
};
