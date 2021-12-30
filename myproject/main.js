// kevin the tortle 3d website by Omar Sumon and Kevin the tortle ;)

//imports
import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// basic set-up (three.js)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

// shapes n getting stuff on the screen
const geometry = new THREE.BoxGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });
const rectangle = new THREE.Mesh(geometry, material);

scene.add(rectangle);

// lighting
const pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.set(20, 20, 20);

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(pointLight, ambientLight);

const lighthelpter = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lighthelpter, gridHelper);

// orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

// animation
function animate() {
    requestAnimationFrame(animate);
    rectangle.rotation.x += 0.01;
    rectangle.rotation.y += 0.01;
    controls.update();
    renderer.render(scene, camera);
}

animate();