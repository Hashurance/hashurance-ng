# hashurance-ng

Angular App for Shaman2.0 hackathon project.

## Project setup

1. Necessary Installs

```
$ npm install -g typescript @angular/cli
$ npm install -g ethereumjs-testrpc
$ npm install -g truffle
$ npm install
```

2. How to run ?

First run test rpc in a terminal by 
```
$ testrpc
```

Then build and deploy the smartcontract to the ethereum node, you will see transactions going throw the testrpc
```
$ truffle compile
$ truffle migrate
```

After this you can build the application & run is via :
```
$ ng serve --open
```
