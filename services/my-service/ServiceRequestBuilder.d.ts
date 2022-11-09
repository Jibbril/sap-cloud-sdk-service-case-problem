import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v4';
import { Service } from './Service';
/**
 * Request builder class for operations supported on the {@link Service} entity.
 */
export declare class ServiceRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<Service<T>, T> {
    /**
     * Returns a request builder for retrieving one `Service` entity based on its keys.
     * @param id Key property. See {@link Service.id}.
     * @returns A request builder for creating requests to retrieve one `Service` entity based on its keys.
     */
    getByKey(id: DeserializedType<T, 'Edm.Int32'>): GetByKeyRequestBuilder<Service<T>, T>;
    /**
     * Returns a request builder for querying all `Service` entities.
     * @returns A request builder for creating requests to retrieve all `Service` entities.
     */
    getAll(): GetAllRequestBuilder<Service<T>, T>;
    /**
     * Returns a request builder for creating a `Service` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Service`.
     */
    create(entity: Service<T>): CreateRequestBuilder<Service<T>, T>;
    /**
     * Returns a request builder for updating an entity of type `Service`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Service`.
     */
    update(entity: Service<T>): UpdateRequestBuilder<Service<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `Service`.
     * @param id Key property. See {@link Service.id}.
     * @returns A request builder for creating requests that delete an entity of type `Service`.
     */
    delete(id: number): DeleteRequestBuilder<Service<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `Service`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Service` by taking the entity as a parameter.
     */
    delete(entity: Service<T>): DeleteRequestBuilder<Service<T>, T>;
}
//# sourceMappingURL=ServiceRequestBuilder.d.ts.map