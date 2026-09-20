 const name = "pooja";
 const repoCount = 11;

 console.log(name+ repoCount+ "value");
//new way of writing the string 
 console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

 //declaration of string
 const gameName = new String('pooja');
 //string is an object where the data is stored in key value pairs
  console.log(gameName[0]);
  console.log(gameName.length);
  console.log(gameName.toUpperCase());
  console.log(gameName.toLowerCase());
  console.log(gameName.charAt(4));
  console.log(gameName.indexOf('o'));
  const newString = gameName.substring(0,4);
  console.log(newString);

  const anotherString = gameName.slice(-8, 3);
  console.log(anotherString);

  const newStringOne = "  pooja  ";
  console.log(newStringOne);
  console.log(newStringOne.trim());

  const url = "https://pooja.%20com"

  console.log(url.replace('%20', '_'));

  console.log(url.includes('pooja'));


  
  