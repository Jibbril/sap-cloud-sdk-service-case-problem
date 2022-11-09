"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myService = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const MyEntityApi_1 = require("./MyEntityApi");
const ServiceApi_1 = require("./ServiceApi");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const BatchRequest_1 = require("./BatchRequest");
function myService(deSerializers = odata_v4_1.defaultDeSerializers) {
    return new MyService((0, odata_v4_1.mergeDefaultDeSerializersWith)(deSerializers));
}
exports.myService = myService;
class MyService {
    constructor(deSerializers) {
        this.apis = {};
        this.deSerializers = deSerializers;
    }
    initApi(key, ctor) {
        if (!this.apis[key]) {
            this.apis[key] = new ctor(this.deSerializers);
        }
        return this.apis[key];
    }
    get myEntityApi() {
        return this.initApi('myEntityApi', MyEntityApi_1.MyEntityApi);
    }
    get serviceApi() {
        return this.initApi('serviceApi', ServiceApi_1.ServiceApi);
    }
    get batch() {
        return BatchRequest_1.batch;
    }
    get changeset() {
        return BatchRequest_1.changeset;
    }
}
//# sourceMappingURL=service.js.map