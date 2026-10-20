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
    alt: '',
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

