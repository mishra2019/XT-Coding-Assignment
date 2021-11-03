I have use Css and React for building this project.

First I created an react app by using the command :

### `npx create-react-app project_name`

Then in the navigation file i created an useState [notes,setNotes] to store and update the fetch data from api then  I created an container div in which I created two things first i call a Filter function component in which i write the function component Filter for filter section  and secondly i created a box2 for holding the rest of mission cards. In box2 i have use map method on notes in which fecth data is stored and call an Card function by passing the prop note in Card function . Inside Card function component i have display all the data for a particular mission. For filtering i have use onClick method inside each button and created three use state to hold the data namely [yearSelected,setYearSelected] for year button ,[launchSuccess,setLauchSuccess] for lauch button and 
[landingSuccess,setLandingSuccess] for landing button.And inside the omClick method i have set data of each of the above three state  and then call an handleClick function to fecth data on selected filter and then after fetching the data i have updated the setNotes with newly fetch data.And for changing the color of button on clicking i have use an javascript method inside the onclick method of every button name document.getElementsByClassName and chaging the color using css.

You have to just clone this repo and after cloning come the project directory and  in the terminal and write the command 

 ### `npm install -y`
 to install all the dependencies required to run this project.
 After that you can run the porject by writting the command
### `npm start`
in your terminal.

