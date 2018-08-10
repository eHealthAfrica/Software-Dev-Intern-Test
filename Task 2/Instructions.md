# Task 2

### Skills to be assessed:
- Ability to code in Javascript
- Ability to understand the problem definition
- Approach to problem solving
- Ability to implement clean and readable code
- Ability to work with REST APIs
- Ability to use a dependency manager

### Challenge
eHealth Africa has different teams implementing projects across Africa and one of the challenges is keeping track of timezones across these countries that we have teams in. For anyone in the organization who is interested in knowing what the timezones of different African countries are, we want to implement a map based solution where all the countries in Africa are represented on the map and they are shaded/colored based on the timezones. This will enable the viewer, see all the countries that share the same timezone and know when to reach out accordingly to the team members working in those countries.

### Additional Instructions
1. The API at [REST COUNTRIES](https://restcountries.eu/) should be used to fetch the list countries in the Africa continent.

    a. Information regarding the timezones and coordinates of the country can be gotten from the response gotten from the [REST COUNTRIES](https://restcountries.eu/) endpoints.

2. The list of countries in Africa should also be represented on a HTML table with the following fields as columns: name, capital, population, timezones and flag (image).

    a. On table, countries that have timezone that are +1/-1 from the current user's timezone should have a row background color of green indicating that teams in that countries are in a closer timezone than the rest.

3. If a country has more than one timezone, feel free to use any of the timezones as default.


### Resources (that you may find helpful)
- Leaflet 1.3.1 [Documentation](http://leafletjs.com/reference-1.3.0.html)
