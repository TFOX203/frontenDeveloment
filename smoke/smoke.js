const min_particle_size = 0.2;
const min_speed_x = 1;
const min_speed_y = 1;
const NUM_OF_PARTICLES = 10;
const canvas = document.getElementById("smoke_canvas");
console.log(canvas);
const ctx = canvas.getContext("2d");
//define the color that we want to use for our drawings
ctx.fillStyle = 'rgb(36, 104, 104)';
//prepare to draw a path
ctx.beginPath();
//draw an arc
ctx.arc(2, 3, 2, 0, Math.PI * 2);
//fill the object that have drawn
ctx.fill();




class Smoke {
  constructor() {
    this.particles = [];
  }

  add (particles){
    this.particles.push(particles);
  }
}

class Particles {
  constructor(x, y) {
    this.size = Math.random() * 2 + min_particle_size;
    this.color = "#23a";
    this.speedX = Math.random() * 2 + min_speed_x;
    this.speedY = Math.random() * 2 + min_speed_y;
    this.X = x;
    this.Y = y;
  }
//update the current state of a particle
  update(){
        this.size -= 1;
        //this.size =this.size - 1;

  }

  draw(){
    
  }
}
const smoke = new Smoke();

window.addEventListener("mousemove", (e) => {
  console.log(e);
  console.log(e.clientX);
  console.log(e.clientY);

  //create particles and add them to the smoke object
  for (let index = 0; index < NUM_OF_PARTICLES; index++) {
    const particles = new Particles(e.clientX, e.clientY);
    smoke.add(particles);
    console.log(smoke.particles);
  }
});
