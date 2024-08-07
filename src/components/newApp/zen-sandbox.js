import React, { useRef, useEffect, useState } from 'react';
import ParticleWorker from '../../workers/particleWorker.worker.js';

function DrawingCanvas() {
    const canvasRef = useRef(null);
    const requestRef = useRef()
    const particlesRef = useRef([]);
    const [initialized, setInitialized] = useState(false);
    //const [particles, setParticles] = useState([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const worker = new ParticleWorker();

        if (!initialized) {
            const initialParticles = initializeParticles(width, height);
            console.log(initialParticles)
            //setParticles(initialParticles);
            particlesRef.current = initialParticles;
            worker.postMessage({
                type: 'init',
                particles: initialParticles
            });
            setInitialized(true);
        }

        worker.onmessage = (event) => {
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
                worker.postMessage({ type: 'updateParticles', particles: particlesRef.current, x, y, radius: 10, strength: 2.3 });
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
            worker.terminate();
            canvas.removeEventListener('mousedown', () => isMouseDown = true);
            canvas.removeEventListener('mouseup', () => {
                isMouseDown = false;
                lastX = lastY = undefined;
            });
            canvas.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <canvas ref={canvasRef} width={300} height={180} style={{ border: '1px solid black' }} />;
}

function initializeParticles(width, height) {
    const particleCount = 8000;
    return Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 0,
        vy: 0,
        size: 0.5,
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
    context.fillStyle = '#F4E8C1';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    particles.forEach(particle => {
        context.fillStyle = 'black';
        context.globalAlpha = particle.alpha;
        const halfSize = particle.size / 2;
        context.fillRect(particle.x - halfSize, particle.y - halfSize, particle.size, particle.size);
    });
    context.globalAlpha = 1;
}

export default DrawingCanvas;