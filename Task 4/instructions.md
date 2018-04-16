# Task 4

## Skills to be assessed

* Ability to read and understand SQL queries
* Ability to write SQL queries
* Familiarity with SQL databases

### Challenge
Complete the following:

1. The query in the file [understand.sql](understand.sql) In your own word explain what the query does. The use of sql related terms is required.

2. Assume a schema of Emp ( Id, Name, DeptId ) , Dept ( Id, Name).

    If there are 10 records in the Emp table and 5 records in the Dept table, how many rows will be displayed in the result of the following SQL query:

    `Select * From Emp, Dept`

    Explain your answer.

3. Given a table SALARIES, such as the one below, that has m = male and f = female values. Swap all f and m values (i.e., change all f values to m and vice versa) with a single update query and no intermediate temp table.

    | Id  | Name | Sex | Salary |
    | --- | ---- | --- | ------ |
    | 1   | A    | m   | 2500   |
    | 2   | B    | f   | 1500   |
    | 3   | C    | m   | 5500   |
    | 4   | D    | f   | 500    |

4. Given these contents of the Customers table:

    | Id  | Name          | ReferredBy |
    | --- | ------------- | ---------- |
    | 1   | John Doe      | NULL       |
    | 2   | Jane Smith    | NULL       |
    | 3   | A nne Jenkins | 2          |
    | 4   | Eric Branford | NULL       |
    | 5   | Pat Richards  | 1          |
    | 6   | Alice Barnes  | 2          |

Here is a query written to return the list of customers not referred by Jane Smith:

SELECT Name FROM Customers WHERE ReferredBy <> 2;
What will be the result of the query? Why? What would be a better way to write it?

### NOTE: In the repo created in task (ONE). Create an sql folder containing results of this task

### Resources (that you may find helpful)

* [PostgreSQL Tutorial](http://www.postgresqltutorial.com/)
