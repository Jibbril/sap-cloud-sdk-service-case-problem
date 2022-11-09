"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
/**
 * This class represents the entity "Service" of service "MyService".
 */
class Service extends odata_v4_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.Service = Service;
/**
 * Technical entity name for Service.
 */
Service._entityName = 'Service';
/**
 * Default url path for the according service.
 */
Service._defaultServicePath = 'VALUE_IS_UNDEFINED';
/**
 * All key fields of the Service entity
 */
Service._keys = ['ID'];
//# sourceMappingURL=Service.js.map