import { useNavigate } from 'react-router-dom';

import ButtonIcon from './ButtonIcon';

import { IoArrowBack } from 'react-icons/io5';

function BackButton() {
  const navigate = useNavigate();
  return (
    <ButtonIcon onClick={() => navigate(-1)} aria-label='Go Back'>
      <IoArrowBack />
    </ButtonIcon>
  );
}

export default BackButton;
