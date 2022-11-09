/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreateRequestBuilder, DeleteRequestBuilder, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, ODataBatchRequestBuilder, UpdateRequestBuilder, BatchChangeSet } from '@sap-cloud-sdk/odata-v4';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import { MyEntity, Service } from './index';

/**
 * Batch builder for operations supported on the My Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(...requests: Array<ReadMyServiceRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>>): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(requests: Array<ReadMyServiceRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>>): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(first: undefined | ReadMyServiceRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT> | Array<ReadMyServiceRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>>, ...rest: Array<ReadMyServiceRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>>): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultMyServicePath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the My Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(...requests: Array<WriteMyServiceRequestBuilder<DeSerializersT>>): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(requests: Array<WriteMyServiceRequestBuilder<DeSerializersT>>): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(first: undefined | WriteMyServiceRequestBuilder<DeSerializersT> | Array<WriteMyServiceRequestBuilder<DeSerializersT>>, ...rest: Array<WriteMyServiceRequestBuilder<DeSerializersT>>): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultMyServicePath = 'VALUE_IS_UNDEFINED';
export type ReadMyServiceRequestBuilder<DeSerializersT extends DeSerializers> = GetAllRequestBuilder<MyEntity<DeSerializersT>, DeSerializersT> | GetAllRequestBuilder<Service<DeSerializersT>, DeSerializersT> | GetByKeyRequestBuilder<MyEntity<DeSerializersT>, DeSerializersT> | GetByKeyRequestBuilder<Service<DeSerializersT>, DeSerializersT>;
export type WriteMyServiceRequestBuilder<DeSerializersT extends DeSerializers> = CreateRequestBuilder<MyEntity<DeSerializersT>, DeSerializersT> | UpdateRequestBuilder<MyEntity<DeSerializersT>, DeSerializersT> | DeleteRequestBuilder<MyEntity<DeSerializersT>, DeSerializersT> | CreateRequestBuilder<Service<DeSerializersT>, DeSerializersT> | UpdateRequestBuilder<Service<DeSerializersT>, DeSerializersT> | DeleteRequestBuilder<Service<DeSerializersT>, DeSerializersT>;

