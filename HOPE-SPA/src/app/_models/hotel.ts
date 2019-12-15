import { HotelImages } from './hotelImages';

export interface Hotel {
    id: number;
    hotel: string;
    Cost: number;
    QuantityNight: number;
    TypeOfRooms: string;
    Nutrition: string;
    Information: string;
    ImageUrl1: string;
    hotelImages: HotelImages[];
    // ToursId: number;
}
