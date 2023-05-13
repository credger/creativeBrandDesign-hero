const getRandomArbitrary = (min, max) => {
    const randomValue =  Math.random() * (max - min) + min;
    return randomValue
  }

export default getRandomArbitrary