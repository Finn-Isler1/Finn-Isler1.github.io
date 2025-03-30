document.getElementById("infoForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value;
    let mascot = document.getElementById("mascot").value;

    if (!name || !mascot) {
        alert("Please fill in all fields.");
        return;
    }


    let courses = document.querySelectorAll("#coursesContainer input");
    let courseList = "";
    courses.forEach(course => {
        if (course.value) {
            courseList += `<p>${course.value}</p>`;
        }
    });

    let output = `<p>Results</p>`;
                  
    document.getElementById("formOutput").innerHTML = output;
    document.getElementById("formOutput").style.display = "block";
    document.getElementById("infoForm").style.display = "none";
});


function resetForm() {
    document.getElementById("infoForm").reset(); 
    document.getElementById("formOutput").style.display = "none";
    document.getElementById("infoForm").style.display = "block";
    document.getElementById("coursesContainer").innerHTML = ""; 
}

function addCourseField() {
    let container = document.getElementById("coursesContainer");

    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter course name";

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        input.remove();
        deleteButton.remove();
    };

    container.appendChild(input); 
    container.appendChild(deleteButton);
}
