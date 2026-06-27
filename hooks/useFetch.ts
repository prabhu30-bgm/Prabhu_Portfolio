import { useEffect, useState } from 'react';

export function useFetch<T>(url: string, fallbackData: T) {
  const [data, setData] = useState<T>(fallbackData);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();

        if (!mounted) return;
        setData(json);
        setError(null);
        console.log(`[useFetch] Successfully loaded data from ${url}`);
      } catch (err) {
        if (!mounted) return;

        const errorInstance =
          err instanceof Error ? err : new Error(String(err));

        setError(errorInstance);
        setData(fallbackData);
        console.warn(
          `[useFetch] Failed to fetch from ${url}. Falling back to local static data. Error:`,
          errorInstance.message
        );
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      mounted = false;
    };
  }, [url, fallbackData]);

  return { data, loading, error };
}
