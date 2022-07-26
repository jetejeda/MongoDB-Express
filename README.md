# MongoDB-Express
CRUD API using MongoDB cloud, Express and ejs

dotenv was used to manage the connection string information and also the port

<h2>Environments:</h2>

In the project directory, you can run:

<li><strong>npm start</strong></li>

Runs the app in the production mode.
<br>
<br>
For development mode you can run:

<li><strong>npm run dev</strong></li>
<br>

<h2>Dependencies</h2>

<ul>
<li>body-parser => for post verbs</li>
<li>dotenv => to manage security of sensetive data (connection string, port)</li>
<li>ejs => as a view engine</li>
<li>express => server</li>
<li>mongoose => to interact with the MongoDB Cloud</li>
<li>morgan => logger for every HTTP request</li>
</ul>


<h2>Dev Dpendencies</h2>

<ul>
<li>nodemon => real time server updates</li>
</ul>


<h2> Usage</h2>
Open http://localhost:3000 to view it in your browser if you are not using dotenv.
<br>
<p>You can create a new task with it's title and description.

You can look every task that has been created and you can also change it's done status.

Finally you can also delete a task from the list.
</p>
