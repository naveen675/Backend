const names=  require('./names');

function func1(name) {

    console.log(`hello func1 ${names.naveen}`);
}

function func2(name) {

    console.log(`hello func2`);
}

module.exports = {func1,func2};