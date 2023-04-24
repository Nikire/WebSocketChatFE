import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function RedirectToMain() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  }, []);
  return null;
}
