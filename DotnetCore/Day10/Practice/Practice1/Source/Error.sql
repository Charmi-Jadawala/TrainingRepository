SELECT * 
FROM Person.Person;

SELECT * 
FROM HumanResources.Employee;

select e.JobTitle,p.FirstName,p.LastName,p.BusinessEntityId from HumanResources.Employee e
 join Person.Person p on p.BusinessEntityID = e.BusinessEntityID

--item.BusinessEntityId} {item.FirstName} {item.LastName} {item.Employee.JobTitle

select e.JobTitle,p.FirstName,p.LastName,p.BusinessEntityId from Person.Person p 
 join HumanResources.Employee e on p.BusinessEntityID = e.BusinessEntityID

