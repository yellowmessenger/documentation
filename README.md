# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


https://github.com/Jeffail/benthos/tree/master/website

### Build Algolia Index
1. Install Docker from this URL: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

2. Pull Docker Image of Algolia DocSearch Scraper
```
docker pull algolia/docsearch-scraper
```

3. Make sure `.env` and `.config` files are located at the root of the directory. `.env` contains application ID and API key of Algolia. It shouldn't be commited on the main github repository at any point of time due to security reasons. 

4. Run the docsearch scraper
```
docker run -it --env-file=.env -e "CONFIG=$(cat config.json | jq -r tostring)" algolia/docsearch-scraper
```