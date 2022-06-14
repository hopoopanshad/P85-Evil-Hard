//Create a reference for canvas 
canvas=document.getElementById("CanvasProj5")
ctx=canvas.getContext("2d")

greencar_height=160
greencar_width=75
//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x=20
greencar_y=50
function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image();
	background_imgTag.src = background_image;
	background_imgTag.onload = uploadBackground;
	
	

	greencar_imgTag = new Image();
	greencar_imgTag.src = greencar_image ;
	greencar_imgTag.onload = uploadgreencar;
}
	

function uploadgreencar() {
	//Define function ‘uploadBackground’
ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height)
}

function uploadBackground() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
			add();
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		    add()        }
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
			add()
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
			add()
		}
		
		
}

function up()
{
if (greencar_y >=0)
greencar_y = greencar_y-10

//Define function to move the car upward
uploadBackground()
uploadgreencar()

}

function down()
{
	if (greencar_y >=0)
	greencar_y = greencar_y+10	//Define function to move the car upward
	uploadBackground()
	uploadgreencar()	//Define function to move the car downward
}

function left()
{
	if (greencar_y >=0)
	greencar_x = greencar_x-10	//Define function to move the car upward
	uploadBackground()
	uploadgreencar()	//Define function to move the car left side
}

function right()
{
	if (greencar_y >=0)
	greencar_x = greencar_x+10	//Define function to move the car upward
	uploadBackground()
	uploadgreencar()	//Define function to move the car right side
}
