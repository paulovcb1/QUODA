import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <div className="bg-slate-900 text-white py-5 px-4 rounded-t-lg flex items-center gap-3">
    <a href={""}><FontAwesomeIcon icon={faArrowLeft} /></a>
    <h1 className="text-lg font-semibold">Chat Bot</h1>
  </div>
);

export default Header;
