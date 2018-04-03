## To Run locally:
### Start the development server
#### From Visual Studio Code
- Press F5 or click Tasks -> Run Task -> startServer
#### From the terminal
```
npm start
```
### Browse to
- http://localhost

## To run Angular web app in Docker container
- Go to the docker-compose file and comment/uncomment the appropriate code.
```
docker build --rm -f Dockerfile -t angular-docker:latest .

docker run --rm -d -p 443:443 -p 80:80 angular-docker:latest
```

## To run Angular web app and .NET Web API
- Go to the docker-compose file and comment/uncomment the appropriate code.
- Make sure the simple-web-api image is built
```
docker-compose up -d --build
```