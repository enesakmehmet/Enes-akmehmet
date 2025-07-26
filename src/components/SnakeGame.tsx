import React, { useState, useEffect, useCallback } from 'react';
import './SnakeGame.css';

interface Position {
  x: number;
  y: number;
}

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_FOOD = { x: 15, y: 15 };
const INITIAL_DIRECTION = { x: 0, y: -1 };

const SnakeGame: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Position>(INITIAL_FOOD);
  const [direction, setDirection] = useState<Position>(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
    return newFood;
  }, []);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection(INITIAL_DIRECTION);
    setGameOver(false);
    setScore(0);
    setIsPlaying(true);
    
    // Focus the game container after reset
    setTimeout(() => {
      const gameContainer = document.querySelector('.snake-game-container') as HTMLElement;
      if (gameContainer) {
        gameContainer.focus();
      }
    }, 100);
  };

  const moveSnake = useCallback(() => {
    if (gameOver || !isPlaying) return;

    setSnake(currentSnake => {
      const newSnake = [...currentSnake];
      const head = { ...newSnake[0] };
      
      head.x += direction.x;
      head.y += direction.y;

      // Duvarlardan geçiş
      if (head.x < 0) head.x = GRID_SIZE - 1;
      if (head.x >= GRID_SIZE) head.x = 0;
      if (head.y < 0) head.y = GRID_SIZE - 1;
      if (head.y >= GRID_SIZE) head.y = 0;

      // Kendine çarpma kontrolü
      if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true);
        setIsPlaying(false);
        return currentSnake;
      }

      newSnake.unshift(head);

      // Yemek yeme kontrolü
      if (head.x === food.x && head.y === food.y) {
        setScore(prev => prev + 10);
        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameOver, isPlaying, generateFood]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Prevent default behavior for arrow keys and escape
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Escape'].includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
      }
      
      // ESC always works to close the game
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      
      // Arrow keys only work when playing
      if (!isPlaying) return;
      
      switch (e.key) {
        case 'ArrowUp':
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
      }
    };

    // Add event listener with capture to ensure it gets the events first
    document.addEventListener('keydown', handleKeyPress, true);
    return () => document.removeEventListener('keydown', handleKeyPress, true);
  }, [direction, isPlaying, onClose]);

  useEffect(() => {
    if (!isPlaying) return;
    
    // Slower speed on mobile for better touch control
    const isMobile = window.innerWidth <= 768;
    const gameSpeed = isMobile ? 200 : 150;
    
    const gameInterval = setInterval(moveSnake, gameSpeed);
    return () => clearInterval(gameInterval);
  }, [moveSnake, isPlaying]);

  // Auto focus when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      const gameContainer = document.querySelector('.snake-game-container') as HTMLElement;
      if (gameContainer) {
        gameContainer.focus();
      }
    }, 200); // Small delay to ensure DOM is ready
    
    return () => clearTimeout(timer);
  }, []);

  // Touch and swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault(); // Prevent scrolling and other default behaviors
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault(); // Prevent default touch behaviors
    if (!touchStart || !isPlaying) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;
    const minSwipeDistance = 30;

    // Determine swipe direction
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal swipe
      if (Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0 && direction.x === 0) {
          // Swipe right
          setDirection({ x: 1, y: 0 });
        } else if (deltaX < 0 && direction.x === 0) {
          // Swipe left
          setDirection({ x: -1, y: 0 });
        }
      }
    } else {
      // Vertical swipe
      if (Math.abs(deltaY) > minSwipeDistance) {
        if (deltaY > 0 && direction.y === 0) {
          // Swipe down
          setDirection({ x: 0, y: 1 });
        } else if (deltaY < 0 && direction.y === 0) {
          // Swipe up
          setDirection({ x: 0, y: -1 });
        }
      }
    }

    setTouchStart(null);
  };

  const handleDirectionChange = (newDirection: Position) => {
    if (!isPlaying) return;
    
    // Prevent reverse direction
    if (newDirection.x !== 0 && direction.x === 0) {
      setDirection(newDirection);
    } else if (newDirection.y !== 0 && direction.y === 0) {
      setDirection(newDirection);
    }
  };

  return (
    <div className="snake-game-overlay" onClick={onClose}>
      <div 
        className="snake-game-container" 
        tabIndex={0}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          // Handle keyboard events directly on the container
          if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Escape'].includes(e.key)) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        <div className="snake-game-header">
          <h3>🐍 Snake Game</h3>
          <span className="score">Skor: {score}</span>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        
        <div 
          className="snake-game-board"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
            const x = index % GRID_SIZE;
            const y = Math.floor(index / GRID_SIZE);
            
            const isSnake = snake.some(segment => segment.x === x && segment.y === y);
            const isHead = snake[0]?.x === x && snake[0]?.y === y;
            const isFood = food.x === x && food.y === y;
            
            return (
              <div
                key={index}
                className={`cell ${isSnake ? 'snake' : ''} ${isHead ? 'head' : ''} ${isFood ? 'food' : ''}`}
              />
            );
          })}
        </div>

        <div className="snake-game-footer">
          {!isPlaying && !gameOver && (
            <div className="start-screen">
              <button className="start-btn" onClick={() => {
                resetGame();
                setShowInstructions(false);
              }}>
                🎮 Oyunu Başlat
              </button>
              {showInstructions && (
                <div className="start-instructions">
                  <p>🎯 Elmayı yakala ve büyü!</p>
                  <p className="desktop-only">⌨️ Ok tuşları: Hareket • ESC: Çıkış</p>
                  <p className="mobile-only">👆 Kaydırarak veya butonlarla hareket et</p>
                </div>
              )}
            </div>
          )}
          
          {gameOver && (
            <div className="game-over">
              <p>🎯 Oyun Bitti! Skor: {score}</p>
              <button className="restart-btn" onClick={resetGame}>
                🔄 Tekrar Oyna
              </button>
            </div>
          )}
          
          {isPlaying && (
            <>
              <div className="mobile-controls">
                <div className="control-row">
                  <button 
                    className="control-btn up"
                    onTouchStart={(e) => {
                      e.preventDefault();
                      handleDirectionChange({ x: 0, y: -1 });
                    }}
                    onClick={() => handleDirectionChange({ x: 0, y: -1 })}
                  >
                    ↑
                  </button>
                </div>
                <div className="control-row">
                  <button 
                    className="control-btn left"
                    onTouchStart={(e) => {
                      e.preventDefault();
                      handleDirectionChange({ x: -1, y: 0 });
                    }}
                    onClick={() => handleDirectionChange({ x: -1, y: 0 })}
                  >
                    ←
                  </button>
                  <button 
                    className="control-btn down"
                    onTouchStart={(e) => {
                      e.preventDefault();
                      handleDirectionChange({ x: 0, y: 1 });
                    }}
                    onClick={() => handleDirectionChange({ x: 0, y: 1 })}
                  >
                    ↓
                  </button>
                  <button 
                    className="control-btn right"
                    onTouchStart={(e) => {
                      e.preventDefault();
                      handleDirectionChange({ x: 1, y: 0 });
                    }}
                    onClick={() => handleDirectionChange({ x: 1, y: 0 })}
                  >
                    →
                  </button>
                </div>
              </div>
              <div className="game-instructions">
                <p className="desktop-only">🎮 Ok tuşları ile hareket et • ESC ile çık</p>
                <p className="mobile-only">👆 Kaydır veya butonlara dokun</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;