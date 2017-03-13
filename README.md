# hashurance-ng

Angular 2 App for the Hashurance project (Merkle Week Hackathon).

## Project setup

### Necessary Installs

```bash
$ npm install -g typescript @angular/cli
$ npm install -g ethereumjs-testrpc
$ npm install -g truffle
$ npm install
```

### How to run?

First, run `testrpc` in a terminal: 

```bash
$ testrpc
```

Then build and deploy the smartcontract to the ethereum node, you will see transactions going through the testrpc:

```bash
$ truffle compile
$ truffle migrate
```

After this you can build the application & run it using:

```bash
$ ng serve --open
```
