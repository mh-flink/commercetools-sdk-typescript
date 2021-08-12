/**
 *
 *    Generated file, please do not change!!!
 *    From http://www.commercetools.com/ with love
 *
 *                ,d88b.d88b,
 *                88888888888
 *                `Y8888888Y'
 *                  `Y888Y'
 *                    `Y'
 *
 */
import { Store, StoreUpdate } from '../../models/store'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'

export class ByProjectKeyStoresKeyByKeyRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
        key: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public get(methodArgs?: {
    queryArgs?: {
      expand?: string | string[]
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<Store> {
    return new ApiRequest<Store>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate: '/{projectKey}/stores/key={key}',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
        queryParams: methodArgs?.queryArgs,
      },
      this.args.executeRequest
    )
  }
  public post(methodArgs: {
    queryArgs?: {
      expand?: string | string[]
      [key: string]: QueryParam
    }
    body: StoreUpdate
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<Store> {
    return new ApiRequest<Store>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/stores/key={key}',
        pathVariables: this.args.pathArgs,
        headers: {
          'Content-Type': 'application/json',
          ...methodArgs?.headers,
        },
        queryParams: methodArgs?.queryArgs,
        body: methodArgs?.body,
      },
      this.args.executeRequest
    )
  }
  public delete(methodArgs: {
    queryArgs: {
      version: number
      expand?: string | string[]
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<Store> {
    return new ApiRequest<Store>(
      {
        baseUri: this.args.baseUri,
        method: 'DELETE',
        uriTemplate: '/{projectKey}/stores/key={key}',
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
