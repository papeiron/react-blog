import { Editor, Extension, Range, ReactRenderer } from '@tiptap/react';
import Suggestion from '@tiptap/suggestion';
import { ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

import tippy from 'tippy.js';
import {
  LuCheckSquare,
  LuCode,
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuImage,
  LuList,
  LuListOrdered,
  LuText,
  LuTextQuote
} from 'react-icons/lu';
import styled from 'styled-components';

const CommandListContainer = styled.div`
  /* z-index: 999999; */
  width: 32rem;
  height: 34rem;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  padding: 0.75rem 0.3rem 0.75rem 0.3rem;
  position: relative;

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background-color: white;
  overflow-y: scroll;
`;

type StyledButtonProps = {
  index: number;
  selectedindex: number;
};

const StyledButton = styled.button<StyledButtonProps>`
  color: var(--color-grey-800);
  background-color: ${(props) => (props.index === props.selectedindex ? '#f8f5f5 ' : 'white')};

  border-radius: 7px;
  padding: 0.25rem 0.6rem;

  display: flex;
  gap: 0.75rem;
  border: none;
  cursor: pointer;
  align-items: center;

  &:hover {
    background-color: #f8f5f5;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
`;

const Soft = styled.p`
  font-size: 1.2rem;
  color: #979694;
`;

const Icon = styled.div`
  border: 1px solid #e7e7e7;
  background-color: white;
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
`;

export const Command = Extension.create({
  name: 'slash-command',
  addOptions() {
    return {
      suggestion: {
        char: '/',
        command: ({ editor, range, props }: { editor: Editor; range: Range; props: any }) => {
          props.command({ editor, range });
        }
      }
    };
  },
  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        ...this.options.suggestion
      })
    ];
  }
});

interface CommandItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface CommandProps {
  editor: Editor;
  range: Range;
}

export const updateScrollView = (container: HTMLElement, item: HTMLElement) => {
  const containerHeight = container.offsetHeight;
  const itemHeight = item ? item.offsetHeight : 0;

  const top = item.offsetTop;
  const bottom = top + itemHeight;

  if (top < container.scrollTop) {
    container.scrollTop -= container.scrollTop - top + 5;
  } else if (bottom > containerHeight + container.scrollTop) {
    container.scrollTop += bottom - containerHeight - container.scrollTop + 5;
  }
};

const CommandList = ({ items, command }: { items: CommandItemProps[]; command: any }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectItem = useCallback(
    (index: number) => {
      const item = items[index];
      if (item) {
        command(item);
      }
    },
    [command, items]
  );

  //
  useEffect(() => {
    const navigationKeys = ['ArrowUp', 'ArrowDown', 'Enter'];
    const onKeyDown = (e: KeyboardEvent) => {
      if (navigationKeys.includes(e.key)) {
        e.preventDefault();
        if (e.key === 'ArrowUp') {
          setSelectedIndex((selectedIndex + items.length - 1) % items.length);
          return true;
        }
        if (e.key === 'ArrowDown') {
          setSelectedIndex((selectedIndex + 1) % items.length);
          return true;
        }
        if (e.key === 'Enter') {
          selectItem(selectedIndex);
          return true;
        }
        return false;
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [items, selectedIndex, setSelectedIndex, selectItem]);

  //

  useEffect(() => {
    setSelectedIndex(0);
  }, [items]);

  const commandListContainer = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = commandListContainer?.current;

    const item = container?.children[selectedIndex] as HTMLElement;

    if (item && container) updateScrollView(container, item);
  }, [selectedIndex]);

  return (
    <CommandListContainer id='slash-command' ref={commandListContainer}>
      {items.map((item: CommandItemProps, index: number) => {
        return (
          <StyledButton
            index={index}
            selectedindex={selectedIndex}
            key={index}
            onClick={() => selectItem(index)}
          >
            <Icon>{item.icon}</Icon>
            <Content>
              <p>{item.title}</p>
              <Soft>{item.description}</Soft>
            </Content>
          </StyledButton>
        );
      })}
    </CommandListContainer>
  );
};

export const suggestionItems = ({ query }: { query: string }) => {
  return [
    {
      title: 'Text',
      description: 'Just start typing with plain text.',
      searchTerms: ['p', 'paragraph'],
      icon: <LuText size={18} />,
      command: ({ editor, range }: CommandProps) => {
        editor.chain().focus().deleteRange(range).toggleNode('paragraph', 'paragraph').run();
      }
    },
    {
      title: 'To-do List',
      description: 'Track tasks with a to-do list.',
      searchTerms: ['todo', 'task', 'list', 'check', 'checkbox'],
      icon: <LuCheckSquare size={18} />,
      command: ({ editor, range }: CommandProps) => {
        editor.chain().focus().deleteRange(range).toggleTaskList().run();
      }
    },
    {
      title: 'Heading 1',
      description: 'Big section heading.',
      searchTerms: ['title', 'big', 'large'],
      icon: <LuHeading1 size={18} />,
      command: ({ editor, range }: CommandProps) => {
        editor.chain().focus().deleteRange(range).setNode('heading', { level: 1 }).run();
      }
    },
    {
      title: 'Heading 2',
      description: 'Medium section heading.',
      searchTerms: ['subtitle', 'medium'],
      icon: <LuHeading2 size={18} />,
      command: ({ editor, range }: CommandProps) => {
        editor.chain().focus().deleteRange(range).setNode('heading', { level: 2 }).run();
      }
    },
    {
      title: 'Heading 3',
      description: 'Small section heading.',
      searchTerms: ['subtitle', 'small'],
      icon: <LuHeading3 size={18} />,
      command: ({ editor, range }: CommandProps) => {
        editor.chain().focus().deleteRange(range).setNode('heading', { level: 3 }).run();
      }
    },
    {
      title: 'Bullet List',
      description: 'Create a simple bullet list.',
      searchTerms: ['unordered', 'point'],
      icon: <LuList size={18} />,
      command: ({ editor, range }: CommandProps) => {
        editor.chain().focus().deleteRange(range).toggleBulletList().run();
      }
    },
    {
      title: 'Numbered List',
      description: 'Create a list with numbering.',
      searchTerms: ['ordered'],
      icon: <LuListOrdered size={18} />,
      command: ({ editor, range }: CommandProps) => {
        editor.chain().focus().deleteRange(range).toggleOrderedList().run();
      }
    },
    {
      title: 'Quote',
      description: 'Capture a quote.',
      searchTerms: ['blockquote'],
      icon: <LuTextQuote size={18} />,
      command: ({ editor, range }: CommandProps) =>
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .toggleNode('paragraph', 'paragraph')
          .toggleBlockquote()
          .run()
    },
    {
      title: 'Code',
      description: 'Capture a code snippet.',
      searchTerms: ['codeblock'],
      icon: <LuCode size={18} />,
      command: ({ editor, range }: CommandProps) =>
        editor.chain().focus().deleteRange(range).toggleCodeBlock().run()
    },
    {
      title: 'Image',
      description: 'Add an Image.',
      searchTerms: ['image'],
      icon: <LuImage size={18} />,
      command: ({ editor }: { editor: Editor }) => {
        const imageUrl = prompt('URL:');
        if (imageUrl) {
          editor.chain().focus().setImage({ src: imageUrl }).run();
        }
      }
    }
  ]
    .filter((item) => item.title.toLowerCase().startsWith(query.toLowerCase()))
    .slice(0, 10);
};

export const renderItems = () => {
  let component: ReactRenderer | null = null;
  let popup: any | null = null;

  return {
    onStart: (props: { editor: Editor; clientRect: DOMRect }) => {
      component = new ReactRenderer(CommandList, {
        props,
        editor: props.editor
      });

      // @ts-ignore
      popup = tippy('body', {
        getReferenceClientRect: props.clientRect,
        appendTo: () => document.body,
        content: component.element,
        showOnCreate: true,
        interactive: true,
        trigger: 'manual',
        placement: 'bottom-start',
        duration: 500,
        arrow: false,
        theme: 'slashmenu-popup'
        // onShow: () => {},
        // onHide: () => {}
      });
    },

    onUpdate: (props: { editor: Editor; clientRect: DOMRect }) => {
      component?.updateProps(props);

      popup &&
        popup[0].setProps({
          getReferenceClientRect: props.clientRect
        });
    },
    onKeyDown: (props: { event: KeyboardEvent }) => {
      if (props.event.key === 'Escape') {
        popup?.[0].hide();

        return true;
      }

      // @ts-ignore
      return component?.ref?.onKeyDown(props);
    },
    onExit: () => {
      popup?.[0].destroy();
      component?.destroy();
    }
  };
};

const SlashCommand = Command.configure({
  suggestion: {
    items: suggestionItems,
    render: renderItems
  }
});

export default SlashCommand;
