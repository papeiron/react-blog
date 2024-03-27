import { useNavigate } from 'react-router-dom';

import ButtonIcon from './ButtonIcon';

import { IoIosArrowRoundBack } from 'react-icons/io';

function BackButton() {
  const navigate = useNavigate();
  return (
    <ButtonIcon onClick={() => navigate(-1)}>
      <IoIosArrowRoundBack />
    </ButtonIcon>
  );
}

export default BackButton;
