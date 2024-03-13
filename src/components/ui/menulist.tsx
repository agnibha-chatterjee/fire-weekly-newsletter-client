import React from 'react';
import { Virtuoso } from 'react-virtuoso';

export const MenuList = (props: any) => {
  const { children, maxHeight } = props;

  return (
    <Virtuoso
      style={{ height: maxHeight }}
      totalCount={children.length}
      itemContent={index => children[index]}
      overscan={20}
    />
  );
};
