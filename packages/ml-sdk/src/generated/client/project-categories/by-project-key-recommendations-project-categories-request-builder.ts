
/**
*
*    Generated file, please do not change!!!
*    From http://www.vrap.io/ with love
*
*                ,d88b.d88b,
*                88888888888
*                `Y8888888Y'
*                  `Y888Y'
*                    `Y'
*
*/
import { ByProjectKeyRecommendationsProjectCategoriesByProductidRequestBuilder } from 'client/project-categories/by-project-key-recommendations-project-categories-by-productid-request-builder'
import { QueryParam, executeRequest } from 'shared/utils/common-types'
import { ApiRequest } from 'shared/utils/requests-utils'

export class ByProjectKeyRecommendationsProjectCategoriesRequestBuilder {

    
      constructor(
        protected readonly args: {
          pathArgs: {
                projectKey: string
           },
          executeRequest: executeRequest,
          baseUri?: string
        }
      ) {}
    public withProductidValue(
       childPathArgs: {
           product_id: string
       }
    ): ByProjectKeyRecommendationsProjectCategoriesByProductidRequestBuilder {
       return new ByProjectKeyRecommendationsProjectCategoriesByProductidRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                   ...childPathArgs
                },
                executeRequest: this.args.executeRequest,
                baseUri: this.args.baseUri
             }
       )
    }
    

}
