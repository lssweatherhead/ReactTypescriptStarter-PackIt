export interface IPackLocation {
    name: string;
}

export class PackLocation implements IPackLocation {

    constructor(
        public name: string
    ) { }

    static create(name: string): IPackLocation {
        return new PackLocation(
            name
        );
    }
}