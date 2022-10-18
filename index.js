// Code your solution in this file!

const returnFirstTwoDrivers = function(array){
    return array.slice(0,2)
};

const returnLastTwoDrivers = function(array){
    return array.slice(-2)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x){
    return function(fare){
        return x * fare;
    };
};

function fareDoubler(fare){
    const calc = createFareMultiplier(2);
    return calc(fare);
};

function fareTripler(fare){
    const calc = createFareMultiplier(3);
    return calc(fare);
};

function selectDifferentDrivers(array,selectTwo){
    return selectTwo(array);
}

