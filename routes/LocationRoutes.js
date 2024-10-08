import express from 'express';
import { getLatLong, getLatLongByID, createLatLong, deleteLatLongById } from '../controllers/LocationControllers.js'

const routes = express.Router();

routes.get("/getall", (req, res) => {
    getLatLong(req, res); 
});

//get latlong by id 
routes.get("/get/:id", (req, res) => {
    getLatLongByID(req, res)
})

//post latlong in  database

routes.post("/post", (req, res) => {
    createLatLong(req, res)
})

routes.delete("/delete/:id", (req, res) => {
    deleteLatLongById(req, res)
})



export default routes;

