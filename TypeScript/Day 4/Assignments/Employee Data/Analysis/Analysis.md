--> Create an Employee array of objects (empData) of type as shown below:
    empData: { ID: number, 
    Name: string, 
    City: string, 
    DOJ: Date }[]

--> Print the entire Employee Array using console.log

--> In order to search the Employee with ID,
    -Create a variable searchId of type number which stores the ID to be searched.
    -Use forEach() to iterate over empData Array and if condition to match the IDs.
    -toDateString() date method to print the date in short.
    -Console.log the matched Employee

--> In order to search the Employees who have joined after year 2020,
    -Use forEach() to iterate over empData Array 
    -if condition to match the year.
    -getFullYear() date method to get the year of joining from the empData DOJ
    -toDateString() date method to print the date in short.
    -Console.log the matched Employees

--> In order to search the Employees who have joined after year 2020 and stays in Mumbai city,
    -Use forEach() to iterate over empData Array 
    -if condition to match the year and city using conditional AND.
    -getFullYear() date method to get the year of joining from the empData DOJ
    -toDateString() date method to print the date in short.
    -Console.log the matched Employees