# Flight Manager App

A simple React Native application to manage and view flight details. Users can add flights, view selected flight details in a modal, and remove flights from their list.

## Features

- **Add Flights**: Add random flights from a hardcoded list.
- **View Details**: View flight details in a modal when a flight is selected.
- **Remove Flights**: Remove flights from the list and modal.

## Folder Structure

- **components/**: Contains reusable components like FlightCard, EmptyState, and Header.
- **models/**: Includes TypeScript types such as Flight Model.
- **screens/**: Includes main screens for the application .
- **styles/**: Contains style-related files (e.g., colors.ts).
- **utils/**: Includes hardcoded data (e.g., flightData.ts).

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SelenSonmez/FlightCase.git
   ```

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!
