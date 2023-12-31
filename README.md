# spotify-poc-backend

This repository contains the proof of concept (POC) for the Spotify backend. It is built with Node.js and Express.js, and uses Swagger for API documentation.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installing

1. Clone the repository:

```
git clone https://github.com/SpotifyXTickets/spotify-poc-nodejs.git
```

2. Navigate into the cloned repository:

```
cd spotify-poc-backend
```

3. Install the dependencies:

```
npm install
```

4. Start the server:

```
npm start
```

## ESLint

In order to use ESLint run the following line:

```bash
npm run lint
```

In order to automatic fix issues while using ESLint run the following line:

```bash
npm run lint -- --fix
```

## Code Formatting

In order to use prettier run the following line:

```bash
npm run format
```

In order to check which files would be formatted without actually modifying them with prettier, run the following line:

```bash
npm run check-format

```

## API Documentation

The API documentation is available at the `/api-docs` endpoint, thanks to Swagger. You can view the documentation by starting the server and navigating to `http://localhost:8000/api-docs` in your web browser.

## Built With

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Swagger](https://swagger.io/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
