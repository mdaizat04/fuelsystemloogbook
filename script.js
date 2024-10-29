// Show the main content after loading
window.onload = function() {
    // Hide the loading screen after 2 seconds
    setTimeout(function() {
        document.getElementById('loadingScreen').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
    }, 2000); // 2 seconds for the initial loading screen

    // Handle form submission
    document.getElementById('dataForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting in the traditional way

        // Use the Fetch API to send data to the server
        fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: document.getElementById('name').value,
                matrix: document.getElementById('matrix').value,
                date: document.getElementById('date').value,
                time: document.getElementById('time').value,
                class: document.getElementById('class').value,
                department: document.getElementById('department').value,
                designation: document.getElementById('designation').value,
                company: document.getElementById('company').value
            })
        })
        .then(response => response.text())
        .then(data => {
            alert(`Thank you, ${document.getElementById('name').value}. Your data has been recorded!`);
            console.log(data); // Log response from server
        })
        .catch(error => console.error('Error:', error));
    });

    // Show or hide fields based on designation selection
    document.getElementById('designation').addEventListener('change', function() {
        const designation = this.value;
        const companyInput = document.getElementById('company');
        const companyLabel = document.getElementById('companyLabel');
        const matrixInput = document.getElementById('matrix');
        const classInput = document.getElementById('class');
        const departmentInput = document.getElementById('department');
        const matrixLabel = document.getElementById('matrixLabel');
        const classLabel = document.getElementById('classLabel');
        const departmentLabel = document.getElementById('departmentLabel');

        // Reset all fields to default visibility
        companyInput.style.display = 'none';
        companyLabel.style.display = 'none';
        matrixInput.style.display = 'block';
        classInput.style.display = 'block';
        departmentInput.style.display = 'block';
        matrixLabel.style.display = 'block';
        classLabel.style.display = 'block';
        departmentLabel.style.display = 'block';

        if (designation === 'Visitor') {
            companyInput.style.display = 'block';
            companyLabel.style.display = 'block';
            matrixInput.style.display = 'none'; // Hide matrix input for visitors
            classInput.style.display = 'none'; // Hide class input for visitors
            departmentInput.style.display = 'none'; // Hide department input for visitors
            matrixLabel.style.display = 'none'; // Hide matrix label for visitors
            classLabel.style.display = 'none'; // Hide class label for visitors
            departmentLabel.style.display = 'none'; // Hide department label for visitors
        } else if (designation === 'Lecturer') {
            matrixInput.style.display = 'none'; // Hide matrix input for lecturers
            classInput.style.display = 'none'; // Hide class input for lecturers
            matrixLabel.style.display = 'none'; // Hide matrix label for lecturers
            classLabel.style.display = 'none'; // Hide class label for lecturers
        }
    });

    // Safety Precautions Button functionality
    document.getElementById('safetyButton').addEventListener('click', function() {
        window.location.href = 'safety.html'; // Redirect to safety.html
    });
};
document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevents the form from submitting immediately

    // Add logic to validate required fields if needed
    let isValid = true;

    if (isValid) {
        alert("Your data has been successfully recorded!");
        // If you want the form to proceed with submitting the data to the server, remove or comment out the preventDefault line above.
    }
});
