$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(500, 0, 20, 290);
    createPlatform(100, 650, 300, 50, "black");

    createPlatform(500, 0, 20, 290);
    createPlatform(450, 530, 300, 50, "black");

    createPlatform(500, 0, 20, 290);
    createPlatform(600, 400, 300, 50, "black");

    createPlatform(500, 0, 20, 290);
    createPlatform(1000, 500, 300, 50, "black");

    createPlatform(500, 0, 20, 290);
    createPlatform(1350, 367, 50, 20, "black");

    createPlatform(500, 0, 20, 290);
    createPlatform(950, 250, 200, 50, "black");

    // TODO 3 - Create Collectables
    createCollectable("steve", 670, 130);
    createCollectable("max", 240, 170, 1, 0.2);
    createCollectable("grace", 500, 170, 10, 0.2);
    createCollectable("kennedi", 1050, 170, 10, 0.2);

    // TODO 4 - Create Cannons
    createCannon("top", 200, 1000);
    createCannon("right", 325, 600);
    createCannon("top", 1115, 1200);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
