import styled from 'styled-components';
import MenuItem from './MenuItem';
import {
  LuBold,
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuItalic,
  LuStrikethrough,
  LuUnderline
} from 'react-icons/lu';

import { Editor } from '@tiptap/react';

const StyledMarks = styled.div`
  border-right: 1px solid #e4e2e2;
`;

function Marks({ editor }: { editor: Editor }) {
  return (
    <StyledMarks>
      {/* heading */}
      <MenuItem
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        popup='Heading 1'
      >
        <LuHeading1 />
      </MenuItem>
      <MenuItem
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        popup='Heading 2'
      >
        <LuHeading2 />
      </MenuItem>
      <MenuItem
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        popup='Heading 3'
      >
        <LuHeading3 />
      </MenuItem>

      {/* bold */}
      <MenuItem
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
        popup='Bold'
      >
        <LuBold />
      </MenuItem>

      {/* italic */}
      <MenuItem
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
        popup='Italic'
      >
        <LuItalic />
      </MenuItem>

      {/* underline */}
      <MenuItem
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive('underline') ? 'is-active' : ''}
        popup='Underline'
      >
        <LuUnderline />
      </MenuItem>

      {/* strike */}
      <MenuItem
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
        popup='Strike-through'
      >
        <LuStrikethrough />
      </MenuItem>
    </StyledMarks>
  );
}

export default Marks;
