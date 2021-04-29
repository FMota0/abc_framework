# ABC Framework

An university project.

ABC Framework is an application to store research programs and organize it based on a group of strategies, this division of strategies allow the user to understand the research results in terms of degree of obtrusiveness in terms of the research setting and the generalizability of the results. For more details refer to the following [paper](https://link.springer.com/chapter/10.1007/978-3-030-32489-6_2).


## Deploy
![Api Deploy](https://github.com/fmota0/abc_framework/workflows/Api%20Deploy/badge.svg)
![Client Deploy](https://github.com/fmota0/abc_framework/workflows/Client%20Deploy/badge.svg)

### Api deploy instructions

The api is located in [api](api/):

`$ cd api`

To deploy the api is required to set the following environment variables:
 - MONGO_URL, which is an url for a mongodb database. 
 - GOOGLE_ID, which is a token to allow google oauth.
 - GOOGLE_AUDIENCE, which is a token to define google oauth audience.

To start the application run the following command:

`$ yarn start`

Alternatively, it's possible to use the github action for deploy in heroku [api_deploy](.github/workflows/api_deploy.yml).

This alternative requires to set the following secrets in the repository: HEROKU_API_KEY, MONGO_URL, GOOGLE_ID and GOOGLE_AUDIENCE.

### Client deploy instructions

The client is located in [client](client) and can be deployed as any react application. To deploy using [github actions workflow](.github/workflows/client_deploy.yml) it's necessary to add the following secrets to the repository: SURGE_LOGIN and SURGE_TOKEN. Also it's necessary to change the domain.