ME134 - Homework 3
The Robotic Arm: Each group must build a robotic arm that writes your initials on something. This task should be completed autonomously.

## Hardware

* Bill Of Materials
  * Laser-cut wooden arms +
  baseplate
  * 3D-printed orange arm
  supports & motor, touch
  screen, end effector holders
  * Raspberry Pi 4
  * 3 large servos
  * RPi touchscreen hat module
  * Jumper wires
  * Suction cups

## Inverse Kinematics

<figure>
  <img src="\img\blog\drawingArm\endEffectors.png" alt="EndEffectors" class='center'>
  <figcaption class="center">Denavit Hartenberg Transformation Matrices</figcaption>
</figure>

## Software
<div class="row ">
    <div class="col-sm-4 d-flex justify-content-center">
        <b>5 Different Run Modes</b>
    </div>
    <div class="col-sm-4 d-flex justify-content-center">
        <b>Robot Arm Class</b>
    </div>
    <div class="col-sm-4 d-flex justify-content-center">
        <b>Libraries Used</b>
    </div>
</div>
<div class="row">
    <div class="col-sm-4 d-flex justify-content-center">
        <ol>
            <li>Touch Screen</li>
            <li>Initials Automation</li>
            <li>Keyboard Control</li>
            <li>Specific Angle Control</li>
            <li>Single (x,y,z) Input</li>
        </ol>
    </div>
    <div class="col-sm-4 d-flex justify-content-center">
        <ul>
            <li> Control 3 MG996R Servo</li>
            <li> User Interface</li>
            <li> Implement DH Equations</li>
        </ul>
    </div>
    <div class="col-sm-4 d-flex justify-content-center">
        <ul>
            <li> Adafruit-circuitpython-servokit</li>
            <li> TKinter </li>
        </ul>
    
    </div>
</div>