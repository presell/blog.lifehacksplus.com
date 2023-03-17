// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  Plasmic_414PxVariety,
  Default_414PxVarietyProps
} from "./plasmic/masteri_sparq/Plasmic_414PxVariety";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface _414PxVarietyProps extends Omit<Default_414PxVarietyProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from Default_414PxVarietyProps altogether and have
// total control over the props for your component.
export interface _414PxVarietyProps extends Default_414PxVarietyProps {}

function _414PxVariety_(
  props: _414PxVarietyProps,
  ref: HTMLElementRefOf<"div">
) {
  // Use Plasmic_414PxVariety to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into Plasmic_414PxVariety are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all _414PxVarietyProps here, but feel free
  // to do whatever works for you.

  return <Plasmic_414PxVariety div47={{ ref }} {...props} />;
}

const _414PxVariety = React.forwardRef(_414PxVariety_);
export default _414PxVariety;
