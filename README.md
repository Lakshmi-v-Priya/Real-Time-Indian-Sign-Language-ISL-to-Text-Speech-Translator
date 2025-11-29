📘 Real-Time Indian Sign Language (ISL) to Text & Speech Translator
## Abstract

The Real-Time Indian Sign Language (ISL) to Text and Speech Translator is designed to bridge the communication gap between the hearing-impaired community and the general population. By utilizing computer vision and machine learning techniques, this project captures hand gestures through a live camera feed, processes them using hand landmark detection, and translates them into meaningful text and speech. This system provides an efficient, real-time, and user-friendly tool for gesture-based communication.

## Problem Definition

Communication between hearing-impaired individuals and non-signers often leads to misunderstandings due to the lack of a common communication medium. Traditional sign language interpreters are not always available, and written communication may not be practical in real-time situations.
This project aims to address this challenge by creating a real-time ISL-to-text and speech translation system that functions as a virtual interpreter using computer vision techniques.

## Objective

To capture and identify ISL gestures using a live camera feed.

To process the detected gestures and classify them accurately using machine learning models.

To convert recognized gestures into readable text and speech output.

To provide a real-time, accessible, and easy-to-use translation tool for communication support.

## Software Requirements

Operating System: Windows / Linux / macOS

Programming Language: JavaScript (for web implementation)

Frameworks / Libraries:

TensorFlow.js

MediaPipe Hands

HTML, CSS, JavaScript

Tools Required:

Web Camera

Code Editor (VS Code recommended)

Web Browser (Chrome recommended)

## Methodology

The project follows the steps given below:

1. Live Camera Input

A web camera is used to capture real-time video frames of the user performing ISL gestures.

2. Hand Landmark Detection

MediaPipe Hands is used to detect 21 key hand landmarks.
These landmarks are extracted for further gesture classification.

3. Gesture Processing

The extracted coordinates of the hand landmarks are passed through a machine learning classifier that has been trained on ISL gesture samples.

4. Prediction

The classifier predicts the gesture label based on similarity with training samples.

5. Mapping Gesture to Text

The predicted label is displayed as text on the screen.

6. Text-to-Speech Conversion

The recognized text is converted into speech output using a built-in speech synthesis engine.

## Results / Conclusion

The Real-Time ISL to Text and Speech Translator successfully translates ISL hand gestures into readable text and audible speech.
The system demonstrates that real-time gesture recognition using web-based technologies is feasible and effective.
This project helps enhance communication accessibility for the hearing-impaired community by providing a simple, real-time, and digital alternative to human interpreters.

## Acknowledgement

I express my sincere gratitude to my department and faculty mentors for providing guidance and support throughout the project development.
Their insights, feedback, and encouragement were instrumental in completing this system.
I would also like to thank all my peers and the institution for offering a productive environment to carry out this work successfully.
