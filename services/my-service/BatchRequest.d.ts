import { CreateRequestBuilder, DeleteRequestBuilder, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, ODataBatchRequestBuilder, UpdateRequestBuilder, BatchChangeSet } from '@sap-cloud-sdk/odata-v4';
import { MyEntity, Service } from './index';
/**
 * Batch builder for operations supported on the My Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export declare function batch<DeSerializersT extends DeSerializers>(...requests: Array<ReadMyServiceRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>>): ODataBatchRequestBuilder<DeSerializersT>;
export declare function batch<DeSerializersT extends DeSerializers>(requests: Array<ReadMyServiceRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>>): ODataBatchRequestBuilder<DeSerializersT>;
/**
 * Change set constructor consists of write operations supported on the My Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export declare function changeset<DeSerializersT extends DeSerializers>(...requests: Array<WriteMyServiceRequestBuilder<DeSerializersT>>): BatchChangeSet<DeSerializersT>;
export declare function changeset<DeSerializersT extends DeSerializers>(requests: Array<WriteMyServiceRequestBuilder<DeSerializersT>>): BatchChangeSet<DeSerializersT>;
export declare const defaultMyServicePath = "VALUE_IS_UNDEFINED";
export declare type ReadMyServiceRequestBuilder<DeSerializersT extends DeSerializers> = GetAllRequestBuilder<MyEntity<DeSerializersT>, DeSerializersT> | GetAllRequestBuilder<Service<DeSerializersT>, DeSerializersT> | GetByKeyRequestBuilder<MyEntity<DeSerializersT>, DeSerializersT> | GetByKeyRequestBuilder<Service<DeSerializersT>, DeSerializersT>;
export declare type WriteMyServiceRequestBuilder<DeSerializersT extends DeSerializers> = CreateRequestBuilder<MyEntity<DeSerializersT>, DeSerializersT> | UpdateRequestBuilder<MyEntity<DeSerializersT>, DeSerializersT> | DeleteRequestBuilder<MyEntity<DeSerializersT>, DeSerializersT> | CreateRequestBuilder<Service<DeSerializersT>, DeSerializersT> | UpdateRequestBuilder<Service<DeSerializersT>, DeSerializersT> | DeleteRequestBuilder<Service<DeSerializersT>, DeSerializersT>;
//# sourceMappingURL=BatchRequest.d.ts.map