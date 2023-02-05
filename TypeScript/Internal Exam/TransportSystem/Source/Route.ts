//RouteID Interface
export interface RouteID{
    routeID: number;
}


//Route Interface
export interface Route extends RouteID{
    routeName: string
}

//routeList of type Route
export var routeList: Route[] = [
    {
        routeID: 1,
        routeName: "Bopal-SouthBopal-Ghuma"
    },
    {
        routeID: 2,
        routeName: "Prahladnagar-Satellite-Shyamal"
    },
    {
        routeID: 3,
        routeName: "Navarangpura-GulbaiTekra-Nehrunagar"
    }
];


//RouteDetail Interface
export interface RouteDetail extends RouteID{
    busID: number;
    areaID: number;
}

