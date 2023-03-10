import { EButtion, ESwitch, EForm, EFormItem, EInput } from "element-plus";

export default {
    // 参数app：由Vue的creatApp生成的app
    install: (app) => {
        app.use(EButtion);
        app.use(ESwitch);
        app.use(EForm);
        app.use(EFormItem);
        app.use(EInput);
    },
}
