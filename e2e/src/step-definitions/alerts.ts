import {ScenarioWorld} from "./setup/world";
import {When} from "@cucumber/cucumber";


When(
    /^I click (accept)?(dismiss)? on the alert dialog$/,
    async function(this:ScenarioWorld, acceptDialog: boolean, dismissDialog: boolean) {
        const {
            screen: {page},
        } = this;

        console.log(`i click ${dismissDialog?'dismiss ':'accept '}on the alert dialog`)
        console.log("!!dismissDialog ", !!dismissDialog)

        if(!!dismissDialog) {
            page.on('dialog', dialog => dialog.dismiss())
        } else{
            page.on('dialog', dialog => dialog.accept())
        }
    }
)