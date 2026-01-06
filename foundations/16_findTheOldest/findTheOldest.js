const findTheOldest = function(people) {
    return people.reduce((max, curr) => {
        const ageMax = getAge(max.yearOfBirth, max.yearOfDeath); 
        const ageCurr = getAge(curr.yearOfBirth, curr.yearOfDeath); ; 

        return (ageMax > ageCurr) ? max : curr; 
    }); 
};

function getAge(birth, death) {
  if (!death) 
    death = new Date().getFullYear();
  return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
