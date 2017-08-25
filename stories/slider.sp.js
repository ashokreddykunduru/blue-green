import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import Slide from '../src/main/js/slider/Slide';
import Slider from '../src/main/js/slider/Slider';
import { beforeEach, storiesOf, describe, it, specs } from '../.storybook/facade';

const stories = storiesOf('Slider', module);

let storyName = 'Slide';
stories.add(storyName, () => {
    const slide = {
        title: "Pimp my Blue Ocean",
        description: "### create a custom plugin \n" +
        "\n" +
        "We will use [JenkinsWorld 2017 BO seed](https://github.com/scherler/jw17boseed)\n" +
        "\n" +
        "### customize Blue Ocean\n" +
        " - with custom css\n" +
        " - custom components",
    };
    const story = (<div className="story">
        <Slide slide={slide}/>
    </div>);
    const wrapper = mount(story);

    specs(() => describe(storyName, () => {
        it('renders main div', () => {
            expect(wrapper.find('div.slide').length).toBe(1)
        });
    }));
    return story;
});

storyName = 'Slider';
stories.add(storyName, () => {
    const slides = [
        {
            title: "Pimp my Blue Ocean",
            description: "### create a custom plugin \n" +
            "\n" +
            "We will use [JenkinsWorld 2017 BO seed](https://github.com/scherler/jw17boseed)\n" +
            "\n" +
            "### customize Blue Ocean\n" +
            " - with custom css\n" +
            " - custom components",
        },
        {
            title: "Deliver Blue Ocean Components at the Speed of Light",
            description: "## Deliver Blue Ocean Components at the Speed of Light\n" +
            "\n" +
            "Using storybook.js.org for Blue Ocean frontend to \n" +
            "\n" +
            "- speed up the development \n" +
            "- speed up the delivery process \n" +
            "- validate with PM and designer the UX. ",
        }
    ];
    const story = (<div className="story">
        <Slider slides={slides}/>
    </div>);
    const wrapper = mount(story);

    specs(() => describe(storyName, () => {
        it('renders main div', () => {
            expect(wrapper.find('ul.slider').length).toBe(1)
        });
    }));
    return story;
});