#pragma strict

//Camera Transform
var Cam : Transform;
//Difference variable to reset the user's view based on their current gyroscopic readings
var difference : Quaternion;
//The variable for the gyroscope's readings
var gyroscopeValues : Quaternion;

function Start () {
//Enables the gyroscope, essentially turning it on
Input.gyro.enabled = true;

//Sets the beggining difference to 0, this will lock the view when the app is started. Just tap the screen to start looking around
difference = Quaternion(0,0,0,0);
}



function Update () {
//Aquires the gyroscope's values
gyroscopeValues = Input.gyro.attitude;
//Aquires the difference between the current gyroscopic readings and the user's set difference values. This allows the user to reset the view.
Cam.rotation = Quaternion.Inverse(gyroscopeValues)*difference;
//Flips the camera's z axis
Cam.rotation.z *=-0.01;
}



function Touch(){
//This function is called every time a person touches anywhere on the screen


//Resets the difference variable to the current gyroscopic values
difference = Input.gyro.attitude;
}


























//I know that the BB8 textures are messed up





