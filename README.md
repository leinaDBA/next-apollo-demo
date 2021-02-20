#next-apollo-demo

##Pre-requisites
 - Node 14
 - npm ^6

##Scripts
###Install
At the root run
```shell
npm i
```
This will automatically install all dependencies for root and Client and Server like so
```shell
npm i
# on postinstall the following commands are run
npm --prefix client install
npm --prefix server install
```
###Test
At the root run
```shell
npm test
```
This will run
```shell
npm --prefix client test
npm --prefix server test
```
###Start
At the root run
```shell
npm start
```
this will concurrently run
```shell
npm --prefix client run dev
# and
npm --prefix server run start
```
