# The Camel Bar- GSAP Animation Project

## Overview

The camel was designed as a final project for my GSAP Animation Course. The project showcases various animations particularly centered around a bar including the drink splash animation to give a lively feel to the screen. This project was designed as both a creative experiment and a technical demonstration of advanced frontend animation techniques.

## Key Objectives 

- Demonstrate proficiency in GSAP animation techniques.
- Create smooth performance optimized animations.
- Apply motion meaningfully to enhance user experience.
- Simulate a branded bar website with character and flow.

## Features 

- Smooth entrance and exit animations
- Scroll-triggered animations
- Timeline-based animation sequencing
- Staggered text and element reveals
- Transform, opacity, scale, and motion effects
- Responsive animations across screen sizes
- Performance-conscious animation handling

## GSAP TECHNIQUES USED

This project intentionally incorporates a wide range f GSAP animation styles including:

- gsap.to()
- gsap.from()
- gsap.fromTo()
- ScrollTrigger plugin
- Timelines for sequencing
- Staggered animations
- Easing functions for natural motion
- Transform and motion effects
- Opacity and scale animations

## How To Run Locally
1. **Clone the repository**
   `git clone https://github.com/deepracerchichi/thecamel-bar`
2. **Open the project folder** `cd thecamel-bar`
3. **Install dependencies** `npm install`
4. **Run it** `npm run dev` or `npm start`
   **Optional**
5. **To ensure drink splash animation plays smoothly:** Download and Install FFMPEG then run this in the terminal while in the video directory: `ffmpeg -i input.mp4 -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output.mp4`


## Author

#### Chinyere Ukpong
Frontend Developer 
GSAP | Motion Design | Interactive UI


