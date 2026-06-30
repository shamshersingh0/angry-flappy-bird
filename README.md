# 🐦 Angry Flappy Bird 🐦

A fun twist on the classic Flappy Bird game with an Angry Birds theme!

## 🚀 How to Run

### Option 1: Direct File Opening
1. Clone or download this repository
2. Open the `index.html` file directly in your web browser
3. Click "Start Game" to begin playing!

### Option 2: Using a Local Server (Recommended)
If you have Python installed:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open `http://localhost:8000` in your browser.

### Option 3: Using Node.js
If you have Node.js installed:
```bash
npm install -g http-server
http-server
```
Then open the URL shown in your terminal.

### Option 4: Using Live Server (VS Code)
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html` and select "Open with Live Server"
3. The game will open automatically in your default browser

## 🎮 How to Play

1. **Start the game** by clicking the "Start Game" button
2. **Control the bird** by:
   - Clicking anywhere on the canvas, OR
   - Pressing the SPACE bar
3. **Avoid the obstacles** - The wooden pipes are deadly!
4. **Earn points** by successfully passing through the gaps between pipes
5. **Game Over** - Hit a pipe or the ground to end the game

## ✨ Features

✨ **Angry Birds Theme**
- Cute and angry red bird character with expressive face
- Wooden pipe obstacles styled like Angry Birds structures
- Green grass ground with ground pattern

🎮 **Smooth Gameplay**
- Physics-based gravity and jumping mechanics
- Randomly generated pipe gaps for variety
- Smooth animations and responsive controls

📊 **Score Tracking**
- Real-time score display
- Final score shown on game over screen
- Play again functionality

## 📋 Game Rules

- The bird automatically falls due to gravity
- Click or press SPACE to make the bird jump/flap
- Avoid the wooden pipes at all costs
- Don't fall off the ground or hit the ceiling
- Gain 1 point for each pipe successfully passed
- Game ends on collision

## 📁 Installation

Simply open `index.html` in your web browser to play!

### Files Included:
- `index.html` - Game structure and UI
- `styles.css` - Styling and animations
- `script.js` - Game logic and physics
- `README.md` - Documentation

## 🛠️ Technical Details

- Built with HTML5 Canvas API
- Pure JavaScript (no frameworks required)
- Responsive and smooth 60 FPS gameplay
- Collision detection for pipes and boundaries
- No dependencies needed - works offline!

## 🎯 Game Statistics

- Canvas Size: 800x600 pixels
- Bird Size: 40x40 pixels
- Pipe Width: 60 pixels
- Pipe Gap: 120 pixels
- Gravity: 0.6 pixels/frame²
- Jump Power: -12 pixels/frame

## 🎨 Color Scheme

- Bird: Red (#E74C3C) with gold beak
- Pipes: Brown wood (#8B4513)
- Sky: Light blue gradient (#87CEEB to #E0F6FF)
- Ground: Green (#90EE90)
- Buttons: Red gradient (#E74C3C to #C0392B)
- Reset Button: Green gradient (#27AE60 to #229954)

## 🎯 Tips to Improve Your Score

- Click/press early to anticipate gaps
- Maintain a steady rhythm for better control
- Watch for patterns in randomly generated pipes
- Practice timing your jumps for maximum precision

## 🐛 Troubleshooting

**Game not starting?**
- Make sure JavaScript is enabled in your browser
- Try a different browser
- Clear your browser cache

**Slow performance?**
- Close other browser tabs
- Disable browser extensions
- Try a different browser

## 📝 License

Feel free to use this code for personal and educational purposes!

## Have Fun! 🎮

Enjoy the game and try to get the highest score possible! Share your best scores and challenge your friends!
