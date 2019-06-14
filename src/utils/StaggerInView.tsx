import React from "react";
import {InView} from "react-intersection-observer";
import styled, {FlattenSimpleInterpolation} from "styled-components";


export type AnimationHandle = (delay: number) => FlattenSimpleInterpolation;

export interface StaggerProps {
    itemStyle?: FlattenSimpleInterpolation;
    stagger: number;
    animation: AnimationHandle;
}

export const StaggerWrapper = styled.div<{itemStyle?: FlattenSimpleInterpolation; animation: AnimationHandle, stagger?: number}>`
    opacity: 0;
    ${props => props.itemStyle}
    
    ${props => props.stagger !== undefined ? props.animation(props.stagger) : ''}
`;

const StaggerInView: React.FC<StaggerProps> = props => {
    let currentStagger: number = 0;
    let staggerTimeout: number = 0;

    const stagger = () => {
        if (staggerTimeout) {
            window.clearTimeout(staggerTimeout);
        }
        const tmp = currentStagger;
        currentStagger += props.stagger;
        staggerTimeout = window.setTimeout(() => currentStagger = 0, currentStagger * 1000);

        return tmp;
    };

    const wrappedChildren = React.Children.map(props.children, (child: any) => {
        return (
            <InView triggerOnce={true} rootMargin={'-20%'}>
                {({inView, ref}) => (
                    <StaggerWrapper itemStyle={props.itemStyle} animation={props.animation} stagger={inView ? stagger() : undefined} ref={ref}>{child}</StaggerWrapper>
                )}
            </InView>
        );
    });

    return (
        <>
            {wrappedChildren}
        </>
    );
};

export default StaggerInView;
