export function pickRandom (array) {
  return array[Math.round(array.length * Math.random())]
}

export function generatePets (numberOfPets = 50) {
  const MAX_AGE = 20
  const listOfNames = ['Danny', 'Garry', 'Peter', 'Shakira', 'Cassandra', 'Cuty', 'Coco', 'Daniel', 'Hector', 'Cecilia', 'Maria']
  const listOfPets = ['dog', 'goat', 'pig', 'sheep', 'cat', 'chicken', 'donkey', 'duck', 'buffalo', 'camel', 'horse', 'llama', 'alpaca', 'turkey', 'gold fish']

  const petId = ((nextId = 0) => {
    return {
      get next () {
        const currentId = nextId
        nextId = nextId + 1

        return currentId
      }
    }
  })()

  const randomPet = () => ({
    id: petId.next,
    name: pickRandom(listOfNames),
    species: pickRandom(listOfPets),
    age: ((precision = 1) =>
      Math.round(MAX_AGE * Math.random() * 10**precision) / (10**precision)
    )()
  })

  return [...new Array(numberOfPets)].map(randomPet)
}

export function firstOf (...args) {
  for (let a of args) {
    if (a !== undefined) return a
  }

  return undefined
}

