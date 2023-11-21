
                                                        //1

let arrage = prompt("Введите ваш возраст:");
let result = checkage(arrage);
console.log(result);


function checkage(age) {
    if (age >= 18) {
        return("Welcome")
        
    }else if (age >= 0 && age < 18){
        return ("no entry")
    }else{
        return("Дебил")
    }    
}







                                                                            //2

function Longest_Name(...names) {
    let longestName = "";
    for (let name of names) {
      if (name.length > longestName.length) {
        longestName = name;
      }
    }
    return longestName;
    
}
let longestName = Longest_Name('Alex', 'George', 'Michael');
  console.log(longestName);





                                                                        //3

  let total = 100; 
  let broken = 20; 

  function Proportion(total, broken) {
  return broken / total;
}

let proportion = Proportion(total, broken);
console.log(proportion);

