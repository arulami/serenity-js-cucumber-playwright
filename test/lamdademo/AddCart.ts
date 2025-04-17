import {Task, Wait} from '@serenity-js/core';
import {Click, Hover, Scroll} from '@serenity-js/web';
import {isVisible} from '@serenity-js/web';

import {Items} from '../../ui/lambdademo/Items';
import {Cart} from "../../ui/lambdademo/Cart";

/**
 * This is called a "Task".
 * Use tasks to compose a sequence of one or more activities and give them domain meaning.
 *
 * Here, the actor performs three activities:
 * - enter username
 * - enter password
 * - click on the login button
 *
 * This sequence of activities together means to "log in"
 */
export class AddCart {

    static select = (item: string) =>
        Task.where(`#actor selects the ${item} from the Menu`,
            Wait.until(Items.called(item), isVisible()),
            Hover.over(Items.called(item)),
            Click.on(Items.called(item)),
            //Enter.theValue("").on(Cart.quantityValue()),
        );

    static selectFromMegaMenu = (title:string) =>
        Task.where(`#actor selects the ${title} from the Mega Menu`,
            Click.on(Items.menuItemWithTitle(title))
        );

    static pickProduct = (title:string) =>
        Task.where(`#actor pick the ${title}`,
            Click.on(Cart.productImageByName(title))
        );

    static addProduct = (title:string) =>
        Task.where(`#actor add the ${title} to the cart`,

            Click.on(Cart.addToCart(title))
        );

    static viewCart = () =>
        Task.where(`#actor view the cart`,
            Click.on(Cart.viewCart())
        );

}
