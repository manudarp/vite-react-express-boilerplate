# Vite Svelte Express Boilerplate
> Boilerplate with Vite, Svelte and Express.js to easily create your web apps.

This boilerplate is a fork of [joeynguyen/vite-react-express-boilerplate](https://github.com/joeynguyen/vite-react-express-boilerplate), but replaces React with Svelte. Its structure also has been renovated.

This boilerplate contains all the tools you need to build a modern web app with JavaScript, Svelte, Vite, and Express.  
You can use it to quickly bootstrap your project.

## Installing / Developing

First, [create a repository from this template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template).

Now you are ready to go:

```shell
npm install
cd express-app
npm install
```

This will install the dependencies required to run the boilerplate and the express app (two different package-json).

```shell
npm run dev
```

Boom! These scripts run your server and client in development mode.

The default PORTS are:

- `3000` for the server
- `5713` for the client

If you don't like to call all scripts at once, you can also run:

```shell
npm run server:dev
npm run client:dev
```

<!-- You can configure the server port by setting the `PORT` environment variable. Creating a `.env` file is supported. You can copy `.env.example` to `.env`.

| KEY  | VALUE                                                         |
| ---- | ------------------------------------------------------------- |
| PORT | (Optional) Port for the server environment (defaults to 3001) |

-->

## Building

To build the project, run:

```shell
npm run build
```

This will build the client and server.

```shell
npm start
```

In production, you have a single server serving everything.

`/api/*` is the API endpoint.  
`/*` is the client.

## Tests

A test runner is not installed (right now).

## Licensing

GNU GPLv3
