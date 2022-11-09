"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyEntity = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
/**
 * This class represents the entity "MyEntity" of service "MyService".
 */
class MyEntity extends odata_v4_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.MyEntity = MyEntity;
/**
 * Technical entity name for MyEntity.
 */
MyEntity._entityName = 'MyEntity';
/**
 * Default url path for the according service.
 */
MyEntity._defaultServicePath = 'VALUE_IS_UNDEFINED';
/**
 * All key fields of the MyEntity entity
 */
MyEntity._keys = ['ID'];
//# sourceMappingURL=MyEntity.js.map