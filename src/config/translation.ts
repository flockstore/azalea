export const navigation = {
    dashboard: "navigation.dashboard",
    contact: "navigation.contact",
    product: "navigation.product",
    manufacturing: "navigation.manufacturing",
    iam: "navigation.iam",
    account: "navigation.account",
};

export const colorModeSwitcher = {
    light: "colorModeSwitcher.light",
    dark: "colorModeSwitcher.dark",
};

export const sidebar = {
    shrink: "sidebar.shrink",
    expand: "sidebar.expand",
    close: "sidebar.close",
};

export const profile = {
    gag:  "profile.gag",
    logout: "profile.logout"
};

export const auth = {
    login: "auth.login",
    sub: "auth.sub",
    label: "auth.label",
    holder: "auth.holder",
    submit: "auth.submit",
    help: "auth.help",
    invalid: "auth.invalid",
    check: "auth.check",
    error: {
        title: "auth.error.title",
        message: "auth.error.message"
    },
    success: {
        title: "auth.success.title",
        message: "auth.success.message"
    }
};

export const session = {
    redeemError: {
        title: "session.redeemError.title",
        message: "session.redeemError.message"
    }
};

export const menu = {
    title: "account.menu.title",
    basic: "account.menu.basic",
    email: "account.menu.email"
};

export const accountBasic = {
    title: "account.basic.title",
    subtitle: "account.basic.subtitle",
    submit: "account.basic.submit",
    avatar : {
        section: "account.basic.avatar.section",
        title: "account.basic.avatar.title",
        receive: "account.basic.avatar.receive",
        upload: "account.basic.avatar.upload",
    },
    form: {
        section: "account.basic.form.section",
        name: {
            label: "account.basic.form.name.label",
            holder: "account.basic.form.name.holder",
            validation: "account.basic.form.name.validation",
        },
        gender: {
            label: "account.basic.form.gender.label",
            holder: "account.basic.form.gender.holder",
        },
        about: {
            label: "account.basic.form.about.label",
            holder: "account.basic.form.about.holder",
            validation: "account.basic.form.about.validation",
        },
        success: {
            title: "account.basic.form.success.title",
            sub: "account.basic.form.success.sub"
        },
        error: {
            load: {
                title: "account.basic.form.error.load.title",
                sub: "account.basic.form.error.load.sub"
            },
            submit: {
                title: "account.basic.form.error.submit.title",
                sub: "account.basic.form.error.submit.sub"
            }
        }
    }
};

export const user = {
    genders: {
        male: "user.genders.male",
        female: "user.genders.female",
        other: "user.genders.other"
    }
};

export const accountEmail =  {
    title: "account.email.title",
    subtitle: "account.email.subtitle"
};

export const account = {
    menu,
    basic: accountBasic,
    email: accountEmail
};