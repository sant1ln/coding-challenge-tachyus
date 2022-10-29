# Tachyus UX/UI Coding Challenge
The Tachyus UX/U Coding challenge provides Tachyus with the ability to test your knowledge, skills, and ability to take instruction when developing software. For this challenge, you will need to demonstrate the following.

1. An ability to develop a single-page application using [React](https://reactjs.org/).
2. Visualize the information provided by the Completion and Production CSV files.  
3. Provide the ability to search information associated with files.
4. Provide functionality to update a production file record and demonstrate the visualization change.



## Some helpful hints before you start
These are just helpful suggestions; you _do not have to use them_

1. For parsing the CSV file, you might want to use https://www.papaparse.com/
2. For controls, tables, and other UI elements, you could use https://www.telerik.com/kendo-react-ui
3. For visualization, you could use https://www.highcharts.com/
4. Use create react app and yarn


## SourceFiles
The files you will need to use are the completions and production files listed below. They are simple CSV files with defined relations.


### Completions
This file includes completion information for the demo field we would like to evaluate. 

#### Columns
|wellName|wellAPI|boreID|compSubId|Type|X|Y|TD|IsHorizontal|reservoir|faultBlock|compartment|maxBHP|long|lat|
|--------|-------|------|---------|----|-|-|--|------------|---------|----------|-----------|------|----|---|

#### Source
[https://github.com/Tachyus/coding-challenge/files/7695818/completions.csv](https://github.com/Tachyus/coding-challenge/files/7695818/completions.csv)


### Production
This file includes production information for the demo field we would like to evaluate. 

#### Columns
|year|month|wellAPI|boreID|completionGroupSubId|bhp|oil|water|gas|waterInj|compl|flowDays|pressure|status|
|----|-----|-------|------|--------------------|---|---|-----|---|--------|-----|--------|--------|------|


#### Source
[https://github.com/Tachyus/coding-challenge/files/7695821/production.csv](https://github.com/Tachyus/coding-challenge/files/7695821/production.csv)

### Relationships
These files are related to each other by the following column definitions.

|Completions Column|   |Production Column   |
|------------------|---|--------------------|
|wellAPI           | = |wellAPI             |
|boreID            | = |boreID              |
|compSubId         | = |completionGroupSubId|

# The Challenge
Please review the following steps and let us know if you have questions or need clarity.

You will need to initialize your project, get it ready to build, and ensure it can be run on localhost. 

## Step one - Display data from the file
You will load and display the information from the provided files for this step.

1. Load the [completions](https://github.com/Tachyus/coding-challenge/files/7695818/completions.csv) and the [production](https://github.com/Tachyus/coding-challenge/files/7695821/production.csv) files.

2. Using the files, you will display the information in two grids, one from the production file and one from the completion.

3. **(Bonus)** In addition to these columns, you could add a Gross column, oil + water.

## Step Two - Visualize data from the file
For this step, you will add a visualization for the data; this visualization should be displayed along with the grid. 

1. Using a graphing library, add a time series line graph showing oil, water, gas, and waterInj rate over time.

## Step Three - Searching the data in the files
For this step, you will provide the user with the ability to search the completion data grid for a specific wellName; the search should give the user the option to use partial names. 

*Example:* If the user types _PLMS_ in the search input, the page will filter to only show wells that start with _PLMS_.

1. Add a search input box to the page. 

2. The search functionality may be triggered by the user's typing or hitting a search button. It needs to do one but does not need to do both. 

3. The grid and visualization should filter only to show the data associated with the results from the search input.

## Step Four - Updating a wells name
For this step, you will allow the user to edit the name of one of the wells in the grid. 

1. Provide the user with the ability to select a well from the grid.

2. Once the user has selected a well, give them the option to change the name and save.

3. The name change should be reflected in the grid and the visualization. 

## Bonus - Add a map
This is a bonus since the completion date has lat and long; use a mapping library like google maps or Mapbox to show the location of the wells.

1. Display the well location markers on a map for the corresponding rows in the completions file. 

2. based on the well type, show a different marker icon or color. For example, producers can be green, and injectors can be red. 

3. Add a tooltip to the marker displaying the information about the well like wellName, Type, TD,...


# Submitting your work
Once you have completed as many steps as possible, please submit your work to a public GitHub or bitbucket account and share the link with Tachyus for review. 

Have fun, and don't get stressed. 
*Tachyus Engineering Team*

## Note
You don't have to complete all the steps in the given time.