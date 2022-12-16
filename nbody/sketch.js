let particles = [];
let sun;

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 2; i++) {
    let pos = p5.Vector.random2D();
    let vel = pos.copy();
    vel.setMag(random(10, 15));
    pos.setMag(random(100, 150));
    vel.rotate(PI / 2);
    let m = random(10, 15);
    particles[i] = new Particle(pos.x, pos.y, vel.x, vel.y, m);
  }
  sun = new Particle(0, 0, 0, 0, 500);
  background(0);
}

function draw() {
  background(0, 20);
  translate(width / 2, height / 2);

  for (let particle of particles) {
    sun.attract(particle);
    for (let other of particles) {
      if (particle !== other) {
        particle.attract(other);
      }
    }
  }
  for (let particle of particles) {
    particle.update();
    particle.show();
  }
  sun.show();
}
