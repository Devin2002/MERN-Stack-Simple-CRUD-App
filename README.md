<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MERN-Stack-Simple-CRUD-App</title>
  <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      margin: 0;
      padding: 0;
      background: #f9f9f9;
      color: #333;
      line-height: 1.6;
    }
    header {
      background: #24292e;
      color: #fff;
      padding: 20px;
      text-align: center;
    }
    header h1 {
      margin: 0;
      font-size: 2rem;
    }
    nav {
      margin-top: 10px;
    }
    nav a {
      color: #58a6ff;
      margin: 0 10px;
      text-decoration: none;
    }
    nav a:hover {
      text-decoration: underline;
    }
    main {
      max-width: 900px;
      margin: 20px auto;
      padding: 20px;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    h2 {
      border-bottom: 2px solid #eaeaea;
      padding-bottom: 5px;
      margin-top: 30px;
      color: #24292e;
    }
    code, pre {
      background: #f6f8fa;
      padding: 5px 8px;
      border-radius: 5px;
      font-size: 0.95rem;
    }
    pre {
      overflow-x: auto;
      padding: 15px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 15px 0;
    }
    table, th, td {
      border: 1px solid #ddd;
    }
    th, td {
      padding: 10px;
      text-align: left;
    }
    img {
      max-width: 100%;
      border-radius: 8px;
      margin: 10px 0;
    }
    footer {
      text-align: center;
      margin: 40px 0 20px;
      font-size: 0.9rem;
      color: #666;
    }
  </style>
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
    <img src="./screenshots/home.png" alt="App Home" />
    <img src="./screenshots/edit.png" alt="Edit Item" />

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
