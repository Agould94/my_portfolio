/* eslint no-restricted-globals: ['error', 'self'] */
// eslint-disable-next-line no-restricted-globals
self.onmessage = function(e) {
    //console.log("worker recieved messge:", e.data)
    const { type, particles, x, y, radius, strength, width, height } = e.data;
    switch (type) {
        case 'init':{
            // eslint-disable-next-line no-restricted-globals
            if (!self.particles) {
                // eslint-disable-next-line no-restricted-globals
                self.particles = particles;  
                // eslint-disable-next-line no-restricted-globals
                self.postMessage({status: 'Particles initialized', count: self.particles.length});
                console.log("particles initialized") // Initialize only if not already initialized
            }
            // eslint-disable-next-line no-restricted-globals
            self.postMessage(self.particles);  // Send back the initialized particles for drawing
            break;
        }
        case 'reset':
             // eslint-disable-next-line no-restricted-globals
            self.particles = initializeParticles(width, height);
             // eslint-disable-next-line no-restricted-globals
            self.postMessage(self.particles);
            break;   
        case 'updateParticles':{
            //console.log('worker rec')
            // eslint-disable-next-line no-restricted-globals
            if (!self.particles) {
                console.error('Particles data is not initialized.');
                return; // Exit if particles are undefined
            }
            // eslint-disable-next-line no-restricted-globals
            const updatedParticles = self.particles.map(particle => {
                let dx = particle.x - x;
                let dy = particle.y - y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < radius) {
                    let force = (radius - distance) / radius * strength;
                    particle.vx += dx / distance * force;
                    particle.vy += dy / distance * force;
                    // Apply friction
                    particle.vx *= 0.95;
                    particle.vy *= 0.95;
                    particle.x += particle.vx;
                    particle.y += particle.vy;
                }
                return particle;
            });
            // eslint-disable-next-line no-restricted-globals
            self.postMessage(updatedParticles);
            break;
        }
        default:{
            console.error('Unknown message type:', type);
        }
    }
};
function initializeParticles(width, height) {
    const particleCount = 4000;  // Adjust count as needed
    let particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: 0,
            vy: 0,
            size: 1,
            alpha: 0.6
        });
    }
    return particles;
}