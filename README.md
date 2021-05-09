# Course project

This is my course work. It's basically a website with a nodeJs-based backend. I have used a variety of technologies and tools to write this work. I used some of them for the first time. For example GraphQl, Formik, SCSS. Certain conditions were put forward for the work. I will not list them.

## Installation
Use the ```git clone https://github.com/Andrew193/dbCoursework``` command to have a local copy of the repository and
then use the package manager [npm](https://www.npmjs.com/) to install dependencies. You are free to choose any other package manager if you do not have or you are not satisfied with npm. In this case, you will need to use the appropriate commands.

```bash
npm install
```

## Usage

MySql database is used for work. You can find it as an archive in the root of the project (db.rar). To use it, you need to make changes to ```server / script.js``` in the ```init``` object. Now run the 
```bash
npm start
```
command and go to [http://localhost:5000/](http://localhost:5000/) to the home page.

There are over 10 pages in total. There is support for dark theme and translation. The data is cached in LocalStorage, and due to this, some settings are saved across page, reloads and repeated visits to the site. There is a primitive admin panel. To enter the admin panel, according to the requirements of the project, you need to go to the address ```http: // localhost: 5000 / test / rest / props / masket / logAdmin``` and enter the password in the appropriate field. Password: ```sup21-admin65-mode96-acse34```. Admin can change and view some information

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)
