Installation Manual

The installation Manual require manual creation of .env files. Setting up would be seamless as it is a dockerized application.
Docker installation:
1. Clone the repo : [https://github.com/unsw-cse-comp99-3900-24t1/capstone-project-3900w09bscoutsregiment]
Via ssh: 

git clone git@github.com:unsw-cse-comp99-3900-24t1/capstone-project-3900w09bscoutsregiment.git

2. Navigate to the repo 

cd capstone-project-3900w09bscoutsregiment

3. Include the .env file for the frontend, navigate to the frontend directory, make a .env file, then fill it with the content provided below.

cd frontend
touch .env
// Fill file with appropriate content
cd ..

4. Include the .env file for the backend, navigate to the backend, make a .env file, and fill it with the content provided below

cd backend
touch .env
// fill file with appropriate content
cd ..

5. Build the docker container 

docker-compose up –build

6. Navigate to http://localhost:3000/ in your web browser and you can start using the app 😄. 

Note: It might take a few seconds for ANY page on the website to render. 

Note: if the development server crashes, just docker-compose up –build again, it is most likely caused by the remote free plan Mongodb database.


![image](https://github.com/user-attachments/assets/3373aa09-cf8d-4c45-baea-263c697d839a)
