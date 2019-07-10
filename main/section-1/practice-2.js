'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  // let collb=collectionB.map(item=item[0]);
  // return collectionA.filter(item=>collectionB.includes(item));
  return collectionA.filter(item=>collectionB.item);
}
