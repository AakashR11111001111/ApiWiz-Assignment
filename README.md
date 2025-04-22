# Mood Tracking Diary App

## Overview
The **Mood Tracking Diary App** allows users to record their daily moods along with weather details, and provides an intuitive interface for tracking emotional well-being over time. The app integrates real-time weather data and provides a mood selection feature with various mood categories such as "Happy", "Neutral", "Unhappy", "Angry", etc. The app also supports dark mode and saves diary entries locally for later viewing.

## Key Features
- **Mood Selection**: Choose from a variety of moods with corresponding emojis and colors.
- **Weather Integration**: Get real-time weather information, including temperature and weather conditions, based on the user's location.
- **Local Storage**: Diary entries are saved locally, enabling users to view and manage their notes at any time.
- **Dark Mode**: Toggle between light and dark modes for a personalized user experience.
- **Diary Entries View**: View previously saved notes along with their corresponding mood and weather details.

## Tech Stack
- **Frontend**: React.js
- **APIs**: 
  - OpenWeatherAPI (for weather data)
  - OpenCage Geolocation API (for fetching user location based on geolocation)
- **State Management**: React hooks (useState, useEffect, useContext)
- **Styling**: CSS Modules for scoped styling
- **Local Storage**: For saving user diary entries

## Hosted Link
The application is deployed and can be accessed online. Please visit the following link to use the app:

**[Live Application](https://api-wiz-assignment.vercel.app/)**

**Note**: Please allow a few seconds for the API response to load the data as weather details may take time to fetch.

**Important**: The app fetches weather data from external APIs, which may result in a slight delay in loading the data. Please be patient while the information is fetched.

## App Walkthrough
1. **Mood Selection**: Upon loading the app, users can select their mood from a set of predefined moods (Happy, Good, Neutral, Unhappy, Angry). Each mood has an associated emoji and color, which helps visually represent the user's emotional state.
2. **Weather Information**: Based on the user's location (detected automatically), the app displays the current weather information, including the temperature and weather condition (sunny, cloudy, etc.).
3. **Diary Entries**: Users can write a short note along with selecting their mood and adding weather information. The entries are saved locally, making them available for later review.
4. **Dark Mode Toggle**: Users can switch between light and dark modes using a toggle for a better experience in different lighting conditions.

## Contributing
If you would like to contribute to this project, feel free to fork the repository and submit a pull request. Your contributions are welcome!

## Disclaimer
- The app relies on third-party APIs (OpenWeather and OpenCage), and response times may vary depending on server availability. Please be patient while the data loads.
