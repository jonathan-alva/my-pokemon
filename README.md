Hello! My name is **Jonathan Alva** and this is my simple project using React JS and [Pokemon API](https://pokeapi.co/).
I'm new using React JS, I belive there are many mistake that I made in this Project. I think this is not a best practice to follow.

This Project Live at http://exzone97.github.io/my-pokemon

## How To Install

You need follow some step to running the project in your local.

### `Make sure you have instal NPM, Node.js and Local Web Server`

Node version : **v12.14.0**<br />
NPM version : **6.13.4**<br />
PHP version : **7.4.2**<br />

### `Clone the project`

You can clone the project anywhere in your computer.<br />
`git clone https://github.com/exzone97/my-pokemon.git`

### `Install NPM dependencies`

After clone you need to install all dependencies using `npm install`

### `Clone the PHP API that i use for this project`

You can clone the API to your `htdocs` folder. <br />
`git clone https://github.com/exzone97/my-pokemon-api.git`

### `Change some file configuration`

Open file `src -> service -> Config.js`. <br />
Change the root path to `my-pokemon-api`. (ex 'localhost/my-pokemon-api'). <br />

### `Create Database to save your data`

Create database in your local. <br/>

### `Change connection configuration API`

Go to your API directory (ex. `htdocs->my-pokemon-api`). <br/>
Open file name `conn.php`. <br />
Change the database configuration on line `7`. <br />
$conn = new mysqli('localhost', '<user>', '<password>', '<db name>');
  
### `I have create the file that contain a Dummy Data for this project`

In this directory there is a file called `schema.js`. <br/>
You need to change some configuration in this file line host, user, password, and database. <br/>
To run this file use command `node schema.js` in your directory of this project. The file will create table and insert some record.<br/>

### `Run Project`

To run this project, make sure you have follow all instruction above. If an error occurs please contact me via email. <br/>
Run the project using `npm start`. <br/>
This project will running in port 3000. <br/>


If you have question about this project or the live project get error please let me know. <br/>
Email : jonathan.alva97@yahoo.co.id
