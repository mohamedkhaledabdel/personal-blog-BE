import express from 'express';
import { Request, Response } from 'express'
import {PostModel} from '../../data/models/post'
import { mongoose } from '@typegoose/typegoose';
const app = express();
const port = 3000;

export default async function getOne(req: Request, res: Response) {
    return res.send("hamada")
}