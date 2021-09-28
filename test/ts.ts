class TestTs {
    private test: string;
    private longlonglonglonglonglonglongVar: string;

    constructor(props: {
        test: string;
    }) {
        this.test = props.test;
        this.longlonglonglonglonglonglongVar = props.test;
    }
    log() {
        // 给代码加点注释吧
        console.log(this.test + '111');
        console.log(this.longlonglonglonglonglonglongVar + '111');
    }
}
const testTs = new TestTs({
    test: 'test',
});
console.log('instance', testTs);