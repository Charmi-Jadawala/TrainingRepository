import { RouteID } from "./Route";


//Bus Interface
export interface Bus extends RouteID{
    busID: number;
    busName: string;
    driverName: string;
}

//busList of type Bus
export var busList: Bus[] = [
    {
        routeID: 1,
        busID: 1,
        busName: "Bopal",
        driverName: "Shyambhai"
    },
    {
        routeID: 2,
        busID: 2,
        busName: "Satellite",
        driverName: "Rambhai"
    },
    {
        routeID: 3,
        busID: 3,
        busName: "Navrangpura",
        driverName: "Mohanbhai"
    }
];



//PickupDrop Interface
export interface PickupDrop extends RouteID{
    areaID: number;
    areaName: string;
}

//pickupDropList of type PickupDrop
export var pickupDropList: PickupDrop[] = [
    {
        areaID: 1,
        routeID: 1,
        areaName: "Bopal"
    },
    {
        areaID: 2,
        routeID: 2,
        areaName: "Satellite"
    },
    {
        areaID: 3,
        routeID: 3,
        areaName: "Navrangpura"
    }
];