import { Given } from '@cucumber/cucumber'
import {PageId} from "../env/global";
import {navigateToPage, currentPathMatchesPageId, reloadPage} from '../support/navigation-behavior'
import {waitFor} from "../support/wait-for-behavior";
import {ScenarioWorld} from "./setup/world";


     Given(
             /^I am on the "([^"]*)" page$/,
             async function(pageId:PageId) {
                 const {
                     screen: { page },
                     globalVariables,
                     globalConfig,
                 } = this;



                         await navigateToPage(page,pageId, globalConfig)

                        await waitFor(() => currentPathMatchesPageId(page, pageId, globalConfig));
                 }
         )

Given(
    /^I am directed to the "([^"]*)" page$/,
    async function(this:ScenarioWorld, pageId: PageId) {
        const {
            screen: { page },
            globalConfig,
        } = this;



        await waitFor( () => currentPathMatchesPageId(page, pageId, globalConfig))
    }
)

Given(
    /^I refresh the "([^"]*)" page$/,
    async function(this:ScenarioWorld, pageId: PageId) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`I refresh the ${pageId} page`)

        await reloadPage(page)

        await waitFor( () => currentPathMatchesPageId(page, pageId, globalConfig), {
            timeout: 30000,
        })
    }
)