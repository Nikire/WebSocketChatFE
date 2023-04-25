import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginRegisterText(props) {
  const [type, setType] = useState('');
  const [question, setQuestion] = useState('');
  useEffect(() => {
    if (props.type === 'login') {
      setQuestion("Don't have an account?");
      setType('Register');
    } else {
      setQuestion('Already have an account?');
      setType('Login');
    }
  }, []);

  return (
    <small className="text-muted">
      <span className="m-2">{question}</span>
      <Link className="text-muted" to={`/${type}`}>
        {type}
      </Link>
    </small>
  );
}
