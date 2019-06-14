import React from "react";
import {InView} from "react-intersection-observer";

export interface AnimationTrigger {
    visible: boolean;
}

export function withCustomAnimationTrigger<C extends object, T extends keyof C>(
    Component: React.ComponentType<C>,
    key: T
): React.ComponentType<Omit<C, T>> {
    const AnimationTriggeredComponent: React.FC<Omit<C, T>> = props => {
        return (
            <InView triggerOnce={true} rootMargin={'-20%'}>
                {({inView, ref}) => <Component visible={inView} ref={ref} {...props as C}/>}
            </InView>
        );
    };

    return AnimationTriggeredComponent;
}

export function withAnimationTrigger<C extends AnimationTrigger>(
    Component: React.ComponentType<C>
): React.ComponentType<Omit<C, 'visible'>> {
    const AnimationTriggeredComponent: React.FC<Omit<C, 'visible'>> = props => {
        return (
            <InView triggerOnce={true} rootMargin={'-20%'}>
                {({inView, ref}) => <Component visible={inView} ref={ref} {...props as C}/>}
            </InView>
        );
    };

    return AnimationTriggeredComponent;
}

export default withAnimationTrigger;
