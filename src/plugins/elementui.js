import { Buttion, Switch } from "element-plus";

export default {
    // 参数app：由Vue的creatApp生成的app
    // 参数options：用户传入的选项
    install: (app) => {
        app.use(Buttion);
        app.use(Switch);
    },
}
