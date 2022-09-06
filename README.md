# My Portfolio Site
I decided to rewrite my portfolio site [WIP]

## ToDo

1. Create `layout.ejs` and `index.ejs` for initial page (maybe make partials/components folder in views for further seperation)
2. Configure routes (Make a `visitor.mjs` and an `admin.mjs`)
3. Convert api.mjs into a folder and create another visitor api and admin api mjs files (Maybe, unsure on how to seperate that)
4. Start working on the pages the user will see (`/`, `/projects`, etc) and the middleware
5. Start working on API and the controllers
6. Configure tor website around now

## Random stuff

* Routes/controllers/services
```js
export const controllerFunc = (req, res) => {
	databaseService.add(req.body.id, req.body.something)
}
export const apiAControllerFunc = (req, res) => {
	oauthservice.auth(req.headers),
		return ...
}

// Essentially, routes will contain nothing other than
router.get("/DBAddEndpoint", controllers.database.add);

// the services will do the heavily lifting. they use the database library and interface with it. controllers just passes the data required, and routers will specify the endpoint

```

## Ideas

* If i want a blog, maybe i can store images in github and add files through github's api to something like `siteimagerepo`. Probably dont use a folder in this repo/l because it will go against replit's storage.
* Even better idea, store all blogs and their resources in a github repo, then fetch that and display it. i can write blogs through replit or make my own interface on the site.
* Blogs may be stored in a db as well (such as a json one with lowdb) though this makes images much harder
* Convert all images to webp before storing them, much better for websites

## Random
```js
import { lightfetch as fetch } from  'lightfetch-node';

const TOKEN = process.env.GITHUB_TOKEN || "FAKETOKEN";

fetch("https://api.github.com/repos/EpicGamer007/images-storage/contents/README.md", {
	method: "GET",
	headers: {
		"Authorization": `token ${TOKEN}`,
		"User-Agent": "EpicGamer007"
	}
}).then(res => {
	console.log(res.status);
	console.log(res.json());
});
```