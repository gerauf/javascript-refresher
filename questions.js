var selectElementsStartingWithA = function(array) {
  return array.filter(function(item){
    return item[0] === 'a';
  });
};

var selectElementsStartingWithVowel = function(array) {
  return array.filter(function(item){
    return ['a','e','i','o','u'].includes(item[0]);
  });
};

var removeNullElements = function(array) {
  return array.filter(function(item){
    return item !== null;
  });
};

var removeNullAndFalseElements = function(array) {
  return array.filter(function(item){
    return item !== null && item !== false;
  });
};

var reverseWordsInArray = function(array) {
  return array.map(function(item){
    return item.split('').reverse().join('');
  });
};

var everyPossiblePair = function(array) {
  return recursivePair(array.sort(),[]);

  function recursivePair(array, newArray){
    if(array.length === 1){
      return newArray;
    }else {
      firstElement = array.shift();
      for(var i = 0 ; i < array.length; i++) {
        newArray.push([firstElement,array[i]]);
      }
      return recursivePair(array,newArray);
    }
  }
};

var allElementsExceptFirstThree = function(array) {
  return array.slice(3,array.length);
};

var addElementToBeginning = function(array, element) {
  array.unshift(element);
  return array;
};

var sortByLastLetter = function(array) {
  return array.sort(function(a, b){
    if(a[a.length -1] < b[b.length -1]){
      return - 1;
    }else{ return 1; }
  });
};

var getFirstHalf = function(string) {
  return string.slice(0, Math.ceil(string.length/2));
};

var makeNegative = function(number) {
  return Math.abs(number) * -1;
};

var numberOfPalindromes = function(array) {
  return array.filter(function(el){
    return el === el.split('').reverse().join('');
  }).length;
};

var shortestWord = function(array) {
  return array.sort(function(a,b){
    return a.length - b.length;
  })[0];
};

var longestWord = function(array) {
  return array.sort(function(a,b){
    return b.length - a.length;
  })[0];
};

var sumNumbers = function(array) {
  return array.reduce((pv,cv) => pv + cv);
};

var repeatElements = function(array) {
  return [].concat(array,array);
};

var stringToNumber = function(string) {
  return Number(string);
}

var calculateAverage = function(array) {
  return array.reduce((pv,cv) => pv + cv)/array.length;
};

var getElementsUntilGreaterThanFive = function(array) {
  var i = 0;
  var newArray = [];
  while(array[i] <= 5){
    newArray.push(array[i]);
    i++;
  }
  return newArray;
};

var convertArrayToObject = function(array) {
  var obj = {};
  array.forEach(function(currentValue, index, array){
    if(index % 2 === 0){
      obj[currentValue] = array[index + 1];
    }
  });
  return obj;
};

var getAllLetters = function(array) {
  return array.join('').split('').reduce(function(pv,cv){
    if(pv.indexOf(cv) < 0){
      pv.push(cv);
    }
    return pv;
  },[]).sort();
};

var swapKeysAndValues = function(object) {
  return 'Write your method here';
}

var sumKeysAndValues = function(object) {
  return 'Write your method here';
}

var removeCapitals = function(string) {
  return 'Write your method here';
}

var roundUp = function(number) {
  return 'Write your method here';
}

var formatDateNicely = function(date) {
  return 'Write your method here';
}

var getDomainName = function(string) {
  return 'Write your method here';
}

var titleize = function(string) {
  return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
}

var squareRoot = function(number) {
  return Math.sqrt(number);
}

var factorial = function(number) {
  return 'Write your method here';
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
  return 'Write your method here';
}

var letterPosition = function(array) {
  return 'Write your method here';
}
