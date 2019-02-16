export interface IPotentialPlace {
    name: string;
}

export class PotentialPlace implements IPotentialPlace {

    constructor(
        public name: string
    ) { }
}