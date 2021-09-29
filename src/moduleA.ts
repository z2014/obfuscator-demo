import { clone } from './utils';
export class ModuleA {
    public name = 'ModuleA';
    private desc = 'this is ModuleA';

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