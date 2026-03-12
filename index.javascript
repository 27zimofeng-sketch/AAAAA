// 1. Project Demonstration Data
const projects = [
    { title: "E-Commerce UI", desc: "Pure CSS layout with burgundy accents." },
    { title: "JS Calculator", desc: "A functional math tool using vanilla JS." },
    { title: "Task Manager", desc: "Local storage based productivity app." }
];

const projectList = document.getElementById('project-list');

projects.forEach(proj => {
    const card = document.createElement('div');
    card.style.border = "1px solid #D3D3D3";
    card.style.padding = "15px";
    card.innerHTML = `<h3>${proj.title}</h3><p>${proj.desc}</p>`;
    projectList.appendChild(card);
});

// 2. Resource Upload Logic (Simulated)
function uploadFile() {
    const input = document.getElementById('fileInput');
    const list = document.getElementById('fileList');
    
    if (input.files.length > 0) {
        const li = document.createElement('li');
        li.textContent = `Uploaded: ${input.files[0].name}`;
        list.appendChild(li);
        input.value = ""; // Clear input
    } else {
        alert("Please select a file first.");
    }
}

// 3. Mini Game Logic
let score = 0;
function scorePoint() {
    score++;
    const target = document.getElementById('game-target');
    target.textContent = score;
    
    // Move the box randomly
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    target.style.transform = `translate(${x}px, ${y}px)`;
}
