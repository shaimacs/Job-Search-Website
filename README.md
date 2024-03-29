### A Job search Website
Job Search website allows the user to view jobs details, search for jobs based on city, job title and company name, also apply for jobs.
and allowing the admin to add new job, modify and delete jobs.

<br>

## Getting Started
To run this project on your local machine, fork and clone the repo from github. <br>
Install all dependencies by running `npm i` in the project directory terminal. <br>
Run `npm start` to start your frontend.<br>
<br><br>


### User Stories 
- As a user, I should be able to search for a job in my city. 
- As a user, I should be able to search by a job title.
- As a user, I should be able to search by a company name.
- As a user, I should be able to apply for a job. 
- As a user, I should be able to upload my resume.
- As a user, I should be able to share the job. 

### WireFrames
> WireFrame.
<img src = "Images/WireFrame1.jpeg" > 
<img src = "Images/WireFrame2.jpeg" height="600" width="600"> 
<img src = "Images/WireFrame3.jpeg" height="600" width="600"> 

### ER Diagram
> ER Diagram.
<img src = "Images/ERD.jpg"> 

### Use Case 
> Use Case.
<img src = "Images/usecase-p3.png" height="600" width="600">

# Use
Either download the project or [Use it online](https://job-search-wesbsite.herokuapp.com/)
<br><br><br>

### Technologies Used :
- HTML.
- CSS.
- js.
- React.
- Axios
- React-bootstrap.
- Rsuitejs
- React-icons
- NodeJs.
- Npm.
- Express.
- Mongoose.
- MongoDB.
<br>

## Run Requirement:

All application components are usable across modern desktop, tablet and phone browsers.
<br>

# Features
- [x] All components are functional, not class based and use arrowhead syntax
- [x] Search For Job by Job Title.
- [x] Search For Job by Cities.
- [x] Search For Job by Company Name.
- [x] Apply For a Job.
- [x] Upload The Resume.
- [x] Edit/Update The Job.
- [x] Add New Job.
- [x] Delete a Job.
- [x] View Job Details.
- [x] Share the Job.
<br><br><br>

## Searching 
type the title, city or company name of the Job in search bar
<br><br>


## My Jobs List
Press the `√` button to apply for the job.\
You can checkout the My Jobs List by clicking on My Jobs in the Navbar\
press `x` to remove it from your Jobs List.
<br><br>

## Job Details
Click on the job to see more info.
<br><br><br>




### RestAPI 

Number        | Action       |      URL    |   HTTP Verb 
------------- | -------------|-------------|-------------|         
1             | Index        | /jobs          |GET
2             | Index        |/company-logo   |GET
3             | Show         |/jobs-by-location|GET
4             | Show         |/jobs-by-job-title|GET
5             | Show         |/jobs-by-company|GET
6             | Create       |/add-user       |POST
7             | Create       |/add-job        |POST
8             | Create       |/add-company       |POST
9             | Update       |/update-job/:id |PUT
10             | Destroy      |/delete-job/:id |DELETE

### Future Features: 
- [ ] Use 3rd party API to Fetch real Data. 
- [x] Make sing-in. 
- [ ] Make sign-up.
- [ ] Get a Notifications to new Jobs in your Region. 

# Team Members:

[Faisal Alsagri](https://git.generalassemb.ly/faisalabdulaziz)\
[Dhuha Ahmad](https://git.generalassemb.ly/dhuhaahmad)\
[Ola Altalhi](https://git.generalassemb.ly/olaaltalhi)\
[Shaima Alshammary](https://git.generalassemb.ly/shaimacs)

# Special thanks:

Many many thanks to: JRJS\
[Mohammad Jouza](https://git.generalassemb.ly/MohammadJouza)\
[Raymond](https://git.generalassemb.ly/raymond)\
[Jaber alsalamah](https://git.generalassemb.ly/jaberalsalamah)\
[Sameh kinawy](https://git.generalassemb.ly/samehkinawy)


### Resourses 
- [Mongoosejs](https://mongoosejs.com/).
- [Stackoverflow](https://stackoverflow.com/).
- [React-bootstrap](https://react-bootstrap.netlify.app/).
- [Rsuitejs](https://rsuitejs.com/).
- [React-icons](https://react-icons.github.io/react-icons/).
