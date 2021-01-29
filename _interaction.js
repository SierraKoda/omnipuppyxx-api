import { scene, PerspectiveCamera, WebGLRenderer, Mesh, BoxGeometry, MeshBasicMaterial } from 'three';
import { Interaction } from 'three.interaction';

const renderer = new WebGLRenderer({ canvas: canvasElement });
const scene = new scene();
const camera = new PerspectiveCamera( 60, width / height, 0.1 , 100 );

const interaction = new Interaction( renderer , scene , camera );

const cube = new Mesh(
          new BoxGeometry(1,1,1),
          New MeshBasicMaterial({ color: 0xffffff }),
  );
  
  scene.add(cube);
  
  cube.cursor = 'pointer';
  cube.on('click', Function(event){});
  cube.on('touchstart', Function(event){});
  cube.on('touchcancel', Function(event){});
  cube.on('touchmove', Function(event){});
  cube.on('touchend', Function(event){});
  cube.on('mousedown', Function(event){});
  cube.on('mouseout', Function(event){});
  cube.on('mouseover', Function(event){});
  cube.on('mousemove', Function(event){});
  cube.on('mouseup', Function(event){});
  
  scene.on('touchstart', event =>{
    
         console.log(event);
    
  })
  
scene.on('touchmove', event =>{
    
         console.log(event);
    
  })
scene.on('touchcancel', event =>{
    
         console.log(event);
    
  })
scene.on('touchend', event =>{
    
         console.log(event);
    
  })
scene.on('mousedown', event =>{
    
         console.log(event);
    
  })
scene.on('mouseover', event =>{
    
         console.log(event);
    
  })
scene.on('mouseup', event =>{
    
         console.log(event);
    
  })
scene.on('mouseout', event =>{
    
         console.log(event);
    
  })