const iteratorObj = (obj) => {
  let index = 0;
  const objKeys = Object.keys(obj)
  return Object.assign({}, obj, {
    [Symbol.iterator]: () => {
      return {
        next: () => {
          if (index !== objKeys.length) {
            const result = {
              done: false,
              value: {
                key: objKeys[index],
                value: obj[objKeys[index]],
              }
            }
            index++;
            return result;
          }
          return { done: true, value: {
            key: objKeys[index],
            value: obj[objKeys[index]],
          } }
        }
      }
    }
  })
}

const gameOfThronesCharacters = {
  jonSnow: 'dead?',
  drogo: 'dead',
  littleFinger: 'dead',
}

const iterable = iteratorObj(gameOfThronesCharacters)

for (const ele of iterable) {
  console.log(ele);
}
