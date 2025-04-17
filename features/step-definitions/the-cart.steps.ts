import { Given, Then, When} from '@cucumber/cucumber';
import {Actor, actorInTheSpotlight, Duration, Wait} from '@serenity-js/core';
import { Navigate } from '@serenity-js/web';

import { Authenticate, VerifyAuthentication } from '../../test/authentication';
import {Cart} from '../../ui/lambdademo/Cart';
import {AddCart} from "../../test/lamdademo";


/**
 * Below step definitions use Cucumber Expressions
 * see: https://cucumber.io/docs/cucumber/cucumber-expressions/
 *
 * {actor} and {pronoun} are custom expressions defined under support/parameters.ts
 */
Given('{actor} in the lambda site', async (actor: Actor) =>
    actor.attemptsTo(
        Navigate.to('/')
    )
);

When('{pronoun} selects {string} from the Menu', async (actor: Actor, item: string) =>
    actor.attemptsTo(
        AddCart.select(item)
    )
);

When('{pronoun} selects {string} from the Mega Menu', async (actor: Actor, item: string) =>
    actor.attemptsTo(
        AddCart.selectFromMegaMenu(item)
    )
);

Then('{pronoun} clicks on the {string} product', async (actor: Actor, item: string) =>
    actor.attemptsTo(
        AddCart.pickProduct(item)
    )
);

Then('{pronoun} add the product {string} to the cart', async (actor: Actor, item:string) =>
    actor.attemptsTo(
        AddCart.addProduct(item)
    )
);

Then('she should see in the View cart', async (actor: Actor) =>
    actor.attemptsTo(
        AddCart.viewCart()
    )
);

When('{pronoun} log(s) in using {string} and {string}', async (actor: Actor, username: string, password: string) =>
    actor.attemptsTo(
        Authenticate.using(username, password),
    )
);

/**
 * If you need to use a RegExp instead of Cucumber Expressions like {actor} and {pronoun}
 * you can use actorCalled(name) and actorInTheSpotlight() instead
 *
 *  see: https://serenity-js.org/modules/core/function/index.html#static-function-actorCalled
 *  see: https://serenity-js.org/modules/core/function/index.html#static-function-actorInTheSpotlight
 */
Then(/.* should see that authentication has (succeeded|failed)/, async (expectedOutcome: string) =>
    actorInTheSpotlight().attemptsTo(
        VerifyAuthentication[expectedOutcome](),
    )
);

