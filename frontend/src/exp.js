class Human {
  constructor(age) {
    this.age = age
  }
  setAge(newAge) {
    this.age = newAge
  }
}

const Haidar = new Human(24)

class Superhero extends Human {
  constructor(age, skills) {
    super(age)
    this.skills = skills
  }
}

const Supermane = new Superhero(40, "Fly")
