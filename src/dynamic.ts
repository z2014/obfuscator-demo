import { clone } from './utils';
export class Dynamic {
    public name = 'Dynamic';
    private desc = 'this is Dynamic';

    public log() {
        this.output();
    }

    private output() {
        const test = {
            desc: this.desc,
        };
        const params = clone(test);
        console.log(params);
    }
}