# Issue summary
I am currently trying to upgrade from using the SAP Cloud SDK version 1.54.2 for javascript to version 2.10.0 and I am running into an issue. I'm looking to [generate an oData client](https://sap.github.io/cloud-sdk/docs/js/features/odata/generate-client), and everything works as intended in the v1 SDK. However, in v2 there is a file called "service.ts" generated automatically when creating the client which is not there in v1. This causes an issue for me since one of the entities in the service I am consuming is named "Service" (capital S). Thus there is both a "service.ts" and a "Service.ts" generated in the client folder, which causes the generator to crash.

## Instructions to reproduce error
Run the npm script `generate-client`. This will attempt to generate a client based on the edmx found in the service-definitions folder. This edmx is created using the service defined in the srv folder.
