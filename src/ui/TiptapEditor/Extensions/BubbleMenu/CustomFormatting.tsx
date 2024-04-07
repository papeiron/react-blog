import styled from 'styled-components';
import MenuItem from './MenuItem';
import { LuCode } from 'react-icons/lu';
import { TbRowInsertBottom } from 'react-icons/tb';
import { Editor } from '@tiptap/react';
import { BsQuote } from 'react-icons/bs';

const StyledCustomFormatting = styled.div`
  border-right: 1px solid #e4e2e2;
`;

function CustomFormatting({ editor }: { editor: Editor }) {
  return (
    <StyledCustomFormatting>
      {/* Quote */}
      <MenuItem
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
        popup='Quote'
      >
        <BsQuote />
      </MenuItem>
      {/* codeblock */}
      <MenuItem
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
        popup='Mark as code'
      >
        <LuCode />
      </MenuItem>

      {/* <br> */}
      <MenuItem onClick={() => editor.chain().focus().setHardBreak().run()} popup='Line break'>
        <TbRowInsertBottom />
      </MenuItem>
    </StyledCustomFormatting>
  );
}

export default CustomFormatting;
