import React, { useRef, useEffect, useState } from 'react';
import ParticleWorker from '../../workers/particleWorker.worker.js';


function DrawingCanvas({yinyang}) {
    const canvasRef = useRef(null);
    const requestRef = useRef()
    const particlesRef = useRef([]);
    const [initialized, setInitialized] = useState(false);
    const workerRef = useRef(null);
    const [animationClass, setAnimationClass] = useState('');
    //const [particles, setParticles] = useState([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        workerRef.current = new ParticleWorker();


        if (!initialized) {
            const initialParticles = initializeParticles(width, height);
            console.log(initialParticles)
            //setParticles(initialParticles);
            particlesRef.current = initialParticles;
            workerRef.current.postMessage({
                type: 'init',
                particles: initialParticles
            });
            setInitialized(true);
        }

        workerRef.current.onmessage = (event) => {
            if (event.data.status) {
                console.log(event.data.status); // Log initialization status
            } else {
                particlesRef.current = event.data;
                requestAnimationFrame(() => drawParticles(context, particlesRef.current));
            }
        };

        const draw = ()=>{
            //requestAnimationFrame(draw)
            context.clearRect(0, 0, canvas.width, canvas.height)
            drawParticles(context, particlesRef.current)
            requestRef.current = requestAnimationFrame(draw);
        }

        requestRef.current = requestAnimationFrame(draw)

        let isMouseDown = false;
        let lastX, lastY;

        const handleMouseMove = throttle((e) => {
            if (!isMouseDown) return;
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            if (lastX !== undefined && lastY !== undefined) {
                interpolateAndApplyForce(lastX, lastY, x, y);
            }
            lastX = x;
            lastY = y;
        }, 20);

        const interpolateAndApplyForce = (x1, y1, x2, y2) => {
            const dx = x2 - x1;
            const dy = y2 - y1;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const steps = Math.max(Math.floor(distance / 2), 1);
            for (let i = 0; i <= steps; i++) {
                const x = x1 + (dx * i / steps);
                const y = y1 + (dy * i / steps);
                workerRef.current.postMessage({ type: 'updateParticles', particles: particlesRef.current, x, y, radius: 10, strength: 2.3 });
            }
        };
        
       
        canvas.addEventListener('mousedown', () => isMouseDown = true);
        canvas.addEventListener('mouseup', () => {
                isMouseDown = false;
                lastX = lastY = undefined;
            });
        canvas.addEventListener('mousemove', handleMouseMove);
        
        

        return () => {
            cancelAnimationFrame(requestRef.current)
            workerRef.current.terminate();
            canvas.removeEventListener('mousedown', () => isMouseDown = true);
            canvas.removeEventListener('mouseup', () => {
                isMouseDown = false;
                lastX = lastY = undefined;
            });
            canvas.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    function resetParticles() {
        const canvas = canvasRef.current;
        const worker = new ParticleWorker()
        if(workerRef.current){
            workerRef.current.postMessage({
                type: 'reset',
                width: canvas.width,
                height: canvas.height
            });
        }
        setAnimationClass('spin');  // Apply the spinning animation

        setTimeout(() => {
            setAnimationClass('');  // Reset animation class after 1 second
        }, 1000);
    }
    return (
        <div className = "canvasdiv">
            <canvas ref={canvasRef} width={180} height={300} className="canvas"></canvas>
            <button onClick={resetParticles} className="reset-button" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                <img src={yinyang} alt="Reset" className={animationClass} style={{ width: '40px', height: '40px' }} />
            </button>
        </div>
    );
}

function initializeParticles(width, height) {
    const particleCount = 4000;
    return Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 0,
        vy: 0,
        size: 1,
        alpha: 0.6
    }));
}

function throttle(callback, delay) {
    let lastTime = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastTime >= delay) {
            lastTime = now;
            return callback(...args);
        }
    };
}

function drawParticles(context, particles) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = '#fcf8e8';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    particles.forEach(particle => {
        context.fillStyle = '#a88a13';
        context.globalAlpha = particle.alpha;
        const halfSize = particle.size / 2;
        context.fillRect(particle.x - halfSize, particle.y - halfSize, particle.size, particle.size);
    });
    context.globalAlpha = 1;
}

export default DrawingCanvas;