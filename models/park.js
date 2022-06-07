const Park = function(name, ticketPrice){
this.name = name
this.ticketPrice = ticketPrice
this.dinosaurs = []
}

Park.prototype.numOfDinos = function(){
    return this.dinosaurs.length;
}


Park.prototype.addDino = function(dinosaur){
    this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinoByName = function(dinosaur){
    const indexOfDino = this.dinosaurs.indexOf(dinosaur)
    this.dinosaurs.splice(indexOfDino, 1)
}

Park.prototype.mostVisitedDino = function() {
    let highest = 0;
    let dino;
    for (dinosaur of this.dinosaurs) {
      if (dinosaur.guestsAttractedPerDay > highest) {
        highest = dinosaur.guestsAttractedPerDay;
        dino = dinosaur;
      }
    }
    return dino;
};

// Park.prototype.allDinosaurType = function(species) {
//     type = [];
//     for (dinosaur of this.dinosaurs) {
//       if (dinosaur.species === species) {
//         type.push(dinosaur);
//       }
//     };
//     return type;
//   };

Park.prototype.dailyVisitors = function() {
    total = 0;
    for (dinosaur of this.dinosaurs) {
      total += dinosaur.guestsAttractedPerDay;
    };
    return total;
  };

Park.prototype.annualVisitors = function() {
     return (this.dailyVisitors() * 365);
};

Park.prototype.annualRevenue = function() {
    return (this.annualVisitors() * this.ticketPrice)
  };

module.exports = Park;