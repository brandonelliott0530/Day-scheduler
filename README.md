# Day Planner

This is an example of a day planner that uses local storage to store and display the information that the user puts into the hour inputs. The current hour of the work day is highlighted as yellow in color, drawing attention to the items for that hour. The hours that are still to come, will be displayed in a dark blue color. The "Primary" class in bootstrap. The hours that have passed, will be gray in color. Methods used in this project were bootstrap, Moment.js, a small amount of jquery, JavaScript, JSON, Setinteval, and many others.

## Requirements

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Usage

To use the planner, the user must simply input the task that they need to remember, and press the green SAVE button on the right hand side of each row. The user will then see the information that they entered into the planner whenever they come back to view the page. Past hours will display as gray, the current hour will display as yellow, and the future hours will display as a dark blue.

## Challenges

The greatest challenge for me was to get the local storage to work properly. I also was unable to use a loop or something to shorten the amount of code needed to change the properties of the input fields based on the hours. I believe if I could do this again, I would do some more research into the usage of jquery, and how to change properties based on what information the moment.js is giving.

## Screenshot

https://user-images.githubusercontent.com/103010726/169679717-0eb7a1d5-4ef3-417c-bcad-5f3cb9b3d4ff.png


## Github link

https://github.com/brandonelliott0530/day-scheduler

## Contact Me:
Email: brandonelliott0530@gmail.com 
Github: https://github.com/brandonelliott0530

