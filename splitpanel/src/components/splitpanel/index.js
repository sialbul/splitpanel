import React, { useState } from 'react';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import New from '../../pages/new/index';
import Update from '../../pages/update/index';

export default (SplitPanel) => {
  return (
  <div>
    <SplitterLayout>
  <div><New/></div>
      <div><Update/></div>
    </SplitterLayout>
    </div>
  );
}