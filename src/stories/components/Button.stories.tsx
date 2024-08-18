import { Button } from "@/components/ui/Button";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    //=> props
    asChild: false,
    disabled: false,
    variant: "default",
    size: "default",
    children: "Button",
    onClick: action("butao clicado"),
  },
  argTypes: {
    asChild: {
      name: "asChild (renders the child the actual button)",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    disabled: {
      control: "boolean",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: {
        type: "inline-radio",
        labels: {
          default: "Padrao",
          sm: "Small",
        },
      },
      table: {
        category: "Appearence",
        type: {
          summary: "enum (string)",
          detail: "'default' | 'sm' | 'lg' | 'icon'",
        },
        defaultValue: {
          summary: "default",
        },
      },
    },
    variant: {
      options: [
        "default",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
      control: "select",
      table: {
        category: "Appearence",
        type: {
          summary: "enum (string)",
          detail:
            "'default'|'secondary'|'destructive'|'outline'|'ghost'|'link'",
        },
        defaultValue: {
          summary: "default",
        },
      },
    },
    onClick: {
      table: {
        category: "Event Listeners",
      },
    },
    onMouseEnter: {
      table: {
        category: "Event Listeners",
        subcategory: "Mouse Events",
      },
    },
    onMouseLeave: {
      table: {
        category: "Event Listeners",
        subcategory: "Mouse Events",
      },
    },
  },
  decorators: [],
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Nome diferente da fn",
};

export const Secondary: Story = {
  args: {
    children: "secondary",
    variant: "secondary",
  },
  render: (props) => (
    <Button {...props}>
      <span className="mr-1">+</span>
      Secondary
    </Button>
  ),
};
