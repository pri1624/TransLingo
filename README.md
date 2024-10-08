# TransLingo

## Description  
TransLingo is a real-time audio transcription web application that allows users to transcribe audio from uploaded files or live recordings. The app integrates with OpenAI's Whisper model to perform speech-to-text conversion, offering a smooth and responsive transcription experience. Users can upload audio files in formats such as `.mp3` or `.wav` or record audio directly using their microphone. Once the transcription is complete, users can copy or download the text.

## Features
- Real-time Audio Transcription:  
  Converts uploaded audio files or live recordings into text using the OpenAI Whisper model.
  
- Audio Upload and Recording:  
  Users can upload `.mp3` or `.wav` files or record audio directly within the app using their microphone.

- Copy and Download Transcription:  
  Users can copy the transcription to their clipboard or download it as a `.txt` file.

- Background Processing with Web Workers:  
  Web Workers are used to handle the transcription in the background, ensuring smooth performance without blocking the UI.

- Responsive Design:  
  The app is fully responsive and optimized for various screen sizes, offering a seamless experience on both mobile and desktop.

## Technology Stack
- React JS
- Tailwind CSS
- API: Hugging Face Whisper Model via Web Workers

## Live Demo  
Check out the live version of the app at [TransLingo](https://translingo-react.netlify.app/). 
