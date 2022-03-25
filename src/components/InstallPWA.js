import React, { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa';

const InstallPWA = ({ className }) => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      console.log('we are being triggered :D');
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('transitionend', handler);
  }, []);

  const onClick = (evt) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }
  return (
    <div className="px-4 text-xl">
      <div className="bg-white w-full flex items-center rounded-md my-4 py-4 px-4">
        <div className="mr-5">
          <FaDownload />
        </div>
        <button
          className={className}
          id="setup_button"
          aria-label="Install app"
          title="Install app"
          onClick={onClick}
        >
          Install
        </button>
      </div>
    </div>
  );
};

export default InstallPWA;
