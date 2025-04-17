import {AcquisitionsAPI} from "../endpoints/AcquisitionsAPI";
import {PostRequest, Send} from "@serenity-js/rest";
import {Task} from "@serenity-js/core";
import {SampleRequests} from "../models/SampleRequests";


export class PostData {

    static with = (payload: SampleRequests) =>
        Task.where(`#actor post data`,
            Send.a(PostRequest.to(AcquisitionsAPI.search()).with(payload))
            );
}