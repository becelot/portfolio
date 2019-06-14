import React from "react";
import styled, {FlattenSimpleInterpolation} from "styled-components";
import withAnimationTrigger, {AnimationTrigger} from "./withAnimationTrigger";

export interface AnimationTrigger {
    visible: boolean;
}

export function withAnimation<C extends object>(
    Component: React.ComponentType<C>,
    animation: FlattenSimpleInterpolation,
): React.ComponentType<C> {
    const AnimationTriggeredComponent = withAnimationTrigger(styled(Component)<AnimationTrigger>`
        ${props => props.visible ? animation : ''}
    `);

    return AnimationTriggeredComponent as React.ComponentType<C>;
}

export default withAnimation;
