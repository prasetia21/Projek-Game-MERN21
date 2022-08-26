import {Meta} from "@storybook/react";
import GameItem, {GameItemProps} from "../../../../components/molecules/GameItem";


export default {
	title: 'Components/Molecules/GameItem',
	component: GameItem,
} as Meta;

const Template = (args: GameItemProps) => <GameItem {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: 'Super Mech',
	category: 'Mobile',
	thumbnail: '/img/thumbnail-1.png',
};