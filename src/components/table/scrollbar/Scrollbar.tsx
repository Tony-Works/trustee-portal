import type { ReactElement } from 'react';

import { useTheme } from '@mui/material/styles';
import ReactScrollbar from 'react-scrollbars-custom';

type ScrollbarProps = PropsWithChildren;

const Scrollbar = (props: ScrollbarProps): ReactElement => {
  const { children } = props;
  const theme = useTheme();

  return (
    <ReactScrollbar
      maximalThumbXSize={75}
      renderer={(rendererProps) => {
        const { elementRef, ...restProps } = rendererProps;
        return (
          <div
            {...restProps}
            style={{
              ...restProps.style,
              minHeight: 100,
            }}
            ref={elementRef}
          />
        );
      }}
      contentProps={{
        renderer: (contentProps) => {
          const { elementRef, ...restProps } = contentProps;
          return (
            <div
              {...restProps}
              style={{
                ...restProps.style,
                display: 'table',
              }}
              ref={elementRef}
            />
          );
        },
      }}
      trackXProps={{
        renderer: (trackXProps) => {
          const { elementRef, ...restProps } = trackXProps;
          return (
            <div
              {...restProps}
              style={{
                ...restProps.style,
                backgroundColor: 'inherit',
                left: 0,
                width: '100%',
              }}
              ref={elementRef}
            />
          );
        },
      }}
      thumbXProps={{
        renderer: (thumbXProps) => {
          const { elementRef, ...restProps } = thumbXProps;
          return (
            <div
              {...restProps}
              style={{
                ...restProps.style,
                backgroundColor: theme.palette.grey[400],
                borderRadius: '50rem',
              }}
              ref={elementRef}
            />
          );
        },
      }}
      noScrollY
      disableTracksMousewheelScrolling
      translateContentSizeYToHolder
      disableTrackYWidthCompensation>
      {children}
    </ReactScrollbar>
  );
};

export default Scrollbar;
