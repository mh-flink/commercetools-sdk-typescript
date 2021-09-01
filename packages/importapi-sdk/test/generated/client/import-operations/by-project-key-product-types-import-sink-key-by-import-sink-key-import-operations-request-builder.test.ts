/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { RequestWithMethod } from '../../../request-with-method'
import { ApiRoot } from '../../../../src'

const apiRoot: ApiRoot = new ApiRoot({ executeRequest: null })

export function getRequestsWithMethodParameters(): RequestWithMethod[] {
  return [
    {
      method: 'get',
      uri: '/test_projectKey/product-types/importSinkKey=test_importSinkKey/import-operations?limit=0.26748633',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .productTypes()
        .importSinkKeyWithImportSinkKeyValue({
          importSinkKey: 'test_importSinkKey',
        })
        .importOperations()
        .get({ queryArgs: { limit: 0.26748633 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-types/importSinkKey=test_importSinkKey/import-operations?offset=0.7475848',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .productTypes()
        .importSinkKeyWithImportSinkKeyValue({
          importSinkKey: 'test_importSinkKey',
        })
        .importOperations()
        .get({ queryArgs: { offset: 0.7475848 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-types/importSinkKey=test_importSinkKey/import-operations?sort=sort',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .productTypes()
        .importSinkKeyWithImportSinkKeyValue({
          importSinkKey: 'test_importSinkKey',
        })
        .importOperations()
        .get({ queryArgs: { sort: 'sort' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-types/importSinkKey=test_importSinkKey/import-operations?resourceKey=resourceKey',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .productTypes()
        .importSinkKeyWithImportSinkKeyValue({
          importSinkKey: 'test_importSinkKey',
        })
        .importOperations()
        .get({ queryArgs: { resourceKey: 'resourceKey' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-types/importSinkKey=test_importSinkKey/import-operations?state=ValidationFailed',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .productTypes()
        .importSinkKeyWithImportSinkKeyValue({
          importSinkKey: 'test_importSinkKey',
        })
        .importOperations()
        .get({ queryArgs: { state: 'ValidationFailed' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-types/importSinkKey=test_importSinkKey/import-operations?debug=true',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .productTypes()
        .importSinkKeyWithImportSinkKeyValue({
          importSinkKey: 'test_importSinkKey',
        })
        .importOperations()
        .get({ queryArgs: { debug: true } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-types/importSinkKey=test_importSinkKey/import-operations',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .productTypes()
        .importSinkKeyWithImportSinkKeyValue({
          importSinkKey: 'test_importSinkKey',
        })
        .importOperations()
        .get(),
    },
  ]
}

describe('Testing ByProjectKeyProductTypesImportSinkKeyByImportSinkKeyImportOperationsRequestBuilder Requests', () => {
  const requestsToTest = getRequestsWithMethodParameters()
  requestsToTest.forEach((rm) => {
    test(`Testing => request method: ${rm.method} and url: ${rm.uri}`, async () => {
      expect(rm.method.toLowerCase()).toBe(
        rm.request.clientRequest().method.toLowerCase()
      )
      expect(rm.uri.toLowerCase()).toBe(
        rm.request.clientRequest().uri.toLowerCase()
      )
    })
  })
})
