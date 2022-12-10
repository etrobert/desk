import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NavigateBack = () => {
  const navigate = useNavigate();

  useEffect(() => navigate(-1), [navigate]);
  return null;
};

export default NavigateBack;
