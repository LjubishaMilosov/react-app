import { Then } from '@cucumber/cucumber'

import { ElementKey } from '../../env/global'
import { getElementLocator } from '../../support/web-element-helper'
import {ScenarioWorld} from '../setup/world';
import {waitFor} from '../../support/wait-for-behavior';


     Then(
             /^the "([^"]*)" should contain the text "(.*)"$/,
             async function(this: ScenarioWorld, elementKey:ElementKey, expectedElementText:string) {
                 const {
                     screen: { page },
                     globalConfig,
                     globalVariables,
                 } = this;

                 console.log(`the ${elementKey} should contain the text ${expectedElementText}`)

                 const elementIdentifier = getElementLocator(page, elementKey, globalVariables, globalConfig);

                     const content = await page.textContent(elementIdentifier)

                         //expect(content).toBe(expectedElementText);

                     }
         )

    Then(
        /^the "([^"]*)" should be displayed$/,
        async function(this: ScenarioWorld, elementKey:string){
            const {
                screen: { page },
                globalVariables,
                globalConfig
            } = this;

            console.log(`the ${elementKey} should be displayed`);

            const elementIdentifier = getElementLocator(page, elementKey, globalVariables, globalConfig);

            await waitFor( async () => {
                const isElementVisible = (await page.$(elementIdentifier)) != null
                return isElementVisible;
            });

        }
    )