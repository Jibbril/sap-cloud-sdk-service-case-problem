import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v4';
import { MyEntity } from './MyEntity';
/**
 * Request builder class for operations supported on the {@link MyEntity} entity.
 */
export declare class MyEntityRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<MyEntity<T>, T> {
    /**
     * Returns a request builder for retrieving one `MyEntity` entity based on its keys.
     * @param id Key property. See {@link MyEntity.id}.
     * @returns A request builder for creating requests to retrieve one `MyEntity` entity based on its keys.
     */
    getByKey(id: DeserializedType<T, 'Edm.Int32'>): GetByKeyRequestBuilder<MyEntity<T>, T>;
    /**
     * Returns a request builder for querying all `MyEntity` entities.
     * @returns A request builder for creating requests to retrieve all `MyEntity` entities.
     */
    getAll(): GetAllRequestBuilder<MyEntity<T>, T>;
    /**
     * Returns a request builder for creating a `MyEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `MyEntity`.
     */
    create(entity: MyEntity<T>): CreateRequestBuilder<MyEntity<T>, T>;
    /**
     * Returns a request builder for updating an entity of type `MyEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `MyEntity`.
     */
    update(entity: MyEntity<T>): UpdateRequestBuilder<MyEntity<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `MyEntity`.
     * @param id Key property. See {@link MyEntity.id}.
     * @returns A request builder for creating requests that delete an entity of type `MyEntity`.
     */
    delete(id: number): DeleteRequestBuilder<MyEntity<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `MyEntity`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `MyEntity` by taking the entity as a parameter.
     */
    delete(entity: MyEntity<T>): DeleteRequestBuilder<MyEntity<T>, T>;
}
//# sourceMappingURL=MyEntityRequestBuilder.d.ts.map