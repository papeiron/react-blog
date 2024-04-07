import styled from 'styled-components';

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import TaskList from '@tiptap/extension-task-list';
import { Markdown } from 'tiptap-markdown';
import TaskItem from '@tiptap/extension-task-item';

import CustomBubbleMenu from './Extensions/BubbleMenu/CustomBubbleMenu';
import SlashCommand from './Extensions/SlashMenu';
import ResizableImage from './Extensions/ResizableImage';

const StyledEditor = styled.div`
  background-color: white;
  min-height: 30rem;
  border-radius: 7px;
  padding: 1rem 1.5rem;
  font-size: 1.6rem;

  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-md);
`;

export const extensions = [
  StarterKit,
  Placeholder.configure({
    placeholder: "Write something or '/' for commands"
  }),
  Link.configure({
    openOnClick: false,
    autolink: true
  }),
  Underline,
  TaskList,
  TaskItem,
  SlashCommand,
  ResizableImage,
  Markdown
];

const TiptapEditor = ({
  defaultValue,
  onChange
}: {
  defaultValue: any;
  onChange: (value: any) => void;
}) => {
  const editor = useEditor({
    content: defaultValue ? defaultValue : '',
    editorProps: {
      attributes: {
        className: ''
      }
    },

    onUpdate: ({ editor }) => {
      const html = editor.getHTML();

      onChange(html);
    },
    extensions: extensions
  });

  if (!editor) {
    return null;
  }

  // console.log(editor.storage.markdown.getMarkdown());
  // console.log(editor.getHTML());

  return (
    <StyledEditor>
      <EditorContent editor={editor} spellCheck='false' autoComplete='true' />
      <CustomBubbleMenu editor={editor} />
    </StyledEditor>
  );
};

export default TiptapEditor;
