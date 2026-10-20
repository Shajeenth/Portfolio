import prototypeImage from '../assets/prototype.jpg'
import carromImage from '../assets/imgOfCarrom.png'
import liDARImage from '../assets/imgOfLiDAR.png'
import gripperImage from '../assets/gripper.jpg'

export const projects = [
  {
    title: 'carrombot',
    fdescription: '',
    description: 'An autonomous carrom using OpenCV.',
    href: 'https://github.com/Shajeenth/carrombot',
    image: carromImage,
    alt: 'An ongoing computer vision project developed as the perception system for an autonomous carrom-playing robot. The system aims to detect and locate carrom pieces using an overhead camera, providing positional information for future autonomous shot planning and robotic actuation. Developed in C++ using OpenCV, the vision pipeline uses HSV colour-space thresholding to isolate carrom pieces based on their colour characteristics. Morphological operations refine the resulting masks by reducing noise and improving object separation, after which the Hough Circle Transform is applied to detect circular game pieces and estimate their positions. A key challenge has been distinguishing actual carrom pieces from similarly coloured board markings while maintaining reliable detection under varying lighting conditions and reflections. The system is being iteratively refined to reduce false positives and improve detection consistency. Future development will focus on mapping detected piece positions to physical board coordinates and integrating the vision system with a motor-driven gantry and striker mechanism to enable autonomous gameplay.',
  },
  {
    title: 'Autonomous LiDAR ROS 2 Simulation',
    fdescription: 'All logic was implemented throughout 4 ROS nodes which had the purposes of noticing obstacles, remembering obstacles, making a path around obstacles, and navigating the path. This is a foxglove simulation that uses LiDAR data to map out and remember its surroundings. Using that data it uses A* and pure pursuit navigation logic to move around obstacles to a given point.',
    description: 'A self navigating car that drives around obstacles.',
    href: 'https://github.com/Shajeenth/wato_asd_training',
    image: liDARImage,
    alt: '',
  },
  {
    title: 'FreeRTOS Gripper',
    fdescription: '',
    description: 'A 3D-printed gripper that gets web inputs from a wifi-connected ESP32 while using FreeRTOS.',
    href: 'https://github.com/Shajeenth/robot-arm',
    image: gripperImage,
    alt: 'Breadboard electronics prototype',
  },
    {
    title: 'MakeshiftController',
    fdescription: '',
    description: 'An ESP32 Controller that communicates throught Bluetooth. It works with Steam Games, such as Hades and Hollow Knight.',
    href: 'https://github.com/Shajeenth/MakeshiftController',
    image: prototypeImage,
    alt: 'Breadboard electronics prototype',
  },
]

