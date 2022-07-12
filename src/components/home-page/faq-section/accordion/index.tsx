import AccordionItem, { AccordionItemProps } from './accordion-item';

import Text from 'components/common/text';
import { useState } from 'react';

const initialAccordionItems: Omit<AccordionItemProps, 'onExpand'>[] = [
    {
        ariaControls: 'accordion-collapse-body-1',
        children: (
            <Text className="text-secondary" variant="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad sed
                adipiscing volutpat tincidunt amet vulputate porta est.
            </Text>
        ),
        dataAccordionTarget: '#accordion-collapse-body-1',
        expanded: false,
        id: 'accordion-collapse-heading-1',
        title: 'Lorem ipsum dolor sit amet?',
    },
    {
        ariaControls: 'accordion-collapse-body-2',
        children: (
            <>
                <Text className="text-secondary" variant="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad
                    sed adipiscing volutpat tincidunt amet vulputate porta est.
                </Text>
                <Text className="text-secondary" variant="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad
                    sed adipiscing volutpat tincidunt amet vulputate porta est.
                </Text>
            </>
        ),
        dataAccordionTarget: '#accordion-collapse-body-2',
        expanded: false,
        id: 'accordion-collapse-heading-2',
        title: 'Lorem ipsum dolor sit amet?',
    },
    {
        ariaControls: 'accordion-collapse-body-3',
        children: (
            <Text className="text-secondary" variant="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
        ),
        dataAccordionTarget: '#accordion-collapse-body-3',
        expanded: false,
        id: 'accordion-collapse-heading-3',
        title: 'Lorem ipsum dolor sit amet?',
    },
    {
        ariaControls: 'accordion-collapse-body-4',
        children: (
            <Text className="text-secondary" variant="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad sed
                adipiscing volutpat tincidunt amet vulputate porta est.
            </Text>
        ),
        dataAccordionTarget: '#accordion-collapse-body-4',
        expanded: false,
        id: 'accordion-collapse-heading-4',
        title: 'Lorem ipsum dolor sit amet?',
    },
];

const Accordion = () => {
    const [accordionItems, setAccordionItems] = useState(initialAccordionItems);

    /**
     * Sets the `expanded` attribute to `true` of the selected Accordion
     * element on user click.
     *
     * @param {string} id `id` of the Accordion element to expand
     */
    const onItemExpand = (id: string) => {
        setAccordionItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, expanded: !item.expanded } : item,
            ),
        );
    };

    return (
        <div id="accordion-collapse" data-accordion="collapse">
            {accordionItems.map(accordionItemProps => (
                <AccordionItem
                    key={accordionItemProps.id}
                    onExpand={onItemExpand}
                    {...accordionItemProps}
                />
            ))}
        </div>
    );
};

export default Accordion;
