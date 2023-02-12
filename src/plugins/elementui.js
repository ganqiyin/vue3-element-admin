import { Buttion, Switch } from "element-plus";

export default {
    // 参数app：由Vue的creatApp生成的app
    install: (app) => {
        app.use(Buttion);
        app.use(Switch);
    },
}
