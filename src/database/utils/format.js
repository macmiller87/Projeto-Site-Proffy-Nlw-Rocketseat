

const subjects = [
   
    "Artes",
    "Bíologia",
    "Ciências",
    "Educação fisica",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Quimica",
]

const weekdays = [

    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-fira",
    "Sábado",
]

// Funcionalidades //

function getSubject(subjectNumber) {
    const position =+ subjectNumber - 1
    return subjects[position]
}

function convertHoursToMinutes(time) {
  const [hour, minutes] = time.split(":")
  return Number((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}