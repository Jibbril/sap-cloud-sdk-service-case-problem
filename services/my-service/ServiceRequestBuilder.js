"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const Service_1 = require("./Service");
/**
 * Request builder class for operations supported on the {@link Service} entity.
 */
class ServiceRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `Service` entity based on its keys.
     * @param id Key property. See {@link Service.id}.
     * @returns A request builder for creating requests to retrieve one `Service` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, { ID: id });
    }
    /**
     * Returns a request builder for querying all `Service` entities.
     * @returns A request builder for creating requests to retrieve all `Service` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Service` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Service`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `Service`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Service`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof Service_1.Service ? idOrEntity : { ID: idOrEntity });
    }
}
exports.ServiceRequestBuilder = ServiceRequestBuilder;
//# sourceMappingURL=ServiceRequestBuilder.js.map