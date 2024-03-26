import { Request, Response, NextFunction } from "express";
import God from "../models/god.model";

export default class HadesController {

    getGods = (req: Request, res: Response, next: NextFunction) => {
        God.find()
            .then((gods) => {
                res.status(200).json(gods);
            })
            .catch((err) => {
                res.status(500).json({message: `error retrieving gods: ${err}`});
            })
    }

    getGod = (req: Request, res: Response, next: NextFunction) => {
        God.findOne({name: req.params["name"]})
            .then((god) => {
                if (!god) {
                    res.status(400).json({
                        message: `could not find god with name: ${req.params.name}`
                    })
                } else {
                    res.status(200).json(god);
                }
            })
            .catch((err) => {
                res.status(500).json({message: `error finding god: ${err}`})
            })
    }

    createGod = (req: Request, res: Response, next: NextFunction) => {
        const god = new God({
            name: req.body["name"],
            title: req.body["title"],
            boons: req.body["boons"],
        });
        god.save()
            .then((god) => {
                res.status(201).json(god);
            })
            .catch((err) => {
                res.status(500).json(`error creating god: ${err}`)
            })
    }

    updateGod = (req: Request, res: Response, next: NextFunction) => {
        God.findOneAndUpdate({name: req.params["name"]}, {
                name: req.body["name"],
                title: req.body["title"],
                boons: req.body["boons"]})
            .then((god) => {
                res.status(200).json(god);
            }).catch((err) => {
                res.status(500).json({message: `error updating god: ${err}`})
            });
    }

    deleteGod = (req: Request, res: Response, next: NextFunction) => {
        God.findOneAndDelete({name: req.params["name"]})
            .then(() => {
                res.status(200).json({message: `created god`});
            }).catch((err) => {
                res.status(500).json({message: `error updating god: ${err}`})
            });
    }
}