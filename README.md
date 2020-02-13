Description of the decisions made to accomplish the assignment:

As a user, I am interested in finding a list of breweries.
As a user, I would like to see that list of beers by name. 
As a user, I would like to search by city/town.
As a user, I would like to see information like type, name or something else.


Framework chosen: React.Js, Bootstrap & FontAwesome

Basically I have used react components to render data retrieved from api because I wanted to have the project structured in different files and not all in one file and react does help with this.

I have added a header where I  provided two links: one that renders a list of beers and the second that renders a list of beers available by location(here is the search by location).


In List of brewerys (Brewerys.js) component I have added 
the main api call to search by location. I used a function to call the the api and store it's result in state. After I check if the data is stored in the state, I display SearchBrewery component file (it's shown only when you are on 'By location' page . In the state I have restricted the api call, and by having less calls, I've managed to work with a limited api requests. The whole search by location is focused on US country.

Further, in the same file(Brewerys.js), I have mapped the state  and passed the data to it's child component(Brewery.js) where I have used a functional component to display only a few details such as, name, city, type, region.


 In the main file App.js, I have added the Header.js, Beers.js, Brewerys.js components and where I've used them and to render the page based on link selected in the Header. Here, I make a second call to the api, to ask only for a list of beers(no search included here). After the api response, data is stored in App.js state and the props are passed down it's child(Beers.js) where I display a list of names of beers.

To call the api, I've used axios.

Of course, I have added a little bit of css style to make it look like a website. 


.env file (with api key variable) needs to be added in the root project.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
