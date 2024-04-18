import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@ignite-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    size: 'md',
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi asperiores, placeat hic iure voluptatum quisquam officiis deleniti eaque libero magnam veritatis, accusantium necessitatibus, quae nihil architecto officia consectetur possimus eum.',
  },
  argTypes: {
    size: {
      options: [
        'xxs', 
        'xs', 
        'sm', 
        'md', 
        'lg', 
        'xl', 
        '2xl', 
        '4xl', 
        '5xl', 
        '6xl', 
        '7xl', 
        '8xl', 
        '9xl',
      ],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  }
}