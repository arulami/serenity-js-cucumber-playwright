import {By, PageElement} from '@serenity-js/web';

export class Cart {




    static productImageByName = (productName: string) =>
        //const safeTitle = CSS.escape(productName);
        PageElement.located(By.cssContainingText(`div.carousel-item.active`, productName))
            .describedAs(`product image for ${productName} in carousel`)

    static addToCart=(productName: string) =>
        PageElement.located(By.css("#container button[title='Add to Cart']"))
            .describedAs(`Add to cart for ${productName}`);

    static viewCart = () =>
        PageElement.located(
            By.cssContainingText('a.btn.btn-primary.btn-block', 'View Cart')
        ).describedAs('View Cart button');

    static isProductVisible = (productName: string) =>
        PageElement.located(
            By.cssContainingText('td.text-left', productName)
        ).describedAs('Product visible in View AddCart');

    static quantityValue = () =>
        PageElement.located(By.css("div[class$='flex-nowrap'] input"))
        .describedAs('Quantity value');
    
}