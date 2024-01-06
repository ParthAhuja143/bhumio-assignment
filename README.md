# BHUMIO ASSIGNMENT

This is my official submission for the assignment.

Instructions to start the project are below.

## Clone repository

In order to start the project use:

```bash
$ git clone https://github.com/ParthAhuja143/bhumio-assignment.git
$ cd bhumio-assignment
```

## Docker

The app can be run through docker as well.

```
docker compose up
```

## Install dependencies

You'll need to download some node modules defined into `package.json` file.

```
npm install
```

## Run the app

```
npm start
```

Now open your postman here: [http://localhost:3000](http://localhost:3000)

You'll have available the following `RESTful` services:

```
POST http://localhost:3000/compare-pdf
```

Which accepts ```form-data``` with key ```pdfFiles```

Please note that you have to upload files of format ```.pdf``` having memory limit of ```5MB``` in the value for key ```pdfFiles```.

If you want to change the port, please update `index.ts` file.
