let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 3; i++) {
    let pos = p5.Vector.random2D();
    let vel = pos.copy();
    vel.setMag(random(10, 15));
    pos.setMag(random(100, 150));
    vel.rotate(PI / 2);
    let m = random(1000, 2000);
    particles[i] = new Particle(pos.x, pos.y, vel.x, vel.y, m);
  }
  background(0);
}

function draw() {
  background(0, 20);
  translate(width / 2, height / 2);

  for (let particle of particles) {
    for (let other of particles) {
      if (particle !== other) {
        particle.attract(other);
      }
    }
  }
  translate(-((particles[0].pos.x + particles[1].pos.x + particles[2].pos.x)/3), -((particles[0].pos.y + particles[1].pos.y + particles[2].pos.y)/3))
  for (let particle of particles) {
    particle.update();
    particle.show();
  }

}
