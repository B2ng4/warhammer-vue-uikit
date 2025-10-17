import Button from './Button.vue';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        color: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'ghost', 'destructive']
        },
        disabled: {
            control: { type: 'boolean' },
        },
        label: {
            control: { type: 'text' },
        },
        size: {
            control: { type: 'select' },
            options: ['auto', 'small', 'medium', 'big', 'full']
        }
    },
    args: {
        disabled: false,
        label: 'Заголовок',
        size: 'auto'
    }
};

const Template = (args) => ({
    components: { Button },
    setup() {
        return { args };
    },
    template: '<Button v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    label: 'Кнопка',
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    label: 'Неактивная кнопка',
};