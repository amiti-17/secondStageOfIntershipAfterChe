interface DefaultConfType {
    [key: string]: number | boolean | string;
}

const defaultConf: DefaultConfType = {
    port: 3002,
};

export default defaultConf;
