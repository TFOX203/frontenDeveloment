const min_particle_size = 5;
const min_speed_x = 1;
const min_speed_y = 1;
const NUM_OF_PARTICLES = 10;
const canvas = document.getElementById("smoke_canvas");
console.log(canvas);
const ctx = canvas.getContext("2d");
//define the color that we want to use for our drawings
ctx.fillStyle = "rgb(36, 104, 104)";
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

  add(particles) {
    this.particles.push(particles);
  }

  animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let index = 0; index < this.particles.length; index++) {
      //update the states of the particles and draw it to the screen
      this.particles[index].update(); 
      if(this.particles[index].size <= 0.2){
          this.particles.splice(index, 1); 
          index--;
          }
    }


    requestAnimationFrame(() => this.animate());
  }
}

class Particles {
  constructor(x, y) {
    this.size = Math.random() * 2 + min_particle_size;
    this.color = "rgb(64, 180, 74)";
    this.speedX = Math.random() * 2 + min_speed_x;
    this.speedY = Math.random() * 2 + min_speed_y;
    this.X = Math.random() * 2 + x;
    this.Y = Math.random() * 2 + y;
  }
  //update the current state of a particle
  update() {
    this.size -= 0.1;
    //this.size =this.size - 1;

    this.draw();
  }

  draw() {
    //define the color that we want to use for our drawings
    ctx.fillStyle = this.color;
    //prepare to draw a path
    ctx.beginPath();
    //draw an arc
    ctx.arc(this.X,this.Y,this.size, 0, Math.PI * 2);
    //fill the object that have drawn
    ctx.fill();
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

smoke.animate();