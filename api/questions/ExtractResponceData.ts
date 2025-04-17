import {Question} from "@serenity-js/core";
import {LastResponse} from "@serenity-js/rest";
import {SampleResponse} from "../models/SampleResponse";

export class ExtractResponceData {


    static fileName = (): Question<Promise<string>> =>

      Question.about("", async actor => {
          const response = await LastResponse.body<SampleResponse>().answeredBy(actor);
          const uri = response.documentUris[0];
          return response.metadata[uri].coreMetadata.fileName;

});

}