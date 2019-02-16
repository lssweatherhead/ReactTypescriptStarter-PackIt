export interface IPotentialPlace {
    name: string;
    maxOccupancy: number;
}

export class PotentialPlace implements IPotentialPlace {

    constructor(
        public name: string,
        public maxOccupancy: number
    ) { }
}