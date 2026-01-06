const d = document;

const users = [
  {
    id: 1,
    name: "Lucio",
    age: 28,
    active: true,
    skills: ["HTML", "JS", "CSS", "WORDPRESS"],
  },
  {
    id: 2,
    name: "Matías",
    age: 27,
    active: false,
    skills: ["HTML", "CSS", "TYPESCRIPT", "REACT", "NEXT.JS"],
  },
  {
    id: 3,
    name: "Dibella",
    age: 25,
    active: true,
    skills: ["HTML", "CSS", "JS", "TYPESCRIPT"],
  },
  {
    id: 4,
    name: "Pachu",
    age: 30,
    active: false,
    skills: ["HTML", "CSS", "WORDPRESS"],
  },
  {
    id: 5,
    name: "Garu",
    age: 10,
    active: true,
    skills: ["Eat", "Sleep", "Poop"],
  },
];

// 1
const nameArray = users.forEach((el) => {
  console.log(el.name);
});

// 2
const finalNameArray = users.map((el) => el.name);
console.log(finalNameArray);

// 3
const usersNameArray = users.map((el) => `${el.name}: ${el.age} años`);
console.log(usersNameArray);

// 4
const activeUsersArray = users.filter((el) => el.active);
console.log(activeUsersArray);

// 5
const searchUserID = users.find((user) => user.id === 3);
console.log(searchUserID);

// 6
const searchOlderThan = (array, num) => {
  if (typeof num !== "number")
    return console.warn("Unicamente introducir numeros por favor");

  const ageArray = array.filter((el) => el.age > num);

  if (ageArray.length === 0) return console.log("No hay nadie tan viejito aca");

  console.log(ageArray);
};
searchOlderThan(users, 38);

// 7
const usersSkills = (array) => {
  if (array.length === 0) return console.log("No hay usuarios con skills");

  array.forEach((el) =>
    console.log(`${el.name} tiene ${el.skills.length} skills`)
  );
};
usersSkills(users);

// 8
const averageAge = (array) => {
  const totalAge = array.reduce(
    (acc, user) => {
      acc[0].push(user.name);
      acc[1] += user.age;
      return acc;
    },
    [[], 0]
  );
  return totalAge;
};
console.log(averageAge(users));

// 9
const skillsArray = users.map((el) => el.skills).map((arr) => arr);
console.log([...skillsArray].flat());

// 10
const activeUsers = users.filter((el) => el.active);
console.log(`Hay ${activeUsers.length} usuarios activos`);

// 11
const sortAge = users.sort((a, b) => a.age - b.age);
console.log(sortAge);

// 12
const mostYoungUsers = [...users].sort((a, b) => a.age - b.age);
console.log(mostYoungUsers[0], mostYoungUsers[1]);

// 13 y 14
console.clear();
const deleteSelectedId = (array, id) => {
  const indexPosition = array.findIndex((user) => user.id === id);
  array.splice(indexPosition, 1);
  array.reverse();
  console.log(array);
};
deleteSelectedId(users, 5);

// 15
const skillVerifier = (skill) => {
  if (typeof skill !== "string")
    return console.warn("Introducir texto unicamente");
  skill.toLowerCase();
  const allSkills = [...skillsArray].flat().join(",").toLowerCase().split(",");
  console.log(allSkills);

  if (!allSkills.includes(skill))
    return console.log(`No existe el skill "${skill}" en este array`);

  return console.log(`El skill ${skill} si esta`);
};
skillVerifier("react");

// 16
const findNameIndex = users.findIndex((user) => user.name === "Lucio");

// 17
const inactiveFindIndex = users.findIndex((user) => user.active === false);

// 18
users.push({
  id: 5,
  name: "Goku",
  age: 34,
  active: false,
  skills: ["Fight", "Eat", "Train"],
});

// 19
users.pop();

// 20
users.unshift({
  id: 5,
  name: "Goku",
  age: 34,
  active: false,
  skills: ["Fight", "Eat", "Train"],
});

// 21
users.shift();

// 22 y 23
const stringArray = users
  .map((el) => el.name)
  .join()
  .split(",");

// FINAL BOSS
console.log(users);
const finalBossFunction = (array) => {
  const arrayFilter = array
    .filter((user) => user.active)
    .sort((a, b) => b.age - a.age)
    .reduce(
      (acc, user) => {
        acc[0] += user.age;
        acc[1] += user.active;
        user.skills.map((skill) => acc[2].add(skill));

        return acc;
      },
      [0, 0, new Set()]
    );
  console.log(arrayFilter);
};
finalBossFunction(users);



// ACORDATE DE RETORNAR SI NO ES INLINE MOGOLICO
