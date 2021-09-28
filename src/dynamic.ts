export class Dynamic {
    public name = 'Dynamic';
    private desc = 'this is Dynamic';

    public log() {
        this.output();
    }

    private output() {
        console.log(this.desc);
    }
}