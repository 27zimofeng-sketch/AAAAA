// 项目列表数据
const projects = [
    { title: "Ada's Dashboard", desc: "极简风格的管理后台界面" },
    { title: "Weather App", desc: "基于 API 的实时天气展示" },
    { title: "Vanilla Canvas", desc: "纯原生 JS 开发的画布交互" }
];

// 动态渲染项目
const projectList = document.getElementById('project-list');
projects.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${item.title}</h3><p>${item.desc}</p>`;
    projectList.appendChild(card);
});

// 文件上传模拟
function uploadFile() {
    const input = document.getElementById('fileInput');
    const list = document.getElementById('fileList');
    
    if (input.files.length > 0) {
        const li = document.createElement('li');
        li.style.marginTop = "10px";
        li.textContent = `✅ 成功收到文件: ${input.files[0].name}`;
        list.appendChild(li);
        input.value = ""; 
    } else {
        alert("请先选择一个文件。");
    }
}

// 互动游戏：点击方块
let count = 0;
function scorePoint() {
    count++;
    const target = document.getElementById('game-target');
    target.textContent = count;
    
    // 随机移动位置
    const randomX = (Math.random() - 0.5) * 300;
    const randomY = (Math.random() - 0.5) * 300;
    target.style.transform = `translate(${randomX}px, ${randomY}px)`;
}
