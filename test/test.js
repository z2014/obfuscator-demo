class Test1 {
    constructor(props) {
        this.test = props.test;
        this.longlonglonglonglonglonglongVar = props.test;
    }
    log() {
        // 给代码加点注释吧
        console.log(this.test + '111');
        console.log(this.longlonglonglonglonglonglongVar + '111');
    }
}
const test = new Test1({
    test: 'test',
});
console.log('test', test);

// class Test{constructor(o){this.test=o.test,this.longlonglonglonglonglonglongVar=o.test}log(){console.log(this.test+"111"),console.log(this.longlonglonglonglonglonglongVar+"111")}}const test=new Test({test:"test"});console.log("test",test);