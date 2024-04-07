import styled from 'styled-components';

import { LuList, LuListOrdered } from 'react-icons/lu';
import MenuItem from './MenuItem';
import { Editor } from '@tiptap/react';

const StyledLists = styled.div`
  border-right: 1px solid #e4e2e2;
`;

function Lists({ editor }: { editor: Editor }) {
  return (
    <StyledLists>
      {/* Lists */}
      <MenuItem
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
        popup='Bullet List'
      >
        <LuList />
      </MenuItem>

      <MenuItem
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
        popup='Order List'
      >
        <LuListOrdered />
      </MenuItem>
    </StyledLists>
  );
}

export default Lists;
