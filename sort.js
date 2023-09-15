function twoSort(s) {
    return s.sort().at(0).split("").join('***');
  }


  let planets = ["Venus", "Earth", "Saturn", "Uranus", "Mars", "Sun"]
  console.log(twoSort(planets));