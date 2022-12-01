#Video Streaming Platform 
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)	![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

##  👨‍💻   Alex Coelho 

### Application of a video streaming platform categorized by tags
### Node version used
```
v14.18.0
```
### Npm version used
```
6.14.15
```


## :beginner: get project and run locally
1️⃣. clone the project
 ```
 git clone https://github.com/alexcastelocoelho/Streaming-Videos-Api
 ```
2️⃣. install dependencies
 ```
 npm install
 ```
3️⃣. execute the project
 ```
 npm run dev
 ```
create an .env file and set the environment variables. use the .env.example file as a reference to set
 ```
    DB_NAME=
    PORT=

 ```

## endpoints aplication 
#####see below examples of how you should insert in the body of the postman to use the application endpoints
* user example
```
{
	
	"name": "douglas",
	"cpf": "284.385.767-88",
	"birthday": "16/09/1999",
	"email": "dougs@gmail.com",
	"password": "w6ysB8u9p"    
	
	
}
```

* endpoints user 🧑
 ```
 post -> ('/users/) - create user
 get -> ('/users/) - list users
 get -> ('/users/:id) - list a user
 put -> ('/users/:id) - update user
 delete -> ('/users/:id) - delete user
 ```

* tag example
```
{
	
	  "title_tag": "educação"	

}
```
 * endpoints tag 📝  
 ```
 post -> ('/videos/) - create tag
 get -> ('/videos/) - list tags
 get -> ('/:title_tag/videos) - list videos by tag
 put -> ('/tags/:id) - update tag
 delete -> ('/tags/:id) - delete tg
 ```

* video example
```
{
	"title": "aprenda a construir Api com node",
	"description": "inicie e crie seu primeiro projeto com Apis ",
	"author": "videoCurso",
	"genre": "programação",
	"keywords":["node", "api", "rest"],	
	"tag": { "_id":"6388a6a4da0e277d902a1c80" }
		
}
NOTE :the video tag attribute needs to be the tag id you created in the tag post
step by step:
- go to the tag post route and create a tag for a certain video category
- copy the id generated by that tag
- go to the video post route and create a video for that category you want to categorize. in the video tag attribute you paste the id generated by tag
```

 * endpoints video 🎥 
 ```
 post -> ('/videos/) - create video
 get -> ('/videos/) - list videos
 get -> ('/videos/:id) - list a video
 put -> ('/videos/:id) - update video
 delete -> ('/videos/:id) - delete video
 ```

 

 ### :scroll: to check the API documentation, follow the steps below:
* make sure the server is active in the terminal. if it is inactive, run `npm start` in terminal
* open a browser of your choice. in the search bar type `http://localhost:3333/api-docs`. after that you can check the api documentation