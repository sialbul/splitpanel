import React, { useState } from 'react';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
 

export default (SplitPanel) => {
  return (
  <div>
    <SplitterLayout>
      <div>Pane 1</div>
      <div>Pane 2</div>
    </SplitterLayout>
    </div>
  );
}