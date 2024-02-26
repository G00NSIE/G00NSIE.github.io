document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let data = {};
    for (let [key, value] of formData.entries()) {
        if (key === 'image' && value.name) {
            let reader = new FileReader();
            reader.onloadend = function() {
                data[key] = reader.result;

                displayData(data);
            }
            reader.readAsDataURL(value);
        } else {
            data[key] = value;
        }
    }
});

function displayData(data) {
  
    let formattedData = `
        <h1>${data.name}: Introduction</h1>
        <figure style="float: left; margin-right: 20px;">
        <img src="${data.image}" alt="Uploaded image" style="width: 200px; height: 250px;">
            <figcaption>${data.caption}</figcaption>
        </figure>
        <li class="bold">Personal Background:</li> ${data.personalBackground}
        <li class="bold">Professional Background:</li> ${data.professionalBackground}
        <li class="bold">Academic Background:</li> ${data.academicBackground}
        <li class="bold">Background in this Subject:</li> ${data.webDevBackground}
        <li class="bold">Primary Computer Platform:</li> ${data.platform}
        <li class="bold">Courses:</li>
        <ul>
            <li>${data.course1}</li>
            <li>${data.course2}</li>
            <li>${data.course3}</li>
            <li>${data.course4}</li>
            <li>${data.course5}</li>
        
         
        </ul>
        <li class="bold">Funny/Interesting Item to Remember me by:</li> ${data.funnyThing}
        <li class="bold">I'd also like to Share:</li> ${data.anythingElse}
    </ul>
    `;

    document.getElementById('myForm').innerHTML = formattedData;
}
document.getElementById('addCourse').addEventListener('click', function() {
    let newCourse = document.createElement('input');
    newCourse.type = 'text';
    newCourse.name = 'course' + (document.getElementById('courses').children.length + 1);
    newCourse.required = true;
    document.getElementById('courses').appendChild(newCourse);

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        newCourse.remove();
        deleteButton.remove();
    });
    document.getElementById('courses').appendChild(deleteButton);

    document.getElementById('removeCourse').style.display = 'inline';
});

document.getElementById('removeCourse').addEventListener('click', function() {
    let courses = document.getElementById('courses');
    if (courses.children.length > 0) {
        courses.lastChild.remove();
        courses.lastChild.remove();
    }

    if (courses.children.length === 0) {
        document.getElementById('removeCourse').style.display = 'none';
    }
});