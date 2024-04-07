import styled from 'styled-components';
import { MouseEvent, useCallback, useState } from 'react';
import { Editor } from '@tiptap/react';

import MenuItem from './MenuItem';
import Image from './Image';

import { LuLink2 } from 'react-icons/lu';
import { IoImageOutline } from 'react-icons/io5';
import { Fade, Popover } from '@mui/material';

const StyledInsertions = styled.div``;

function Insertions({ editor }: { editor: Editor }) {
  // POPOVER

  const [anchorEl, setAnchorEl] = useState<SVGSVGElement | null>(null);

  const handleClick = (event: MouseEvent<SVGSVGElement>) => {
    anchorEl == null ? setAnchorEl(event.currentTarget) : setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  // LINK
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  return (
    <StyledInsertions>
      {/* link */}
      <MenuItem
        onClick={setLink}
        className={editor.isActive('link') ? 'is-active' : ''}
        popup='Add a link'
      >
        <LuLink2 />
      </MenuItem>

      {/* image */}
      <MenuItem popup='Add an Image'>
        <IoImageOutline aria-describedby={id} onClick={handleClick} />

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 35,
            horizontal: -193
          }}
          TransitionComponent={Fade}
          transitionDuration={500}
          className='mui-popover'
        >
          <Image editor={editor} />
        </Popover>
      </MenuItem>
    </StyledInsertions>
  );
}

export default Insertions;
