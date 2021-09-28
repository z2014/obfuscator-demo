export class ModuleA {
    public name = 'ModuleA';
    private desc = 'this is ModuleA';

    public log() {
        this.output();
    }

    private output() {
        console.log(this.desc);
    }
}