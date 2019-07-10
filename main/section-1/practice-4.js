'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let allkeys=collectionA.map(item=>item.key);//获取collectionA所有key
  return allkeys.filter(item => objectB.value.includes(item));
}
