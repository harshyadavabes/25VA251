function calculateResult() {
    let subjectCount = document.getElementById("subjectCount").value;

    let totalMarks = 0;

    for (let i = 1; i <= subjectCount; i++) {
        let marks = prompt("Enter marks for subject " + i);
        marks = Number(marks);

        if ( marks < 0) {
            alert("Please enter valid marks for subject " + i);
            return;
        }

        totalMarks += marks;
    }
    let percentage = totalMarks / subjectCount;

    document.getElementById("result").innerHTML =
        "Percentage: " + percentage + "%";
}