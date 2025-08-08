import { useEffect, useRef } from 'react';

export default function VRViewer({ sceneSrc, title = 'VR Scene' }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.setAttribute('allowvr', 'true');
      iframe.setAttribute('allow', 'xr-spatial-tracking; fullscreen');
    }
  }, []);

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-800 shadow-lg">
      <iframe
        ref={iframeRef}
        title={title}
        src={sceneSrc}
        allowFullScreen
        className="w-full h-full"
        loading="lazy"
        frameBorder="0"
      ></iframe>
    </div>
  );
}