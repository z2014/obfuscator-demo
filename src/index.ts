import { ModuleA } from './ModuleA';
import type { Dynamic } from './dynamic';

class Module {
    private test: string;
    private longlonglonglonglonglonglongVar: string;
    public moduleA: ModuleA;
    public dynamic: Dynamic;

    constructor(props: {
        test: string;
    }) {
        this.test = props.test;
        this.longlonglonglonglonglonglongVar = props.test;
        this.moduleA = new ModuleA();
    }

    async init() {
        await this.initDynamic();
        console.log('init done');
    }

    log() {
        // 给代码加点注释吧
        console.log(this.test + '111');
        console.log(this.longlonglonglonglonglonglongVar + '111');
    }

    private async initDynamic() {
        const Dynamic = (await import(/* webpackChunkName: "bundle_dynamic" */ './dynamic')).Dynamic;
        this.dynamic = new Dynamic();

    }
}

const main = async () => {
    const instance = new Module({
        test: 'test',
    });
    await instance.init();
    console.log('instance', instance);

    instance.log();
    instance.dynamic.log();
    instance.moduleA.log();
}

main()