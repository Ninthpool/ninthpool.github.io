// put it in main
var a = document.getElementsByClassName("main full-width")
var container = a[0]
container.style.height = "900px" // set initial height
console.log(container)


import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, container.offsetWidth / container.offsetHeight , 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( container.offsetWidth, container.offsetHeight );
// document.body.appendChild( renderer.domElement );
container.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

// scene color, background is 0xf5f5fa
scene.background = new THREE.Color( 0xf5f5fa );

// lights
var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(10, 0%, 90%)'), 1.0);
keyLight.position.set(-100, 0, 0);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 90%)',), 1);
fillLight.position.set(100, 0, 100);

var backLight = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 90%)'), 1.0);
backLight.position.set(0, 100, -100).normalize();


scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);

//resize window
window.addEventListener('resize', () => {
    renderer.setSize(container.offsetWidth , container.offsetHeight);

    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
})

function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();