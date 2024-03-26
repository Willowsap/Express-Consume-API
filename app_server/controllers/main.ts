import { NextFunction, Request, Response } from "express";
import request, { CoreOptions } from "request";

export default class MainCtrl {

    apiOptions = {
        server: "http://localhost:3000/api"
    }

    index = (req: Request, res: Response, next: NextFunction) => {
        const requestOptions: CoreOptions = {
            method: 'GET',
            json: {},
        }
        request(this.apiOptions.server, requestOptions,
            (error: any, response: request.Response, body: any) => {
                console.log(error);
                console.log(response);
                console.log(body);
                res.render('index', {gods: body});
            }
        )
    }
}