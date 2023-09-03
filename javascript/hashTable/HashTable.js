const LinkedList = require("./LinkedList");

class Hashmap {
    constructor(size) {
      this.size = size;
      this.map = new Array(size);
    }
  
    hash(key) {
      return key.split('').reduce((p, n) => {
        return p + n.charCodeAt(0);
      },0) * 599 % this.size;
    }
  
    set(key, value) {
      const hashedKey = this.hash(key);
      if(!this.map[hashedKey]) this.map[hashedKey] = new LinkedList();
      const entry = {[key] : value}
      this.map[hashedKey].add(entry);
    //   console.log(this.map);
    }
    get(key) {
        const hashedKey = this.hash(key);
        if (this.map[hashedKey]) {
          return this.map[hashedKey].theget(key);
        } else {
          return "Key not found";
        }
      }
      has(key){
        const hashedKey = this.hash(key);
        if (this.map[hashedKey]) {
          return true
        } else {
          return "Key not found";
        }
      }
      
//   keys() {
//     const allKeys = [];

//     this.map.forEach((data) => {
//       if (data) {
//         const keys = data.values();
//         allKeys.push(keys);
//       }
//     });

//     return allKeys;
//   }
  keys() {
    const keys = [];

    for (let bucket of this.map) {
      if (bucket) {
        for (let entry of bucket.values()) {
          keys.push(entry[0]);
        }
      }
    }

    return keys;
  }
  }
  module.exports = Hashmap
  const makeHash = new Hashmap(19);
 
// console.log(makeHash.hash('Waleed'))
makeHash.set('Waleed', 'Instructor')
makeHash.set('Aseel', 'TA')
console.log(makeHash.get("Aseel"),"from map");
// makeHash.map.forEach((data, i) => {
//     console.log(...data.values())
//   });