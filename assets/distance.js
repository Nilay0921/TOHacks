
export function distance(latitude_1,latitude_2,longitude_1,longitude_2)
    {
        longitude_1 =  longitude_1 * Math.PI / 180;
        longitude_2 = longitude_2 * Math.PI / 180;
        latitude_1 = latitude_1 * Math.PI / 180;
        latitude_2 = latitude_2 * Math.PI / 180;
   
        // Haversine formula
        let dlon = longitude_2 - longitude_1;
        let dlat = latitude_2 - latitude_1;
        let a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(latitude_1) * Math.cos(latitude_2) * Math.pow(Math.sin(dlon / 2),2);  
        let c = 2 * Math.asin(Math.sqrt(a));
        let r = 6371;
        
        let final = c * r;
        final = final.toFixed(2)
        return(final);
    }