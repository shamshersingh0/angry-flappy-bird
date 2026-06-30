// Game variables
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let gameRunning = false;
let score = 0;

// Bird object
const bird = {
    x: 100,
    y: 300,
    width: 40,
    height: 40,
    velocity: 0,
    gravity: 0.6,
    jumpPower: -12,
    draw() {
        // Draw angry bird (red circle with angry face)
        ctx.fillStyle = '#E74C3C';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width / 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Eyes
        ctx.fillStyle = '#FFF';
        ctx.beginPath();
        ctx.arc(this.x - 8, this.y - 5, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(this.x + 8, this.y - 5, 6, 0, Math.PI * 2);
        ctx.fill();
        
        // Pupils
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(this.x - 8, this.y - 5, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(this.x + 8, this.y - 5, 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Angry eyebrows
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.x - 13, this.y - 12);
        ctx.lineTo(this.x - 3, this.y - 15);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(this.x + 13, this.y - 12);
        ctx.lineTo(this.x + 3, this.y - 15);
        ctx.stroke();
        
        // Beak
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.moveTo(this.x + 15, this.y);
        ctx.lineTo(this.x + 25, this.y - 5);
        ctx.lineTo(this.x + 25, this.y + 5);
        ctx.fill();
    },
    update() {
        this.velocity += this.gravity;
        this.y += this.velocity;
    },
    jump() {
        this.velocity = this.jumpPower;
    }
};

// Pipes object
const pipes = [];
const pipeWidth = 60;
const pipeGap = 120;
const pipeDistance = 250;

function createPipe() {
    const topHeight = Math.random() * (canvas.height - pipeGap - 100) + 50;
    pipes.push({
        x: canvas.width,
        topHeight: topHeight,
        bottomY: topHeight + pipeGap,
        passed: false,
        draw() {
            // Top pipe (wood texture)
            drawWoodPipe(this.x, 0, pipeWidth, this.topHeight);
            
            // Bottom pipe (wood texture)
            drawWoodPipe(this.x, this.bottomY, pipeWidth, canvas.height - this.bottomY);
        },
        update() {
            this.x -= 5;
        }
    });
}

function drawWoodPipe(x, y, width, height) {
    // Main wood color
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(x, y, width, height);
    
    // Wood grain effect
    ctx.fillStyle = 'rgba(139, 69, 19, 0.5)';
    for (let i = 0; i < height; i += 10) {
        ctx.fillRect(x, y + i, width, 5);
    }
    
    // Border
    ctx.strokeStyle = '#654321';
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, width, height);
}

function checkCollision() {
    // Check ground collision
    if (bird.y + bird.width / 2 > canvas.height) {
        return true;
    }
    
    // Check ceiling collision
    if (bird.y - bird.width / 2 < 0) {
        return true;
    }
    
    // Check pipe collision
    for (let pipe of pipes) {
        if (bird.x + bird.width / 2 > pipe.x &&
            bird.x - bird.width / 2 < pipe.x + pipeWidth) {
            if (bird.y - bird.width / 2 < pipe.topHeight ||
                bird.y + bird.width / 2 > pipe.bottomY) {
                return true;
            }
        }
    }
    
    return false;
}

function updateScore() {
    for (let pipe of pipes) {
        if (pipe.x + pipeWidth < bird.x && !pipe.passed) {
            pipe.passed = true;
            score++;
            document.getElementById('score').textContent = score;
        }
    }
}

function drawBackground() {
    // Sky gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#87CEEB');
    gradient.addColorStop(1, '#E0F6FF');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Ground
    ctx.fillStyle = '#90EE90';
    ctx.fillRect(0, canvas.height - 30, canvas.width, 30);
    
    // Ground pattern
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.lineWidth = 1;
    for (let i = 0; i < canvas.width; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, canvas.height - 30);
        ctx.lineTo(i + 20, canvas.height);
        ctx.stroke();
    }
}

function gameLoop() {
    if (!gameRunning) {
        return;
    }
    
    // Clear and draw background
    drawBackground();
    
    // Update and draw bird
    bird.update();
    bird.draw();
    
    // Create pipes
    if (pipes.length === 0 || pipes[pipes.length - 1].x < canvas.width - pipeDistance) {
        createPipe();
    }
    
    // Update and draw pipes
    for (let i = pipes.length - 1; i >= 0; i--) {
        pipes[i].update();
        pipes[i].draw();
        
        if (pipes[i].x + pipeWidth < 0) {
            pipes.splice(i, 1);
        }
    }
    
    // Update score
    updateScore();
    
    // Check collision
    if (checkCollision()) {
        gameRunning = false;
        document.getElementById('gameOverScreen').classList.remove('hidden');
        document.getElementById('finalScore').textContent = `Score: ${score}`;
    }
    
    requestAnimationFrame(gameLoop);
}

function startGame() {
    document.getElementById('startScreen').classList.add('hidden');
    gameRunning = true;
    score = 0;
    document.getElementById('score').textContent = '0';
    pipes.length = 0;
    bird.y = 300;
    bird.velocity = 0;
    gameLoop();
}

// Event listeners
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && gameRunning) {
        e.preventDefault();
        bird.jump();
    }
});

canvas.addEventListener('click', () => {
    if (gameRunning) {
        bird.jump();
    }
});

// Draw initial state
drawBackground();
bird.draw();
