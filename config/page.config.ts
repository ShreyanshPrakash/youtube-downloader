
interface PageConfigInterface {
    title: ConfigInterface
}

interface ConfigInterface {
    title: string,
}

export const PAGE_CONFIG: any = {
    "/home": {
        title: "Welcome to Home",
    },
    "/": {
        title: "Welcome",
    }
};