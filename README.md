# About

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Install and run 

## Step 1 : Install NodeJS and Yarn 

1. Download and install NodeJS v16.13.1
2. Run the command `npm install yarn` in your command line tool to install yarn


## Step 2 : Create a gitHub personnal access token

1. Navigate to githib.com
2. If it is not, verify your email address here https://docs.github.com/en/github/getting-started-with-github/verifying-your-email-address 
3. In the upper-right corner of any page, click your profile photo, then click Settings.
4. In the left sidebar, click  Developer settings.
5. In the left sidebar, click Personal access tokens.
6. Click Generate new token.
7. Give your token a descriptive name.
8. To give your token an expiration, select the Expiration drop-down menu, then click a default or use the calendar picker.
9. Select the scopes, or permissions, you'd like to grant this token. To use your token to access repositories from the command line, select repo.
10. Click Generate token.
11. Done

For additional information about creating a personal access token, please refer to this link : https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token


## Step 3 : Set your GitHub personnal access token in project env to get higher access limits rate to GitHub API

1. Open the .env file locateed at the root of the project
2. Replace "PERSONAL_ACCESS_TOKEN" by your actual/generated token


## Step 4 : Test the project

To launch the test runner, move to the project directory and run the command `yarn test` 


## Step 5 : Start the project

To start the application, move to the project directory and run the command `yarn start`


