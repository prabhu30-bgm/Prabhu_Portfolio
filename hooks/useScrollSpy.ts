import { useEffect, useState } from 'react';

export function useScrollSpy(ids: string[], offset = 150): string {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const listener = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = 0; i < ids.length; i++) {
        const id = ids[i];
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveId(id);
          return;
        }
      }
    };

    window.addEventListener('scroll', listener, { passive: true });
    listener();

    return () => window.removeEventListener('scroll', listener);
  }, [ids, offset]);

  return activeId;
}
