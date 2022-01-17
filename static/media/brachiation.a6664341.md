## Situation

During the Fall semester of the senior year of my undergraduate education at Tufts university. I took part in a Graduate Level Advanced Robotics course taught by [Professor Matthew Woodward](https://engineering.tufts.edu/me/people/faculty/matthew-woodward). This was a class that focused on **team project-based learning** where we were given bi-weekly tasks.

## Task

The final project of this class was a brachiating robot.  Each group will develop and build a brachiating robot to overcome the brachiation course.

<figure>
  <img src="\img\blog\brachiobot\course.PNG" alt="Brachiation Course Image" class='center'>
  <figcaption class="center">Brachiation Course</figcaption>
</figure>

The robot will be tested on percent completion in each of the 4 challenges and the course as a whole (from both directions). You should attempt to complete the course in both teleoperated (human controlled) and autonomous modes. My team consisted of four people shown in the image below.

<figure>
  <img src="\img\blog\brachiobot\teamPhoto.jpg" alt="Photo of the Team for this project" class='center'>
  <figcaption class="center">[Rónán Gissler](https://ronangissler.com/index.html), [Rebecca Shen](rebeccalshen.com/#), Sawyer Paccione (Me), [Olivia Tomassetti](https://github.com/olivia-tomassetti)</figcaption>
</figure>

## Action

My main design contribution was in the hand of the robot. Key features include a lidar embedded in the palm that allowed for closed-loop control of the distance between the hand and the next bar.

My main code contribution was in creating a structure of classes that provided clear and concise modularity.

## Result

The robot was able to navigate part of the course while in the tele-operated mode. In future iterations, significant advances can be made in the autonomous mode by including an IMU in the body so that we can perform sensor-fusion with the data from the Lidar.

For more information please check this project out on [github](https://github.com/paccionesawyer/ME134-FinalProject) and watch the video on [youtube](https://youtu.be/mIbq5ids4QM)!
