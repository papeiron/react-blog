import styled from 'styled-components';

import { BubbleMenu } from '@tiptap/react';
import { Editor } from '@tiptap/react'; // Import the Editor type

import Marks from './Marks';
import Lists from './Lists';
import Insertions from './Insertions';
import CustomFormatting from './CustomFormatting';

const StyledCustomBubbleMenu = styled(BubbleMenu)`
  border-radius: 7px;
  width: 49.3rem;
  display: flex;
  background-color: white;
  box-shadow: var(--shadow-md);
  overflow: hidden;
`;

function CustomBubbleMenu({ editor }: { editor: Editor }) {
  return (
    <StyledCustomBubbleMenu
      editor={editor}
      tippyOptions={{
        duration: 500,
        theme: 'bubblemenu-popup',
        arrow: false,
        placement: 'top-start'
      }}
    >
      <Marks editor={editor} />
      <Lists editor={editor} />
      <CustomFormatting editor={editor} />
      <Insertions editor={editor} />
    </StyledCustomBubbleMenu>
  );
}

export default CustomBubbleMenu;
