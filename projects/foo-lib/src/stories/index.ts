import { storiesOf } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  select,
  radios,
  color,
  date,
  button
} from "@storybook/addon-knobs";

import { MybuttonComponent } from "../lib/mybutton/mybutton.component";

storiesOf("My Button", module)
  .add("with some emoji", () => ({
    component: MybuttonComponent,
    props: {
      text: "😀 😎 👍 💯"
    }
  }))
  .add("with some emoji and action", () => ({
    component: MybuttonComponent,
    props: {
      text: "😀 😎 👍 💯",
      click: action("clicked")
    }
  }));
