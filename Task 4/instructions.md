# Task 4

## Skills to be assessed

- Ability to read and understand SQL queries
- Ability to write SQL queries
- Familiarity with SQL databases

## Challenge

Please follow these instuctions carefully. The following task is expected to be written in PostgreSQL dialect (psql)

1. Create a file called `task4.sql`
2. In this file, you are expected add SQL instructions to do the following in this order:

    - Create a database called `test`
    - Create 2 tables called: `students`, and `results`
    - `students` should have the following fields and types:
        - `id` - integer
        - `firstname` - string
        - `lastname` - string
        - `dob` - date
    - `results` should have the following fields and types:
        - `id` - integer
        - `student_id` - integer
        - `chemistry` - string
        - `biology` - string
        - `physics` - string
    - Create insert scripts to populate `students` table with 3 sample records.
    - Create insert scripts to enter 2 records for each student from the student
    - Note that there is a one to many relationship between `students` and `results` tables