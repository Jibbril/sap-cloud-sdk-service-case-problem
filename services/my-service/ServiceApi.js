"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Service_1 = require("./Service");
const ServiceRequestBuilder_1 = require("./ServiceRequestBuilder");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ServiceApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = Service_1.Service;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new ServiceRequestBuilder_1.ServiceRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(Service_1.Service, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
             * Static representation of the {@link id} property for query construction.
             * Use to reference this property in query operations such as 'select' in the fluent request API.
             */
                ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.Int32', false),
                /**
                 * Static representation of the {@link name} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v4_1.AllFields('*', Service_1.Service)
            };
        }
        return this._schema;
    }
}
exports.ServiceApi = ServiceApi;
//# sourceMappingURL=ServiceApi.js.map