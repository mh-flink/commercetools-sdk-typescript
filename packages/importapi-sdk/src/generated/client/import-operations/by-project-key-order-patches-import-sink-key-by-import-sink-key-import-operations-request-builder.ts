/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import { ProcessingState } from '../../models/common'
import { ImportOperationPagedResponse } from '../../models/importoperations'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
import { ByProjectKeyOrderPatchesImportSinkKeyByImportSinkKeyImportOperationsByIdRequestBuilder } from './by-project-key-order-patches-import-sink-key-by-import-sink-key-import-operations-by-id-request-builder'

export class ByProjectKeyOrderPatchesImportSinkKeyByImportSinkKeyImportOperationsRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
        importSinkKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public withIdValue(childPathArgs: {
    id: string
  }): ByProjectKeyOrderPatchesImportSinkKeyByImportSinkKeyImportOperationsByIdRequestBuilder {
    return new ByProjectKeyOrderPatchesImportSinkKeyByImportSinkKeyImportOperationsByIdRequestBuilder(
      {
        pathArgs: {
          ...this.args.pathArgs,
          ...childPathArgs,
        },
        executeRequest: this.args.executeRequest,
        baseUri: this.args.baseUri,
      }
    )
  }

  /**
   *	Retrieves all order-patches import operations of an import sink key.
   */
  public get(methodArgs?: {
    queryArgs?: {
      limit?: number
      offset?: number
      sort?: string | string[]
      resourceKey?: string
      state?: ProcessingState
      debug?: boolean
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<ImportOperationPagedResponse> {
    return new ApiRequest<ImportOperationPagedResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate:
          '/{projectKey}/order-patches/importSinkKey={importSinkKey}/import-operations',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
        queryParams: methodArgs?.queryArgs,
      },
      this.args.executeRequest
    )
  }
}
