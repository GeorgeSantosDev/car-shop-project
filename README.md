<h1>Car Shop</h1>

<p>
  Car Shop is a CRUD API built using NodeJS, Express, MongoDB, Mongoose and TypeScript. MSC architecture (Models, Services, 
  Controllers) was applied in this project.The purpose of this application is to pratice POO and BDD. It was developed writting
  first services test and then writting the route. 
  
  The project was developed in a docker environment.

  The user is able to: 
  -  register cars and motorcycles;
  -  find cars and motorcycles;
  -  update cars and motorcycles informations;
  -  delete cars and motorcycles;
 </p>

<h2> Built With </h2>

<div>
 <a href="https://nodejs.org/en/" rel="nofollow"> - NodeJS </a> </br></br>
 <a href="https://expressjs.com/pt-br/" rel="nofollow"> - Express </a> </br></br>
 <a href="https://www.mongodb.com/" rel="nofollow"> - MongoDB </a> </br></br>
 <a href="https://mongoosejs.com/" rel="nofollow"> - Mongoose </a> </br></br>
 <a href="https://www.docker.com/" rel="nofollow"> - Docker </a> </br></br>
 <a href="https://www.typescriptlang.org/" rel="nofollow"> - TypeScript </a> </br></br>
</div>

<h2>Endpoints</h2>

<h3> Cars: </h3>
<hr />

<h3> - GET  </h3>
 
<strong> /cars </strong>

<p> Get all cars </p>

<strong> Parameters: No parameters </strong> </br></br>

<strong> Response: </strong>

<p> Status: 200 </p>
<img src="./images/allCars.png"/>

<br/>
<br/>

<strong> /cars/:id </strong>

<p> Get car by id </p>

<strong> Parameters: No parameters </strong> </br></br>

<strong> Response: </strong>

<p> Status: 200 </p>
<img src="./images/carById.png"/>

<p> Status: 404 </p>
<p> - { message: "Car not found" } </p>

<p> Status: 422 </p>
<p> - { message: "Invalid mongo id" } </p>

<br/>
<br/>

<h3> - POST  </h3>

<strong> /cars </strong>

<p> Register a new car </p>

<strong> Parameters:</strong>
<p> -body <p/>
<img src="./images/registerCarBody.png" />

<strong> Response: </strong>

<p> Status: 201 </p>
<img src="./images/registeredCar.png"/>

<br/>
<br/>

<h3> - PUT  </h3>
 
<strong> /cars/:id </strong>

<p> Update a car </p>

<strong> Parameters:</strong>
<p> -body </p>
<img src="./images/registerCarBody.png" />

<strong> Response: </strong>

<p> Status: 200 </p>
<img src="./images/registeredCar.png"/>

<p> Status: 404 </p>
<p> - { message: "Car not found" } </p>

<p> Status: 422 </p>
<p> - { message: "Invalid mongo id" } </p>

<br/>
<br/>

<h3> - DELETE  </h3>
 
<strong> /cars/:id </strong>

<p> Delete a car </p>

<strong> Parameters: No parameters </strong> </br></br>

<strong> Response: </strong>

<p> Status: 204 </p>
<p> No return</p>

<p> Status: 404 </p>
<p> - { message: "Car not found" } </p>

<p> Status: 422 </p>
<p> - { message: "Invalid mongo id" } </p>

<br/>
<br/>
<br/>

<h3> Motorcycles: </h3>
<hr />

<h3> - GET  </h3>
 
<strong> /motorcycles </strong>

<p> Get all motorcycles </p>

<strong> Parameters: No parameters </strong> </br></br>

<strong> Response: </strong>

<p> Status: 200 </p>
<img src="./images/allMotorcycles.png"/>

<br/>
<br/>

<strong> /motorcycles/:id </strong>

<p> Get motorcycles by id </p>

<strong> Parameters: No parameters </strong> </br></br>

<strong> Response: </strong>

<p> Status: 200 </p>
<img src="./images/motorcyclesById.png"/>

<p> Status: 404 </p>
<p> - { message: "Motorcycles not found" } </p>

<p> Status: 422 </p>
<p> - { message: "Invalid mongo id" } </p>

<br/>
<br/>

<h3> - POST  </h3>

<strong> /motorcycles </strong>

<p> Register a new motorcycle </p>

<strong> Parameters:</strong>
<p> -body <p/>
<img src="./images/registerMotorcycleBody.png" />

<strong> Response: </strong>

<p> Status: 201 </p>
<img src="./images/motorcyclesById.png"/>

<br/>
<br/>

<h3> - PUT  </h3>
 
<strong> /motorcycles/:id </strong>

<p> Update a motorcycle </p>

<strong> Parameters:</strong>
<p> -body </p>
<img src="./images/registerMotorcycleBody.png" />

<strong> Response: </strong>

<p> Status: 200 </p>
<img src="./images/motorcyclesById.png"/>

<p> Status: 404 </p>
<p> - { message: "Motorcycles not found" } </p>

<p> Status: 422 </p>
<p> - { message: "Invalid mongo id" } </p>

<br/>
<br/>

<h3> - DELETE  </h3>
 
<strong> /motorcycle/:id </strong>

<p> Delete a motorcycle </p>

<strong> Parameters: No parameters </strong> </br></br>

<strong> Response: </strong>

<p> Status: 204 </p>
<p> No return</p>

<p> Status: 404 </p>
<p> - { message: "Motorcycles not found" } </p>

<p> Status: 422 </p>
<p> - { message: "Invalid mongo id" } </p>

<br/>
<br/>
<br/>

<h2>
  How try the application?
</h2>

<p>
  Using docker (version 1.29 > is required): </br></br>
   1. First run in your terminal <code>docker-compose up -d</code> to up containers. </br>
   2. Then use the command <code>docker exec -it car_shop bash</code> to acess the container terminal. </br>
   3. After it use  <code>npm install</code> to install all dependences. </br>
   4. Run <code>npm run dev</code> on container terminal to start the application.</br>
   5. If you don´t have any client extension to do the requestions download <code>Thunder Client</code> extension on VS Code.</br>
   6. Select the method on thunder client.</br>
   7. Do requisitions on thunder client using the URL shape http://localhost:3001/endpoint.
</p>

<p>
  Make sure that all containers are up and the ports 3001 and 27017 of your computer are available
</p>

<br />
<br />

<h2>
  How to run tests?
</h2>

<p>
   1. First run <code>npm install</code> to install all dependences. </br>
   2. Run <code>npm run test:mocha</code> in your terminal to run all tests.</br>
</p>

<br />
<br />
<br /> 

<p> Any questions or suggestions? Contact me </p>

<a href="https://www.linkedin.com/in/george-santos-dev" rel="nofollow">
  <img
    height="50px"
    width="50px"
    src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/linkedin/linkedin-original.svg"
    alt="LinkedIn"
  />   
</a>
