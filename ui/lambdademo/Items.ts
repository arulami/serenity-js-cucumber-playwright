import {equals} from '@serenity-js/assertions';
import {QuestionAdapter} from '@serenity-js/core';
import {By, PageElement, PageElements, Text} from '@serenity-js/web';

export class Items {

    static all = () =>
        PageElements.located(By.css('ul li a'))
            .describedAs('available items')


    static called = (name: string): QuestionAdapter<PageElement<unknown>> =>
        Items.all()
            .where(Text, equals(name))
            .first()


    static menuItemWithTitle = (title:string) =>
        PageElement.located(By.css(`a[title="${title}"]`))
            .describedAs(`${title} menu item`)

}