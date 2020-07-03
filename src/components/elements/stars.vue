<template>
	<div :id="html_id" class="stars-wrapper">
		<script type="x-shader/x-vertex" id="vertexshader">
            attribute float size;
            varying vec3 vColor;
            void main() {
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
            gl_PointSize = size * ( 70.0 / -mvPosition.z );
            gl_Position = projectionMatrix * mvPosition;
            }
		</script>
		<script type="x-shader/x-fragment" id="fragmentshader">
            uniform sampler2D texture;
            varying vec3 vColor;
            void main() {
            gl_FragColor = vec4( vColor, 1.0 );
            gl_FragColor = gl_FragColor * texture2D( texture, gl_PointCoord );
            }
		</script>
	</div>
</template>

<script>

const spark1 = require("../../assets/spark1.png");
import * as THREE from "three";
import uuidV1 from "uuid/v1";
import device from "current-device";
import { debounce } from "debounce";
	
export default {
	name: "foresco-stars",
	props: {
		particles: Number,
		hole: Boolean,
		delimeterProp: {
			type: Number,
			default: 1.95
		}
	},
	data: function() {
		return {
			renderer: null,
			scene: null,
			camera: null,
			shaderMaterial: null,
			particleSystem: null,
			uniforms: null,
			geometry: null,
			localParticles: 7000,
			radius: 200,
			initialZ: 300,
			html_id: uuidV1(),
			resizeDebounce: null
		};
	},
	methods: {
		onWindowResize() {
			this.camera.aspect = window.innerWidth / window.innerHeight;
			this.camera.updateProjectionMatrix();
			this.renderer.setSize(window.innerWidth, window.innerHeight);
		},
		recalculateParticles() {
			let mtDelimeter = device.mobile() ? 500 : 47;
			let mtMultiplier = device.mobile() ? window.devicePixelRatio * 22 : 1;
			let delimeter = window.devicePixelRatio >= 2 ? mtDelimeter : 500;
			this.localParticles =
				(window.innerHeight * window.innerWidth * mtMultiplier) /
				delimeter /
				this.delimeterProp;
		},
		getParticiclePosition: function(opts) {
			return (Math.random() * 2 - 1) * opts.radius;
		},
		initParticiles: function() {
			let positions = [];
			let colors = [];
			let sizes = [];
			let color = new THREE.Color();
			let opts = { radius: this.radius, hole: this.hole };
			for (let i = 0; i < this.localParticles; i++) {
				let { x, y, z } = {
					x: this.getParticiclePosition(opts),
					y: this.getParticiclePosition(opts),
					z: this.getParticiclePosition(opts)
				};
				positions.push(x);
				positions.push(y);
				positions.push(z);
				color.setHSL(i / this.localParticles, 1.0, 0.5);
				colors.push(color.r, color.g, color.b);
				sizes.push(20);
			}
			this.geometry = new THREE.BufferGeometry();
			this.geometry.setAttribute(
				"position",
				new THREE.Float32BufferAttribute(positions, 3)
			);
			this.geometry.setAttribute(
				"size",
				new THREE.Float32BufferAttribute(sizes, 1).setDynamic(true)
			);
			this.particleSystem = new THREE.Points(
				this.geometry,
				this.shaderMaterial
			);
		},
		init: function() {
			this.recalculateParticles();
			this.camera = new THREE.PerspectiveCamera(
				40,
				window.innerWidth / window.innerHeight,
				1,
				10000
			);
			this.camera.position.z = this.initialZ;
			this.scene = new THREE.Scene();
			this.uniforms = {
				texture: { value: new THREE.TextureLoader().load(spark1) }
			};
			this.shaderMaterial = new THREE.ShaderMaterial({
				uniforms: this.uniforms,
				vertexShader: document.getElementById("vertexshader").textContent,
				fragmentShader: document.getElementById("fragmentshader").textContent,
				blending: THREE.AdditiveBlending,
				depthTest: false,
				transparent: true,
				vertexColors: true
			});
			this.radius = 200;
			this.initParticiles();
			this.scene.add(this.particleSystem);
			this.renderer = new THREE.WebGLRenderer();
			this.renderer.autoClear = true;
			this.renderer.setPixelRatio(window.devicePixelRatio);
			this.renderer.setSize(window.innerWidth, window.innerHeight);
			let container = document.getElementById(this.html_id);
			container.appendChild(this.renderer.domElement);
			//window.addResizeEnd('starsSize'+this.html_id, this.onWindowResize);
		},
		initNextTick: function() {
			setTimeout(() => {
				this.init();
				this.animate();
			}, 110);
		},
		render: function() {
			let time = Date.now() * 0.005;
			this.particleSystem.rotation.z = 0.01 * time;
			for (let i = 0; i < this.localParticles; i++) {
				this.geometry.attributes.size.array[i] =
					10 * (1 + Math.sin(0.1 * i + time));
			}
			this.geometry.attributes.size.needsUpdate = true;
			this.renderer.render(this.scene, this.camera);
		},
		animate() {
			this.animateFrameId = requestAnimationFrame(this.animate);
			this.render();
		},
		enterTheSite() {
			this.animateEnterance();
		},
		animateEnterance() {
			this.enterTheSiteFrameId = requestAnimationFrame(this.animateEnterance);
			this.particleSystem.scale.z += 0.02;
			this.geometry.attributes.size.needsUpdate = true;
			this.renderer.render(this.scene, this.camera);
		},
	},
	mounted() {
		this.initNextTick();
	},
	created() {
		window.addEventListener("resize", debounce(this.onWindowResize, 200));
	},
	beforeDestroy: function() {
		this.renderer.dispose();
		this.renderer.forceContextLoss();
		this.renderer.clear();
		this.localParticles = 0;
		cancelAnimationFrame(this.animateFrameId);
		if (this.enterTheSiteFrameId) {
			cancelAnimationFrame(this.enterTheSiteFrameId);
		}
		this.shaderMaterial.dispose();
		this.geometry.dispose();
		this.renderer.info.programs[0].destroy();
		//window.removeResizeEnd("starsSize" + this.html_id, this.onWindowResize);
	},
	destroyed() {
		//window.removeEventListener("resize", debounce(this.onWindowResize, 200));
	}
};
</script>

<style lang="scss">
.stars-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
	height: 100%;
	z-index: -1;
}
</style>
