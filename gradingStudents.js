function gradingStudents(grades) {

    let newGrades = grades.map(grade => {
        const next5 = 5 * Math.ceil(grade / 5)

        if (grade < 38 || next5 - grade >= 3) {
            return grade
        } else if (next5 - grade <= 2) {
            return next5
        }
    })

    return newGrades
}

console.log(gradingStudents([4, 73, 67, 38, 33]))