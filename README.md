# Test backend

This is a test CRUD project...  
IMPORTANT: Fork this project, because 0 merge request will be allowed on this project. 

## installing the backend   
To install the backend dependencies, run the 'npm run install' command in the root folder.   

## running the backend   
To install the backend dependencies, run the 'npm start' command in the root folder or 'npx directus start' in the backend folder.   
If there are any issues with database drivers, SQLite3 is used as the database...  
Look into installing it for your computer (Mac users, you already have this).    

## backend info   
The backend runs on port 8055.  (http://localhost:8055)        
It is a directus instance.  
Directus enables us to easely create a backend.  
The backend is already set up completely and should not be changed. 

API spec / Open API / Swagger:   http://localhost:8055/server/specs/oas    

## frontend   
Add the frontend of your liking in the frontend folder, and start coding.   


# Programming shop   
So the application itself is a small webshop that has some products, customers and orders.   

1. Build a dashboard to show either the products, customers or orders.    
2. Make on the dashboard all CRUD operations  (public access is granted so no need to login) 
3. In the details, get all relational data through the API.  
4. Store the countries in global state for the session of a user. Re-use the countries data for a user session.   
5. Create a login screen and login to directus..   Directus uses JWT access & refresh tokens 
to authenticate. 
