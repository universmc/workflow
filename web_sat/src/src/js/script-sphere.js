// script-sphere.js
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

// Create a sphere geometry and material
const sphereGeometry = new THREE.SphereGeometry(1, 100, 100);
const sphereMaterial = new THREE.MeshBasicMaterial({color: 0xffff00});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

camera.position.z = 5;

function animate(
) {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector('#sphere').appendChild(renderer.domElement);

animate();
