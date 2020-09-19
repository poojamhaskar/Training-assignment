-- Database: ORG

-- DROP DATABASE "ORG";

CREATE DATABASE "ORG"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;


-- Table: public.Worker

-- DROP TABLE public."Worker";

CREATE TABLE public."Worker"
(
    "worker_id" integer,
    "first_name" "char"(25),
    "last_name" "char"(25),
    "salary" integer,
    "joining_date" date,
    "department" "char"(25),
);

INSERT INTO public."Worker"(
	worker_id, first_name, last_name, salary, joining_date, department)
	VALUES (001, 'Monika', 'Arora', 100000, '2020-02-14', 'HR'),
           (002, 'Niharika', 'Verma', 80000, '2020-11-06', 'Admin'),
		   (003, 'Vishal', 'Singhal', 300000, '2020-12-02', 'HR'),
		   (004, 'Amitabh', 'Singh', 500000, '2020-11-02', 'Admin'),
		   (005, 'Vivek', 'Bhati', 500000, '2020-11-06', 'Admin'),
		   (006, 'Vipul', 'Diwan', 200000, '2020-11-06', 'Account'),
		   (007, 'Satish', 'Kumar', 75000, '2020-04-01', 'Account'),
		   (008, 'Geetika', 'Chauhan', 90000, '2020-11-04', 'Admin');



-- Table: public.Bonus

-- DROP TABLE public."Bonus";

CREATE TABLE public."Bonus"
(
    worker_ref_id integer,
    bonus_amount integer,
    bonus_date date
);

INSERT INTO public."Bonus"(
	worker_ref_id, bonus_amount, bonus_date)
	VALUES (001, 5000, '2016-02-20'),
		   (002, 3000, '2016-06-11'),
		   (003, 4000, '2016-02-20'),
		   (001, 4500, '2016-02-20'),
		   (002, 3500, '2016-06-11');

 -- Table: public.Title

-- DROP TABLE public."Title";

CREATE TABLE public"Title" 
(
	"worker_ref_id" integer,
	"worker_title" CHAR(25),
	"affevted_form" date,
	FOREIGN KEY (worker_ref_id)
		REFERENCES Worker(worker_id)
        ON DELETE CASCADE
);

INSERT INTO public."Title"
	("worker_ref_id", "worker_title", "affected_form") 
VALUES (001, 'Manager', '2016-02-20'),
       (002, 'Executive', '2016-06-11'),
       (008, 'Executive', '2016-06-11'),
       (005, 'Manager', '2016-06-11'),
       (004, 'Asst. Manager', '2016-06-11'),
       (007, 'Executive', '2016-06-11'),
       (006, 'Lead', '2016-06-11'),
       (003, 'Lead', '2016-06-11');

**********************************questions-answers***********************************

 Q-1.Write an SQL query to fetch “FIRST_NAME” from Worker table using the alias name as <WORKER_NAME>.
 ans. Select first_name AS Worker_Name from Worker;


 Q-2.Write an SQL query to fetch “FIRST_NAME” from Worker table in upper case.
 ans. Select upper(first_name) from Worker;


 Q-3.Write an SQL query to fetch unique values of DEPARTMENT from Worker table.
 ans.Select distinct department from Worker;


Q-4.Write an SQL query to print the first three characters of  FIRST_NAME from Worker table
ans. Select substring(first_name,1,3) from Worker;


Q-5.Write an SQL query to find the position of the alphabet (‘a’) in the first name column ‘Amitabh’ from Worker table.
ans. Select INSTR(first_name, BINARY'a') from Worker where first_name = 'Amitabh';


Q-6. Write an SQL query to print the FIRST_NAME from Worker table after removing white spaces from the right side.
ans. Select RTRIM(first_name) from Worker;


Q-7. Write an SQL query to print the DEPARTMENT from Worker table after removing white spaces from the left side.
ans. Select LTRIM(department) from Worker;


Q-8. Write an SQL query that fetches the unique values of DEPARTMENT from Worker table and prints its length.
ans. Select distinct length(department) from Worker;


Q-9. Write an SQL query to print the FIRST_NAME from Worker table after replacing ‘a’ with ‘A’.
ans. Select REPLACE(first_name,'a','A') from Worker;


Q-10. Write an SQL query to print the FIRST_NAME and LAST_NAME from Worker table into a single column COMPLETE_NAME. A space char should separate them.
ans. Select CONCAT(first_name, ' ', last_name) AS 'COMPLETE_NAME' from Worker;


Q-11. Write an SQL query to print all Worker details from the Worker table order by FIRST_NAME Ascending.
ans. Select * from Worker order by first_name asc;


Q-12. Write an SQL query to print all Worker details from the Worker table order by FIRST_NAME Ascending and DEPARTMENT Descending.
ans. Select * from Worker order by first_name asc,department desc;


Q-13. Write an SQL query to print details for Workers with the first name as “Vipul” and “Satish” from Worker table.
ans. Select * from Worker where first_name in ('Vipul','Satish');


Q-14. Write an SQL query to print details of workers excluding first names, “Vipul” and “Satish” from Worker table.
ans. Select * from Worker where first_name not in ('Vipul','Satish');


Q-15. Write an SQL query to print details of Workers with DEPARTMENT name as “Admin”.
ans. Select * from Worker where department like 'Admin%';

 
Q-16. Write an SQL query to print details of the Workers whose FIRST_NAME contains ‘a’.
ans. Select * from Worker where first_name like '%a%';


Q-17. Write an SQL query to print details of the Workers whose FIRST_NAME ends with ‘a’.
ans. Select * from Worker where first_name like '%a';


Q-18. Write an SQL query to print details of the Workers whose FIRST_NAME ends with ‘h’ and contains six alphabets.
ans. Select * from Worker where first_name like '_____h';


Q-19. Write an SQL query to print details of the Workers whose SALARY lies between 100000 and 500000.
ans. Select * from Worker where salary between 100000 and 500000;


Q-20. Write an SQL query to print details of the Workers who have joined in Feb’2014.
ans. Select * from Worker where year(joining_date) = 2014 and month(joining_date) = 2;


Q-21. Write an SQL query to fetch the count of employees working in the department ‘Admin’.
ans. SELECT COUNT(*) FROM worker WHERE department = 'Admin';


Q-22. Write an SQL query to fetch worker names with salaries >= 50000 and <= 100000.
ans. SELECT CONCAT(first_name, ' ', last_name) As Worker_Name, salary
     FROM Worker 
WHERE worker_id IN 
(SELECT worker_id FROM worker 
WHERE salary BETWEEN 50000 AND 100000);


Q-23. Write an SQL query to fetch the no. of workers for each department in the descending order.
ans. SELECT department, count(worker_id) No_Of_Workers 
FROM worker 
GROUP BY department
ORDER BY No_Of_Workers DESC;


Q-24. Write an SQL query to print details of the Workers who are also Managers.
ans. SELECT DISTINCT W.first_name, T.worker_title
FROM Worker W
INNER JOIN Title T
ON W.worker_id = T.worker_ref_id
AND T.worker_title in ('Manager');


Q-25. Write an SQL query to fetch duplicate records having matching data in some fields of a table.
ans. SELECT worker_title, affected_form, COUNT(*)
FROM Title
GROUP BY worker_title, affected_form
HAVING COUNT(*) > 1;


Q-26. Write an SQL query to show only odd rows from a table.
ans. SELECT * FROM Worker WHERE MOD (worker_id, 2) <> 0;


Q-27. Write an SQL query to show only even rows from a table.
ans. SELECT * FROM Worker WHERE MOD (worker_id, 2) = 0;


Q-28. Write an SQL query to clone a new table from another table.
ans.SELECT * INTO WorkerClone FROM Worker;


Q-29. Write an SQL query to fetch intersecting records of two tables.
ans.(SELECT * FROM Worker) INTERSECT (SELECT * FROM WorkerClone);
 

Q-30. Write an SQL query to show records from one table that another table does not have.
ans.SELECT * FROM Worker  
     MINUS
    SELECT * FROM Title;


Q-31. Write an SQL query to show the current date and time.
ans. SELECT now();


Q-32. Write an SQL query to show the top n (say 10) records of a table.
ans. SELECT TOP 10 * FROM Worker ORDER BY salary DESC;

Q-33. Write an SQL query to determine the nth (say n=5) highest salary from a table.
ans. SELECT TOP 1 salary
     FROM (
      SELECT DISTINCT TOP n salary
     FROM Worker 
     ORDER BY salary DESC
     )
     ORDER BY salary ASC;


Q-34. Write an SQL query to determine the 5th highest salary without using TOP or limit method.
ans. SELECT salary
     FROM Worker W1
     WHERE n-1 = (
    SELECT COUNT( DISTINCT ( W2.salary ) )
    FROM Worker
    WHERE W2.salary >= W1.salary
 );

 Q-35. Write an SQL query to fetch the list of employees with the same salary.
ans. Select distinct W.worker_id, W.first_name, W.salary 
     from Worker W, Worker W1 
    where W.salary = W1.salary 
    and W.worker_id != W1.worker_id;
 

Q-36. Write an SQL query to show the second highest salary from a table.
ans. Select max(salary) from Worker 
where salary not in (Select max(salary) from Worker);
 

Q-37. Write an SQL query to show one row twice in results from a table.
ans. select first_name, department from worker W where W.department='HR' 
union all 
select first_name, department from Worker W1 where W1.department='HR';
 

Q-38. Write an SQL query to fetch intersecting records of two tables.
ans. (SELECT * FROM Worker)
INTERSECT
(SELECT * FROM WorkerClone);


Q-39. Write an SQL query to fetch the first 50% records from a table.
Ans. SELECT *
FROM Worker
WHERE worker_id <= (SELECT count(worker_id)/2 from Worker);
 

Q-40. Write an SQL query to fetch the departments that have less than five people in it.
ans. SELECT department, COUNT(worker_id) as 'Number of Workers' 
FROM Worker GROUP BY department HAVING COUNT(worker_id) < 5;

Q-41. Write an SQL query to show all departments along with the number of people in there.
ans. SELECT department, COUNT(department) as 'Number of Workers' FROM Worker GROUP BY department;

Q-42. Write an SQL query to show the last record from a table.
ans. Select * from Worker where worker_id = (SELECT max(worker_id) from Worker);
 

Q-43. Write an SQL query to fetch the first row of a table.
ans. Select * from Worker where worker_id = (SELECT min(worker_id) from Worker);
 

Q-44. Write an SQL query to fetch the last five records from a table.
ans.  SELECT * FROM Worker WHERE worker_id <=5
UNION
SELECT * FROM (SELECT * FROM Worker W order by W.worker_id DESC) AS W1 WHERE W1.worker_id <=5;
 

Q-45. Write an SQL query to print the name of employees having the highest salary in each department.
Ans.SELECT t.department,t.first_name,t.salary from(SELECT max(Salary) as Totalsalary,department 
from Worker group by department) as TempNew 
Inner Join Worker t on TempNew.department=t.department 
 and TempNew.Totalsalary=t.salary;
 
Q-46. Write an SQL query to fetch three max salaries from a table.
ans. SELECT distinct Salary from worker a WHERE 3 >= (SELECT count(distinct salary) 
from worker b WHERE a.salary <= b.salary) order by a.salary desc;
 
Q-47. Write an SQL query to fetch three min salaries from a table.
ans. SELECT distinct salary from worker a WHERE 3 >= (SELECT count(distinct salary) 
from worker b WHERE a.salary >= b.salary) order by a.salary desc;
 

Q-48. Write an SQL query to fetch nth max salaries from a table.
ans. SELECT distinct salary from worker a WHERE n >= (SELECT count(distinct salary) 
from worker b WHERE a.salary <= b.salary) order by a.salary desc;
 
Q-49. Write an SQL query to fetch departments along with the total salaries paid for each of them.
ans. SELECT department, sum(Salary) from worker group by department;
 
Q-50. Write an SQL query to fetch the names of workers who earn the highest salary.
ans. SELECT first_name, salary from Worker WHERE salary=(SELECT max(salary) from Worker);




 



 








 






