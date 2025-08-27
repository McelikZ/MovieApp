# MovieApp

Warning:

### ⚠️ This project is built with Expo.
Make sure you have Expo installed and configured before running the project.

### ⚠️API Key Notice

This project uses external Movie Database APIs (e.g., TMDB or similar).
The API key may be directly included in the code. For production, move the API key into an .env file or secure storage to protect sensitive data.

 Link:
- https://developer.themoviedb.org/reference/intro/getting-started
### ⚠️ Folder Name Notice

If you downloaded this project as a `.zip` file from GitHub, the extracted folder may be named something like:
MovieApp-master

To avoid any issues while working with the project, please rename the folder to:
MovieApp

# About the Project
MovieApp is a mobile application developed with React Native and Expo, designed to provide movie enthusiasts with an easy way to:
- 🎬 Browse trending, popular, and upcoming movies
- 🔍 Search for movies by title
- 📖 View detailed movie information (overview, release date, rating, genres)
- 🎥 Watch trailers via YouTube iframe integration
- ⭐ Save favorite movies locally using AsyncStorage
# Dependencies and Setup

This project uses the following main libraries and packages as specified in package.json:

Redux Toolkit & React Redux: For efficient global state management.

- npm install @reduxjs/toolkit react-redux

React Navigation: For handling navigation between screens.
Core navigation and native dependencies:

- npm install @react-navigation/native react-native-screens react-native-safe-area-context

- npm install @react-navigation/native-stack

Axios: For making HTTP requests to the weather API:

- npm install axios

 Expo Video & YouTube Iframe: Video playback and trailers 

 - npm install expo-video react-native-youtube-iframe

Async Storage: Local storage for favorites

- npm install @react-native-async-storage/async-storage

Expo Build:

- npm install expo

Expo packages:

Included with Expo SDK:

- expo

- expo-status-bar

# Technologies and Concepts Used

React Navigation: For handling navigation between screens.

Axios: For making API requests

Redux: Used for global state management.

Props & Components: Data flow and reusability

Expo Video: Video content support

Services: Dedicated files for business logic and API calls.

AsyncStorage:  Persistent local storage

Flexbox: For responsive layouts.



# Project Structure

/src

  /components      # Reusable UI components
  
  /navigation      # Screen navigation setup
  
  /redux           # Redux store, reducers, and actions
  
  /services        # API and business logic services
  
  /screens         # Application screens
  
  /themes          # Color and style themes


# Example Design

<img width="3760" height="2820" alt="ExampleDesign" src="https://github.com/user-attachments/assets/9c5405b7-ada3-48da-bf9c-b0a435c1c80c" />


# Design
  
<img width="1920" height="1080" alt="Design" src="https://github.com/user-attachments/assets/b24a7f3a-02e2-4046-b83c-3443d8737221" />





