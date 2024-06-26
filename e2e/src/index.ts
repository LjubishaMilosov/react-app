import dotenv from 'dotenv'
import { env,  getJsonFromFile} from './env/parseEnv'
import {
    GlobalConfig,
    HostsConfig,
    PagesConfig,
    EmailsConfig,
    PageElementMappings,
} from './env/global'
import fs from "fs";



dotenv.config({path: env('COMMON_CONFIG_FILE')})


const hostsConfig: HostsConfig = getJsonFromFile(env('HOSTS_URLS_PATH'))
const pagesConfig: PagesConfig = getJsonFromFile(env('PAGE_URLS_PATH'))
const emailsConfig: EmailsConfig = getJsonFromFile(env('EMAILS_URLS_PATH'))

const mappingFiles = fs.readdirSync(`${process.cwd()}${env('PAGE_ELEMENTS_PATH')}`)

const pageElementMappings: PageElementMappings = mappingFiles.reduce(
    (pageElementConfigAcc, file) => {
        const key = file.replace('.json', '')
        const elementMappings = getJsonFromFile(`${env('PAGE_ELEMENTS_PATH')}${file}`);
        return { ...pageElementConfigAcc, [key]: elementMappings}
    },
    {}
)

const worldParameters: GlobalConfig = {
    hostsConfig,
    pagesConfig,
    emailsConfig,
    pageElementMappings
}

const common = `./src/features/**/*.feature \
                --require-module ts-node/register \
                --require ./src/step-definitions/**/**/*.ts \
                --world-parameters ${JSON.stringify(worldParameters)} \
                -f json:./reports/report.json \
                --format progress-bar \
                --parallel ${env('PARALLEL')} \
                --retry ${env('RETRY')}`;

const dev = `${common} --tags '@dev'`;
const smoke = `${common} --tags '@smoke'`;
const regression = `${common} --tags '@regression'`;

export { dev, smoke, regression };