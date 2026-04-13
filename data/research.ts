export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  contributions: string[];
  imageAlt: string;
  tags: string[];
}

export const researchAreas: ResearchArea[] = [
  {
    id: "robot-intelligence",
    title: "Robot Intelligence",
    description:
      "We advance robot intelligence through foundation models and world models that enable robots to perceive, reason, and act in complex physical environments. Vision-Language-Action (VLA) models allow robots to ground language understanding in real-world manipulation and locomotion. Our world models learn physics-aware representations of environments, supporting sim-to-real transfer and long-horizon planning. We apply these approaches across manipulation, humanoid control, autonomous vehicles and racing, and multi-agent systems — combining multimodal sensing (vision, tactile, proprioception) with deep reinforcement learning and computer vision.",
    contributions: [
      "Foundation Models for Robotic Perception and Action",
      "World Models for Physical Reasoning and Sim-to-Real Transfer",
      "Vision-Language-Action (VLA) Models",
      "Learning-based Manipulation and Locomotion",
      "Autonomous Vehicles and Racing",
      "Multi-Agent Motion and Task Planning",
      "3D Computer Vision and Scene Reconstruction",
      "Tactile Sensing for Dexterous Manipulation",
    ],
    imageAlt: "robotic manipulation with tactile sensor and humanoid hierarchical control",
    tags: ["Foundation Models", "World Models", "VLA", "Reinforcement Learning", "Autonomous Vehicles", "Computer Vision", "Humanoid"],
  },
  {
    id: "healthcare-intelligence",
    title: "Healthcare Intelligence",
    description:
      "We develop AI-driven approaches for continuous health monitoring and assistive robotics. By combining wearable sensor data (IMU, EMG, pressure insoles) with foundation models, we enable real-time estimation of body kinematics, kinetics, and activity states across everyday settings. These capabilities power adaptive control of exoskeletons and wearable robotic systems — interpreting user intent and delivering coordinated assistance for rehabilitation and mobility enhancement. Our world models learn to predict human movement dynamics, enabling proactive and personalized interventions.",
    contributions: [
      "Foundation Models for Medical and Healthcare Applications",
      "World Models for Human Movement Prediction",
      "Human Kinematics and Kinetics Estimation",
      "Intention Detection and Activity Recognition",
      "Exoskeletons and Wearable Robotic Systems",
      "Wearable Sensors for Rehabilitation and Digital Healthcare",
    ],
    imageAlt: "wearable exosuit assisting post-stroke patient during walking",
    tags: ["Foundation Models", "Wearable Sensors", "Exoskeleton", "Healthcare", "Rehabilitation"],
  },
];
