
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Phanes India</title>
      <link rel="icon" type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%23000000%22></rect><path fill=%22%23fff%22 d=%22M18.37 34.61L18.37 34.61Q19.36 33.44 21.52 31.59Q23.68 29.75 24.94 29.75Q26.20 29.75 26.20 33.30Q26.20 36.86 24.31 40.28L24.31 40.28Q23.95 41.90 23.77 44.96L23.77 44.96Q26.38 37.85 28.99 34.25Q31.60 30.65 35.33 30.65Q39.06 30.65 41.86 34.02Q44.65 37.40 44.65 44.64Q44.65 51.89 40.55 57.47Q36.45 63.05 29.80 63.05L29.80 63.05Q26.38 63.05 22.87 60.53L22.87 60.53Q22.87 77.72 20.89 86.72L20.89 86.72Q20.71 87.53 18.50 89.46Q16.30 91.40 15.26 91.40Q14.23 91.40 13.78 89.96Q13.33 88.52 13.33 87.26L13.33 87.26Q13.33 77.99 17.11 63.41L17.11 63.41Q17.74 54.95 17.96 44.87Q18.19 34.79 18.37 34.61ZM30.34 59.81L30.34 59.81Q32.95 59.81 35.73 56.16Q38.53 52.52 38.53 47.16Q38.53 41.81 37.04 38.61Q35.56 35.42 33.04 35.42L33.04 35.42Q28.72 35.42 23.23 53.33L23.23 53.33Q23.05 55.85 23.05 57.29L23.05 57.29Q25.57 59.81 30.34 59.81ZM55.45 57.74L55.45 57.74L55.54 60.53Q55.54 63.05 54.09 63.05L54.09 63.05Q51.94 63.05 49.95 62.46Q47.98 61.88 47.98 60.84Q47.98 59.81 48.47 53.73Q48.97 47.66 48.97 44.60L48.97 44.60L48.97 39.38Q48.97 16.34 57.16 10.04L57.16 10.04Q59.05 8.60 61.02 8.60L61.02 8.60Q61.92 8.60 62.83 10.58Q63.73 12.56 63.73 15.71L63.73 15.71Q63.73 23.45 61.12 30.20Q58.51 36.95 55.80 40.55L55.80 40.55Q55.72 42.80 55.72 47.57L55.72 47.57Q56.08 47.03 59.50 41.45Q62.91 35.87 65.30 33.26Q67.69 30.65 69.58 30.65Q71.47 30.65 72.95 31.91Q74.44 33.17 74.44 35.06L74.44 35.06Q74.44 39.02 73.58 46.71Q72.72 54.41 72.72 56.43Q72.72 58.46 73.27 58.46L73.27 58.46Q74.80 58.37 77.50 54.63Q80.19 50.90 82.85 45.05Q85.50 39.20 86.09 39.20Q86.67 39.20 86.67 39.92L86.67 39.92Q86.67 42.44 84.06 47.93L84.06 47.93Q76.95 63.05 72.09 63.05L72.09 63.05Q68.59 63.05 66.78 61.61L66.78 61.61Q66.16 60.98 66.16 58.32Q66.16 55.67 66.65 49.68Q67.14 43.70 67.14 40.73Q67.14 37.76 66.11 37.76Q65.08 37.76 60.66 43.92Q56.26 50.09 55.98 51.80L55.98 51.80Q55.45 54.95 55.45 57.74ZM61.30 17.69L61.30 17.69Q61.30 13.91 60.30 13.91L60.30 13.91Q58.69 13.91 57.16 23.90L57.16 23.90Q56.34 29.21 55.98 36.23L55.98 36.23Q61.30 25.16 61.30 17.69Z%22></path></svg>" />
  </head>
  <link
      href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Meow+Script&family=Prata&family=Roboto:wght@100&display=swap"
      rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
  <style>
      /* CSS Reset */
      body {
          font-family: 'Roboto', sans-serif;
          color: black;
          margin: 0px;
          padding: 0px;
          background: url('img/bg.jpg');
      }
  
      .left {
          display: inline-block;
          /* border: 2px solid red; */
          position: absolute;
          left: 20px;
          top: 20px;
      }
  
      .left img {
          width: 120px;
          /* filter: invert(%); */
          border: 3px solid black;
          border-radius: 5px;
      }
  
      .left div {
          line-height: 15px;
          font-size: 20px;
          text-align: center;
      }
  
      .mid {
          display: inline block;
          width: 60%;
          margin: 29px auto;
  
          /* border: 2px solid green; */
      }
  
      .right {
          position: absolute;
          right: 20px;
          top: 20px;
          display: inline-block;
          /* border: 2px solid yellow; */
      }
  
      .navbar {
          display: inline-block;
      }
  
      .navbar li {
          display: inline-block;
          font-size: 20px;
      }
  
      .navbar li a {
          color: black;
          text-decoration: none;
          padding: 20px;
          font: bold;
  
      }
  
      .navbar li a:hover,
      .navbar li a.active {
          text-decoration: underline;
          color: rgb(236, 30, 30);
  
      }
  
      .btn {
          font-family: 'Roboto', sans-serif;
          margin: 0px 9px;
          background-color: black;
          color: white;
          padding: 4px 14px;
          border: 2px solid grey;
          border-radius: 10px;
          font-size: 20px;
          cursor: pointer;
      }
  
      .btn:hover {
          background-color: rgb(16, 245, 85);
      }
  
      .container {
          border: 2px solid white;
          margin: 120px 20px;
          padding: 10px;
          width: 30%;
          border-radius: 25px;
      }
  
      .form-group input {
          font-family: 'Roboto', sans-serif;
          text-align: center;
          display: block;
          width: 250px;
          padding: 1px;
          border: 2px solid black;
          margin: 11px auto;
          font-size: 20px;
          border-radius: 8px;
      }
  
      .container h1 {
          text-align: center;
      }
  
      .container button {
          display: block;
          width: 70%;
          margin: 20px auto;
          
      }
  
      body {
          background-image: url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
  
          background-repeat: no-repeat;
          /* width: fit-content; */
          background-size: cover;
          opacity: 0.9;
      }
  </style>
  
  <body>
      <header class="header">
          <!-- Left box for logo -->
          <div class="left">
              <img src="logo.jpeg" alt="">
  
          </div>
          <!-- Mid box for navbar -->
          <div class="mid">
              <ul class="navbar">
                  <li><a href="fpage1.html" class="active" target="blank">About </a></li>
                  <li><a href="#">Find Doctors</a></li>
                  <li><a href="#">Video Consult</a></li>
                  <li><a href="#">Lab Tests</a></li>
                  <li><a href="https://goo.gl/maps/94pYFDAPod6qVDddA" target="blank">Emergency </a></li>
                  <li><a href="https://youtu.be/rAj38E7vrS8" target="blank">Covid </a></li>
                
              </ul>
          </div>
  
          <!-- Right box for buttons -->
          <div class="right">
              <button class="btn">
                  <a href=”tel:+91-7355-528-418″>Call Us Now</a></button>
              <button class="btn">
                  <a href="mailto:shivammnnitian@gmail.com?subject = Feedback&body = Message" target="blank" >
                      Email
                  </a>
              </button>
          </div>
      </header>
      <div class="container">
          <h1>Enter Your Details here</h1>
          <form action="noaction.php">
              <div class="form-group">
                  <input type="text" name="" placeholder="Enter your Name">
              </div>
              <div class="form-group">
                  <input type="text" name="" placeholder="Enter your Age">
              </div>
              <div class="form-group">
                  <input type="text" name="" placeholder="Enter your Gender">
              </div>
              <div class="form-group">
                  <input type="text" name="" placeholder="Enter your Locality">
              </div>
              <div class="form-group">
                  <input type="text" name="" placeholder="Enter your Email Id">
              </div>
              <div class="form-group">
                  <input type="text" name="" placeholder="Enter your Phone Number">
              </div>
              <button class="btn">Submit</button>
          </form>
      </div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});