export interface IPotentialPlace {
    id: number;
    name: string;
    description: string;
    image: string;
    maxOccupancy: number;
    location: string;
}

export class PotentialPlace implements IPotentialPlace {

    constructor(
        public id: number,
        public name: string,
        public description: string,
        public image: string,
        public maxOccupancy: number,
        public location: string
    ) { }
}