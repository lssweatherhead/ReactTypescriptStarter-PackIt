export interface IPackLocation {
    name: string;
}

export class PackLocation implements IPackLocation {

    constructor(
        public name: string
    ) { }
}