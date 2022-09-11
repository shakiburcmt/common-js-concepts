function greeting(greetingHandler, yourName) {
    greetingHandler(yourName);
}

function greetingHandler(name) {
    console.log('Good Morning', name);
}

function greetNoon(name) {
    console.log('Good Noon', name);
}

function greetNight(name) {
    console.log('Good Night', name);
}

greeting(greetingHandler, 'Shakib');
greeting(greetingHandler, 'Mariam');
greeting(greetNoon, 'Ayesha');
greeting(greetNight, 'Sara');