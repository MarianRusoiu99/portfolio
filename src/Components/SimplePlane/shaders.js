export const vertexShader = `
  precision mediump float;
  // default mandatory variables
  attribute vec3 aVertexPosition;
  attribute vec2 aTextureCoord;
  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;

  // our texture matrix uniform
  uniform mat4 simplePlaneTextureMatrix;
  // custom variables
  varying vec3 vVertexPosition;
  varying vec2 vTextureCoord;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMousePosition;
  uniform float uMouseMoveStrength;
  void main() {
    vec3 vertexPosition = aVertexPosition;
    // get the distance between our vertex and the mouse position
    float distanceFromMouse = distance(uMousePosition, vec2(vertexPosition.x, vertexPosition.y));
    // calculate our wave effect
    float waveSinusoid = cos(4.0 * (distanceFromMouse - (uTime / 95.0)));
    // attenuate the effect based on mouse distance
    float distanceStrength = (0.4 / (distanceFromMouse + 0.4));
    // calculate our distortion effect
    float distortionEffect = distanceStrength * waveSinusoid * uMouseMoveStrength;
    // apply it to our vertex position
    vertexPosition.z +=  (distortionEffect / 9.0 * (uResolution.x / uResolution.y) * (uMousePosition.x - vertexPosition.x));
    vertexPosition.x +=  (distortionEffect / 9.0 * (uResolution.x / uResolution.y) * (uMousePosition.x - vertexPosition.x));
    vertexPosition.y +=  (distortionEffect / 9.0 * (uMousePosition.y - vertexPosition.y) * (uMousePosition.y - vertexPosition.y));
    gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);
    // varyings
    vTextureCoord = (simplePlaneTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
    vVertexPosition = vertexPosition;
  }
`;

export const fragmentShader = `

  precision mediump float;
  varying vec3 vVertexPosition;
  varying vec2 vTextureCoord;
  uniform sampler2D simplePlaneTexture;
  uniform float uMouseMoveStrength;
  void main() {
    // apply our texture
    vec4 finalColor = texture2D(simplePlaneTexture, vTextureCoord);
    
    // fake shadows based on vertex position along Z axis
    // finalColor.rgb -= clamp(-vVertexPosition.z, 0.0, 1.0);

    // fake lights based on vertex position along Z axis
     //finalColor.g -= clamp(uMouseMoveStrength, 0.8, 1.0);
    
     //finalColor.b -= clamp(uMouseMoveStrength, 0.8, 1.0);
    
    // handling premultiplied alpha (useful if we were using a png with transparency)
    finalColor = vec4(finalColor.rgb * finalColor.r, finalColor.a);
   gl_FragColor = finalColor;
   
  }
  // uniform vec2 uResolution;
  // uniform float uTime;
  // uniform sampler2D simplePlaneTexture;
  // varying vec3 vVertexPosition;
  // uniform float uMouseMoveStrength;
  // varying vec2 vTextureCoord;


  // mat2 m(float a) {
  //     float c=cos(a), s=sin(a);
  //     return mat2(c,-s,s,c);
  // }
  
  // float map(vec3 p) {
  //     p.xz *= m(uMouseMoveStrength * 4.0);p.xy*= m(uMouseMoveStrength * 1.1);
  //     vec3 q = p * 2.0 + uMouseMoveStrength * 0.0001;
  //     return length(p+vec3(sin(uMouseMoveStrength * 0.1))) * log(length(p) + 1.0) + sin(q.x + sin(q.z + sin(q.y))) * 0.5 - 1.0;
  // }
  
  // void main() {
  //     vec2 a = gl_FragCoord.xy / uResolution.y - vec2(0.9, 0.5);
  //     vec3 cl = vec3(0.0);
  //     float d = 2.5;
  //     vec4 aux = vec4(0.0);
  //     vec4 finalColor = texture2D(simplePlaneTexture, vTextureCoord);
  
  //     for (int i = 0; i <= 3; i++) {
  //         vec3 p = vec3(0, 0, 4.0) + normalize(vec3(a, -1.0)) * d;
  //         float rz = map(p);
  //         float f =  clamp((rz - map(p + 0.1)) * 0.5, -0.1, 1.0);
  //         vec3 l = vec3(0.1, 0.3, 0.4) + vec3(5.0, 2.5, 3.0) * f;
  //         cl = cl * l + smoothstep(2.5, 0.0, rz) * 1.0 * l;
  //         d += min(rz, 0.5);
  //     }
     

  //     aux = vec4(cl, 1.0);
      
  //     //gl_FragColor = aux + finalColor;

  //     gl_FragColor = aux*(1.0-aux.a) + finalColor;

  //     //gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(1.0), finalColor.a);
  // }

  
`;
