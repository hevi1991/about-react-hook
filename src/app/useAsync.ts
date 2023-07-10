import { useEffect, useState } from "react";

export default function useAsync(fetcher: () => Promise<any>) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();
  const [data, setData] = useState();

  useEffect(() => {
    const action = async () => {
      setLoading(true);
      try {
        const response = await fetcher();
        setData(response);
      } catch (e) {
        console.error(e);
        setError(e);
      }
      setLoading(false);
    };
    action();
  }, [fetcher]);

  return { loading, error, data, execute: fetcher };
}
