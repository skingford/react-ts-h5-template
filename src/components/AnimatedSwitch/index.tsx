import { White } from '@/typings';
import { cloneElement, FC, memo } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './index.scss';

const AnimatedSwitch: FC<White.AnimatedSwitchProps> = ({
  children,
  classNames,
  primaryKey,
  timeout = 500,
  ...other
}) => {
  return (
    <TransitionGroup
      childFactory={(child) => cloneElement(child, { classNames })}>
      <CSSTransition key={primaryKey} timeout={timeout} appear {...other}>
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default memo(AnimatedSwitch);
