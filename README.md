This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start / npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Solving the challenge

libraries to use: 
redux react-redux since redux is required for the challenge
axios for the request (maybe it's an overkill but so I can handle the reponse and errors)
datefns for formatting the date

Project structure (draft)
Layout (hoc to wrap the components in the app component)
    Sidebar (container)
        SidebarList
            Post
    Details (container)
        PostDetail