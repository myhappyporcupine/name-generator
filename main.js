const firstNames = ['Abe', 'Bob', 'Claire', 'Dave', 'Elizabeth', 'Fred',
                    'George', 'Hannah', 'Ian', 'Jane', 'Karl', 'Laura', 'May',
                    'Nathan', 'Owen', 'Paul', 'Quentin', 'Richard', 'Sarah',
                    'Tiffany', 'Uma', 'Vincent', 'Wendy', 'Xerxes', 'Yael', 'Zohar'];

const lastNames  = ['Alvin', 'Benson', 'Charles', 'Doyle', 'Efraim', 'Fredrickson',
                    'Golan', 'Hilel'];

function randomInt(limit) {
  return Math.floor(Math.random() * limit);
}

function randomEntry(array) {
  const randomIndex = randomInt(array.length);

  return array[randomIndex];
}

function randomFirstName() {
  return randomEntry(firstNames);
}

function randomLastName() {
  return randomEntry(lastNames);
}

function randomName() {
  const firstName = randomFirstName();
  const lastName = randomLastName();
  const fullName = firstName + ' ' + lastName;

  return fullName;
}

function nameGenerationHandler() {
  const nameDiv = document.getElementById('name');
  const newName = randomName();

  nameDiv.textContent = newName;
}

document.getElementById('generate').addEventListener('click', nameGenerationHandler);
