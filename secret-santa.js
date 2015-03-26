var secretSanta = function(players) {
    var givers = players;
    var receivers = players;
    var matches = [];
    
    for (i = 0; i <= givers.length - 1; i++) {
        var currentGiver = givers[i];
        var currentReceiver = receivers[Math.floor(Math.random()*receivers.length)];
        
        // If currentGiver is the same as currentReceiver, repeat randomization until not equal
        while (currentReceiver === currentGiver) {
            var currentReceiver = receivers[Math.floor(Math.random()*receivers.length)];
        }
        
        matches.push({giver: currentGiver, receiver: currentReceiver});
        
        // Delete name from receivers list
        var currentReceiverIndex = receivers.indexOf(currentReceiver);
        receivers.splice(currentReceiverIndex, 1);
    }
    
    return matches;       
    console.log(matches);
}

secretSanta(["John", "Levi", "Andre", "Holly", "mike", "jimmy"]);