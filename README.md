# Image-resizer-app

The project aims to resize images which are selected from Google API using a frontend application and
interacts with a full decouple backend making use of AWS Services as demonstrated below:

The diagram below demonstrates how the application runs on AWS.

![Project Architecture](https://github.com/lbernardomaia/image-resizer-app/blob/master/project-architecture.png)

## Getting Started

The project is divided into two folders, the frontend, and the backend.

- The frontend folder contains the code for the frontend of the application
- The backend folder contains a package for each lambda function utilized.
- Each project has its own readme with further explanation.
- Each project should be deployed separately on AWS and have the right permissions applied to allow interaction. The frontend can be built and deployed on AWS Elastic Beanstalk for the sake of simplicity.
- The API Gateway calls the determined lambda functions based on the HTTP method.
- SNS is utilized to queue the resize requests and the Resizer function subscribes to the Queue to process the items queued.
- The S3 is responsible for storing the images resized.
