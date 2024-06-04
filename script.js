let courseCount = 1;

function addCourse() {
    courseCount++;
    const courseInputs = document.getElementById('courseInputs');
    const newCourse = document.createElement('div');
    newCourse.id = `courseDiv${courseCount}`;
    newCourse.innerHTML = `
        <label for="course${courseCount}">Course ${courseCount} Grade:</label>
        <select id="course${courseCount}" name="course${courseCount}">
            <option value="4.00">AA</option>
            <option value="3.75">BA+</option>
            <option value="3.50">BA</option>
            <option value="3.25">BB+</option>
            <option value="3.00">BB</option>
            <option value="2.75">CB+</option>
            <option value="2.50">CB</option>
            <option value="2.25">CC+</option>
            <option value="2.00">CC</option>
            <option value="1.75">DC+</option>
            <option value="1.50">DC</option>
            <option value="1.25">DD+</option>
            <option value="1.00">DD</option>
            <option value="0.00">FF</option>
            <option value="0.00">VF</option>
        </select>
        <label for="credits${courseCount}">Credits:</label>
        <input type="number" id="credits${courseCount}" name="credits${courseCount}" min="0" step="0.5">
        <button type="button" onclick="removeCourse('courseDiv${courseCount}')">Delete</button>
    `;
    courseInputs.appendChild(newCourse);
}

function removeCourse(courseId) {
    const courseDiv = document.getElementById(courseId);
    courseDiv.remove();
}

function calculateSemesterGPA() {
    const courseInputs = document.getElementById('courseInputs').children;
    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < courseInputs.length; i++) {
        const grade = parseFloat(courseInputs[i].querySelector('select').value);
        const credits = parseFloat(courseInputs[i].querySelector('input[type=number]').value);
        totalPoints += grade * credits;
        totalCredits += credits;
    }

    const semesterGPA = totalPoints / totalCredits;
    document.getElementById('semesterResult').innerText = `Your Semester GPA is: ${semesterGPA.toFixed(2)}`;
}

function calculateOverallGPA() {
    const previousCredits = parseFloat(document.getElementById('previousCredits').value);
    const previousGPA = parseFloat(document.getElementById('previousGPA').value);
    const courseInputs = document.getElementById('courseInputs').children;
    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < courseInputs.length; i++) {
        const grade = parseFloat(courseInputs[i].querySelector('select').value);
        const credits = parseFloat(courseInputs[i].querySelector('input[type=number]').value);
        totalPoints += grade * credits;
        totalCredits += credits;
    }

    const semesterGPA = totalPoints / totalCredits;
    const overallPoints = (previousGPA * previousCredits) + totalPoints;
    const overallCredits = previousCredits + totalCredits;
    const overallGPA = overallPoints / overallCredits;

    document.getElementById('overallResult').innerText = `Your Overall GPA is: ${overallGPA.toFixed(2)}`;
}
