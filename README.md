<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
</head>
<body>
  <header>
    <h1>MERN-Stack-Simple-CRUD-App</h1>
    <nav>
      <a href="#about-the-project">About</a>
      <a href="#features">Features</a>
      <a href="#tech-stack">Tech Stack</a>
      <a href="#getting-started">Getting Started</a>
      <a href="#usage">Usage</a>
      <a href="#screenshots">Screenshots</a>
      <a href="#roadmap">Roadmap</a>
      <a href="#contributing">Contributing</a>
      <a href="#license">License</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <h2 id="about-the-project">About the Project</h2>
    <p>
      This MERN-Stack-Simple-CRUD-App demonstrates basic CRUD functionality using popular JavaScript technologies.
      It provides a foundation for learning, prototyping, or extending into real-world applications.
    </p>

  <h2 id="features">Features</h2>
    <ul>
      <li>RESTful API with full CRUD endpoints</li>
      <li>Frontend built in React for intuitive UI interactions</li>
      <li>Backend powered by Node.js and Express</li>
      <li>MongoDB for data persistence</li>
    </ul>

  <h2 id="tech-stack">Tech Stack</h2>
    <table>
      <tr><th>Layer</th><th>Technology</th></tr>
      <tr><td>Frontend</td><td>React</td></tr>
      <tr><td>Backend</td><td>Node.js, Express</td></tr>
      <tr><td>Database</td><td>MongoDB</td></tr>
      <tr><td>Optional</td><td>Mongoose</td></tr>
    </table>

  <h2 id="getting-started">Getting Started</h2>
    <h3>Prerequisites</h3>
    <ul>
      <li>Node.js (v14+)</li>
      <li>npm or yarn</li>
      <li>MongoDB (local or hosted)</li>
    </ul>

   <h3>Installation</h3>
<pre><code>git clone https://github.com/Devin2002/MERN-Stack-Simple-CRUD-App.git
cd MERN-Stack-Simple-CRUD-App
npm install
cd client
npm install
cd ..
</code></pre>

  <h3>Environment Variables</h3>
<pre><code>MONGO_URI=your_mongo_connection_string
PORT=5000
</code></pre>

  <h3>Running the App</h3>
<pre><code># Backend
npm run dev

# Frontend
cd client
npm start
</code></pre>

  <h2 id="usage">Usage</h2>
    <p>Once running:</p>
    <ol>
      <li>Visit <code>http://localhost:3000</code> for the frontend</li>
      <li>API runs at <code>http://localhost:5000</code></li>
    </ol>
<pre><code># GET all items
curl http://localhost:5000/api/items

# POST a new item
curl -X POST -H "Content-Type: application/json" -d '{"name":"New item"}' http://localhost:5000/api/items
</code></pre>

  <h2 id="screenshots">Screenshots</h2>
    <p>Add screenshots here:</p>
    <img src="Screenshots/Screenshot 2025-09-09 125748.png" alt="App Home"  />
    <img src="Screenshots/Screenshot 2025-09-09 125824.png" alt="AddUser" />
    <img src="Screenshots/Screenshot 2025-09-09 125906.png" alt="Edit User" />
    <img src="Screenshots/Screenshot 2025-09-09 130228.png" alt="Postman" />

  <h2 id="roadmap">Project Roadmap</h2>
    <ul>
      <li>User authentication (JWT)</li>
      <li>Validation and error handling</li>
      <li>Pagination and search filters</li>
      <li>Deployment support</li>
    </ul>

  <h2 id="contributing">Contributing</h2>
    <ol>
      <li>Fork the repository</li>
      <li>Create a feature branch (<code>git checkout -b feature-name</code>)</li>
      <li>Commit changes (<code>git commit -m "Add feature"</code>)</li>
      <li>Push to your branch (<code>git push origin feature-name</code>)</li>
      <li>Open a pull request</li>
    </ol>

  <h2 id="license">License</h2>
    <p>This project is licensed under the <strong>MIT License</strong>.</p>

  <h2 id="contact">Contact</h2>
    <p>
      Maintainer: Devin <br>
      GitHub: <a href="https://github.com/Devin2002">Devin2002</a>
    </p>
  </main>

  <footer>
    &copy; 2025 Devin. All Rights Reserved.
  </footer>
</body>
</html>
