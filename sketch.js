/**

  Duplicate this sketch to start your project 🧪
  More info: https://dev.codemotionkids.com/libraries/diorama/docs/
  
  Creative Commons BY-SA

**/

function setup() {
  createCanvas3D(windowWidth, windowHeight);
  //Change background color of the scene
  background3D(" #2AEEE6");
  environment(SUNSET);

  var albero = beginGroup();
  //Change material color to orange
  diffuse(" #41FD78");
  //Create a sphere in 0, 0, 0 with radius 1
  sphere(0, 2, 0, 1);
  diffuse(" #603140");
  cylinder(0, 0, 0, 0.3, 2);
  diffuse("#40CC55");
  octahedron(0.9, 2, 0, 0.3);
  diffuse("#40CC55");
  octahedron(0, 2, 0.9, 0.3);
  diffuse("#40CC55");
  octahedron(-0.9, 2, 0, 0.3);
  diffuse("#40CC55");
  octahedron(0, 2, -0.9, 0.3);
  diffuse("#40CC55");
  octahedron(0, 2.9, 0, 0.3);
  endGroup();

  var lato = 300;
  var numberAlbero = 2000;
  for (var i = 0; i < numberAlbero; i++) {
    var x = random(-lato / 2, lato / 2);
    var y = 0;
    var z = random(-lato / 2, lato / 2);

    var nuovoAlbero = clone(albero, x, y, z);
    nuovoAlbero.setScale(random(1, 2));
  }

  align(BOTTOM);
  diffuse("#1B791F");
  box(0, 0, 0, 300, 0, 300);
  pushFX(BLOOM, 0.2);
}

function draw() {
  // 🔍 Never create objects here, but don't forget to have it in your code:
  // leave empty for the moment
}
