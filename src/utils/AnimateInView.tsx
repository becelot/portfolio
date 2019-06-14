import React from "react";
import {InView} from "react-intersection-observer";
import styled, {FlattenSimpleInterpolation} from "styled-components";

export interface AnimateInViewProps {
    animation: FlattenSimpleInterpolation;
}

const AnimationWrapper = styled.div<{visible: boolean; animation: FlattenSimpleInterpolation}>`
    height: fit-content;
    width: fit-content;
    opacity: 0;
    ${props => props.visible ? props.animation : ''}
`;

const AnimateInView: React.FC<AnimateInViewProps> = props => {

    const wrappedChildren = React.Children.map(props.children, (child: any) => {
        return (
            <InView triggerOnce={true} rootMargin={'-20%'}>
                {({inView, ref}) => (
                    <AnimationWrapper visible={inView} animation={props.animation} ref={ref}>
                        {child}
                    </AnimationWrapper>
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

export default AnimateInView;
