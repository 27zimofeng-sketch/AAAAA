// 1. Projects Data
const myProjects = [
    { title: "Ada's UI Kit", desc: "A minimalist CSS framework." },
    { title: "Logic Engine", desc: "Backend-style logic in pure JS." },
    { title: "Resource Hub", desc: "Frontend file management system." }
];

const projectContainer = document.getElementById('project-list');

myProjects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p>`;
    projectContainer.appendChild(card);
});

// 2. Resource Upload Simulation
function uploadFile() {
    const input = document.getElementById('fileInput');
    const list = document.getElementById('fileList');
    
    if (input.files.length > 0) {
        const item = document.createElement('li');
        item.style.padding = "5px 0";
        item.textContent = `📁 File Received: ${input.files[0].name}`;
        list.appendChild(item);
        input.value = ""; 
    } else {
        alert("Select a file first, Ada.");
    }
}

// 3. Simple Mini Game
let score = 0;
function scorePoint() {
    score++;
    const target = document.getElementById('game-target');
    target.textContent = score;
    
    // Jump to random nearby position
    const moveX = (Math.random() - 0.5) * 400;
    const moveY = (Math.random() - 0.5) * 400;
    target.style.transform = `translate(${moveX}px, ${moveY}px)`;
}
