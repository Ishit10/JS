document.getElementById('gradeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the input value
    let score = document.getElementById('score').value;
    let grade;
    let comment;

    // Convert the score to an integer
    score = parseInt(score);

    // Determine the grade using if-else statements
    if (score >= 90) {
        grade = 'A';
        comment = 'Excellent work!';
    } else if (score >= 80) {
        grade = 'B';
        comment = 'Well done!';
    } else if (score >= 70) {
        grade = 'C';
        comment = 'Good job!';
    } else if (score >= 60) {
        grade = 'D';
        comment = 'You passed, but you could do better.';
    } else {
        grade = 'F';
        comment = 'Sorry, you failed.';
    }

    // Display the result
    document.getElementById('result').innerHTML = `Grade: ${grade}<br>${comment}`;
});
