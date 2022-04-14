AFRAME.registerComponent('bawling-ball',{
    init:function () {
        this.throwBall()
    },
    throwBall:function () {

        window.addEventListener('keydown',(e)=>{
            if (e.key==="z") {
                var ball=document.createElement('a-entity')
                ball.setAttribute("gltf-model", "./bowling_ball/scene.gltf");

                ball.setAttribute("scale", { x: 0.3, y: 0.3,  z: 0.3});
            
            
            var cam = document.querySelector('#camera')
            pos=cam.getAttribute('position')

            ball.setAttribute("position", {
                x: pos.x,
                y: pos.y-1.2,
                z: pos.z,
              });


            var camera=document.querySelector('#camera').object3D
            var direction=new THREE.Vector3()
            camera.getWorldDirection(direction)
            ball.setAttribute('velocity',direction.multiplyScalar(-10))
            var scene= document.querySelector('#scene')
            
            scene.appendChild(ball)

            }


        })
    }
})