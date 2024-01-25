This is a [**React Native**](https://reactnative.dev) project

## Background Questions

### Q1.

```
this.setState({count: this.state.count+1})
```

The problem with using this form of updating state is that setState updates are asynchronous. This means that they may not immediately happen which would mean that the count value at that moment is innacurate. State in React should be treated as immutable i.e it shouldn't be changed directly. State should be updated by creating a new state object or using a setState function such as:

```
this.setState((prevState) => {
  return { count: prevState.count + 1 };
});
```

Within the component, the element that relects the count variable will not be an accurate representation of the actual state.

### Q2.

If you imagine a company with many departments. Each department needs to share information with other departments. This can be done by each department passing messages to other departments. This can quickoy get out of control and lead to mistakes. A central point that provides information and allows departments to update the information in one place solves this problem. Redux is like this central information point.

## Starting the App

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

### Next Steps

- Make sure the types are correct
- Add tests
- Sort out AppContext and make sure I'm using that properly
- Missed the labels for the lines on the chart so I would add them
- Tidy up the useApp hook and the functions within it
- Make the components reusable
- Tidy up styles
