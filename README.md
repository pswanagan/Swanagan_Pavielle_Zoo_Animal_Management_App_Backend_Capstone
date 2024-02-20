# Zoo Management System

## Project Description

This project is a web-based Zoo Management System designed to manage and display information about animals and their keepers. It allows users to view detailed profiles of animals, including species, habitat, diet, and associated keepers. Additionally, it provides functionality to manage keeper information. The system is built using Node.js for the backend with Express for routing and MongoDB for data storage, ensuring a scalable and efficient platform.

## Technologies Used

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine for building fast and scalable network applications.
- **Express**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **MongoDB**: A NoSQL database designed for ease of development and scaling.
- **Mongoose**: An elegant MongoDB object modeling for Node.js, providing a straightforward, schema-based solution to model application data.
- **React**: A JavaScript library for building user interfaces, used here for creating the frontend components.

## Project Structure

- `server.js`: Entry point for the Node.js server, setting up Express and API routes.
- `db-connection.js`: Configures the MongoDB connection using Mongoose.
- `animalCtrl.js` and `keeperCtrl.js`: Controllers for handling business logic related to animals and keepers, respectively.
- `animals.js` and `keepers.js`: Routes definitions for animal and keeper-related endpoints.
- `Animals.js` and `Keepers.js`: React components for displaying animal and keeper data on the frontend.

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <project-directory>
   Install Dependencies
Github Link: https://github.com/pswanagan/Swanagan_Pavielle_Zoo_Animal_Management_App_Backend_Capstone
Usage
Viewing Animals: Navigate to /animals to view a list of all animals in the system. Click on an animal to see detailed information.
Managing Keepers: Access /keepers to view and manage keeper information.